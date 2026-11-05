# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`iobroker.opensmartcity` reads sensor data from a FROST server (OGC SensorThings API v1.1, default: the server of the city of Solingen) and mirrors the selected "things" (stations) with their data streams as ioBroker channels/states. It also ships a vis-2 widget (`OpenSmartCityMap`) that shows the stations on an OpenStreetMap map.

TypeScript backend (CommonJS output). Sources live in `src/`, the runnable code is the compiled `build/` (`package.json` `main` is `build/main.js`). `build/` is gitignored — run the build before starting the adapter or the integration tests. The settings dialog (`src-admin/`) and the widgets (`src-widgets/`) are separate Vite/React apps whose build output **is committed** in `admin/` and `widgets/opensmartcity/`.

## Commands

```bash
npm run build-backend                     # tsc -p tsconfig.build.json  -> build/
npm run build                             # backend + admin + widgets (tasks.ts)
npm run build-admin                       # src-admin -> admin/ (clean, npm i, tsc + vite build, copy, patch index_m.html)
npm run build-widgets                     # src-widgets -> widgets/opensmartcity/ (clean, npm i, tsc + vite build, copy)
npm run 0-clean / 1-npm / 2-build / 3-copy / 4-patch                  # single steps of the admin build
npm run 0-widget-clean / 1-widget-npm / 2-widget-build / 3-widget-copy  # single steps of the widget build
npm run watch                             # backend in watch mode
npm run check                             # type check of src/ and tasks.ts (tsconfig.json, noEmit)
npm run check-admin                       # type check of src-admin (needs src-admin/node_modules)
npm run lint                              # eslint of src/ and tasks.ts (@iobroker/eslint-config, flat config)
npm run lint-admin                        # eslint of src-admin
npx eslint -c eslint.config.mjs --fix src # autofix + prettier formatting
cd src-admin && npm start                 # vite dev server on :3000 against the admin on :8081, open http://localhost:3000/?0

npm run test:package                      # validates package.json / io-package.json / admin JSON (fast, downloads the schema)
npm run test:integration                  # js-controller + adapter, needs build/ and NO running js-controller on the machine
npm run test:widgets                      # vis-2 + browser test of the widgets (@iobroker/vis-2-widgets-testing, not in CI)
npm run npm                               # npm i in the root, src-admin and src-widgets
npm run release-patch                     # @alcalzone/release-script, moves README changelog into io-package news
```

There is deliberately **no `prepare` script** — `npm ci`/`npm install` does not build. Because `build/` is neither committed nor built on install, `common.nogit` is `true` in `io-package.json`: the adapter can only be installed from npm, not from GitHub. CI builds only the backend (`build-command: npm run build-backend`), because admin and widgets are committed — after a change in `src-admin/` or `src-widgets/` run `npm run build-admin` / `npm run build-widgets` and commit the output.

## Architecture

| Path | Content |
| --- | --- |
| `src/main.ts` | `OpenSmartCityAdapter extends utils.Adapter`: creates objects, polls the FROST server, answers `getThings` |
| `src/lib/types.ts` | shapes of the FROST answers (`FrostThing`, `FrostDatastream`, `FrostCollection`) |
| `src/lib/adapter-config.d.ts` | augments `ioBroker.AdapterConfig` — hand-maintained, keep in sync with `native` in io-package.json and `src-admin/src/types.ts` |
| `src-admin/` | settings dialog (`admin/index_m.html`, `adminUI.config: materialize`): Vite, TypeScript, React 19, MUI 9, `@iobroker/gui-components` 10, OpenLayers. Tabs "Options" (connection) and "Sensors" (selected things, values, map) |
| `src-widgets/` | vis-2 widget set (Vite + `@module-federation/vite`); name, filename and exposes must match `common.visWidgets` in io-package.json |
| `tasks.ts` | build steps (`@iobroker/build-tools`), run with `tsx` |

### Backend flow

- `onReady()`: `createStates()` reads all non-decommissioned things (`Things?...&$expand=Datastreams`) and creates for every thing in `native.things` a channel `<thingId>` (with `native.coordinates`), a `number` state `<thingId>.<datastreamId>` per data stream and the `boolean` state `<thingId>.status` (`indicator.reachable`). Existing objects are never updated. Then `getData()` starts polling.
- `getData()`: one `Datastreams` query with the latest observation of every data stream of the selected things, writes the values with the observation time as `ts`, reschedules itself with `this.setTimeout` (`native.pollInterval`, parsed with `parseInt`, at least 5000 ms — the old dialog stored it as string).
- `getUrl()` follows `@iot.nextLink` over all pages. On a request error it logs and returns what it has (an empty list if the first page failed); `null` only for an invalid URL. An empty list is never cached in `lastResult`.
- `onMessage`: `getThings` returns `{ result: FrostThing[] }` (cached `lastResult`) — used by the "Sensors" tab to list the available stations. Do not rename it.
- Channel names: data streams are named like `Station (Temperature)`; the part before the brackets is appended to the channel name, the part in the brackets becomes the state name.

### Conventions

- Object IDs, roles, `native` keys and the `getThings` command must stay stable — existing installations depend on them.
- `native.password` is **not** encrypted (only `protectedNative`). Switching to `encryptedNative` would make the stored passwords of existing instances unreadable.
- The admin moment locales are imported from `moment/dist/locale/*` (ESM): the UMD files under `moment/locale/*` would register on a second moment copy in the Vite bundle.
- `tasks.ts` patches `index.html` of the admin with `patchHtmlFile(..., '../..')`; the socket.io loader block in `src-admin/index.html` must not contain a `<` character.
- Timers in the backend only via `this.setTimeout` / `this.clearTimeout` (stopped automatically on unload).

## Release

Changelog entries go under `### **WORK IN PROGRESS**` in `README.md`; `npm run release-patch|minor|major` (release-script with the `iobroker` and `license` plugins) moves them into `io-package.json` `news`, bumps the versions and tags. The `deploy` job of `.github/workflows/test-and-release.yml` builds the backend and publishes to npm (trusted publishing).
