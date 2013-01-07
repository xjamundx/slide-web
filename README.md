slide-web
=========

Generic Backbone/AMD/Handlebars example.

## Setup

This app shows some fake slides, to get started checkout the out and type the following:

    npm install
    node app.js

## Notes

To see the AMD version go to this URL:
http://localhost:3000/index-amd.html

Important files:
* /public/js/ - non-amd version
* /public/js-amd/ - amd version
* /public/js-amd/app.js - main app
* /public/js-amd/app.build.js - build settings
* /public/index-amd.html - shows how to setup require.js
* /public/index-amd.built.html - shows how to use compiled version

### Compiling

    cd public/js-amd/
    r.js -o app.build.js 
