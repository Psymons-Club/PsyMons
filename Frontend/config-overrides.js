const {
    override,
    addPostcssPlugins
} = require('customize-cra');

function overrideNervos(config) {
    config.module.rules[1].oneOf[3].options.plugins = [
        "@babel/plugin-proposal-optional-chaining"
    ];

    
    return config;
}
  

module.exports = override(overrideNervos,addPostcssPlugins([require('tailwindcss'), require('autoprefixer'),
]))