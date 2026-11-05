// Augments the globally declared ioBroker types with everything this adapter adds.
// Keep in sync with `native` in io-package.json and with the settings dialog in src-admin/src/Tabs/*.tsx.

declare global {
    namespace ioBroker {
        interface AdapterConfig {
            /** Only shown in the settings, the backend does not read it. "Solingen" is the only option. */
            city: string;
            /** Base URL of the FROST server, the paths ("Things?...") are appended without a separator */
            url: string;
            /** User for the HTTP basic authentication */
            user: string;
            /** Password for the HTTP basic authentication. Stored in plain text (`protectedNative`, not `encryptedNative`). */
            password: string;
            /**
             * Poll interval in ms, at least 5000.
             * The settings dialog of the versions <= 0.2.x stored it as string, therefore it is parsed with parseInt().
             */
            pollInterval: number | string;
            /** IDs of the selected things (`@iot.id` of the FROST server, as string) */
            things: string[];
        }
    }
}

export {};
