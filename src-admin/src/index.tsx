import { createRoot } from 'react-dom/client';

import App from './App';
import pack from '../package.json';
import './index.css';

window.adapterName = 'opensmartcity';
window.sentryDSN = 'https://5ad729dbed504d15aa8bde423cae9a8e@sentry.iobroker.net/57';

console.log(`iobroker.${window.adapterName}@${pack.version}`);

const container = document.getElementById('root');
if (container) {
    // GenericApp creates the theme itself and follows the theme of the admin
    createRoot(container).render(<App />);
}
