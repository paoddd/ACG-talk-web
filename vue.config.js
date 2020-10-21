"use strict"
const path = require('path');
const defaultSettings = require('./src/settings.js')

const name = defaultSettings.title || 'ACG TALK' // page title

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
    chainWebpack(config) {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}