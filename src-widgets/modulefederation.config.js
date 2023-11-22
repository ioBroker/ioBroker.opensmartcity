const makeFederation = require('@iobroker/vis-2-widgets-react-dev/modulefederation.config');

module.exports = makeFederation(
    'opensmartcity',
    {
        './OpenSmartCityMap': './src/OpenSmartCityMap',
        './translations': './src/translations',
    }
);