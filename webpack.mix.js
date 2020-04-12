let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.sass('src/zal.scss', 'dist/zal.css')


// Test Environment

mix.copy('dist/zal.css', 'test/build.css');

mix.disableNotifications();