const makeFederation = require('@iobroker/vis-2-widgets-react-dev/modulefederation.config');

module.exports = makeFederation(
    'echarts',
    {
        './OpenSmartCityMap': './src/OpenSmartCityMap',
        './translations': './src/translations',
    }
);