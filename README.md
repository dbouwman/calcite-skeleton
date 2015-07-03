# Calcite Skeleton

This is a very simple application skeleton that includes the following:
- jquery
- bootstrap
- bootstrap-calcite overrides 
- jsapi 3.13
- gulp-based build process (see below)

## NOTE:
This is using a very early, incomplete version of calcite, along with a mess of hacks and overrides. This SHOULD ONLY be used for projects you intend to throw away once Bootstrap Calcite is complete. You have been warned! :)


## Installing
- clone the repo
- `npm install`
- ensure gulp is installed globally `npm install -g gulp`

## Starting Development Server
- `gulp serve`
Once this is running you can edit the scss, html and js files, and the app will automatically re-load.

## Creating a Build
- `gulp build`
This will compile the sass, combine and minify all the resulting css files, combine and minify all the js files, according to the build sections in the index.html file, and put the output into ./dist.

## Viewing the built site
- `gulp serve:dist`
This will start a local web server and load files out of the ./dist folder. This is a good way to test your app prior to deploying it.

## Deploying the App
This skeleton does not provide any deployment tasks. However, there are gulp tasks for all manner of deployments - s3, ftp etc.
