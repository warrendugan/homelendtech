## Steps taken to create this project:
* `ng new homelendtech --skipTests --style=scss`
* `cd homelendtech/`
* `code .`
* `ng add @angular/material`
* `ng add @nguniversal/express-engine --clientProject homelendtech`
* `ng add @angular/pwa --project homelendtech`

## Creating VS Code Workspace
* Create `.vscode` folder and create a file within it called settings.json
* Create a JSON object and assign `"editor.formatOnSave": true`

## Generating Assets
* Have an SVG logo and icon ready for generating assets
* Using https://ezgif.com/svg-to-png convert the icon to a 512x512 square (preferably with a transparent background)
* Download and save as `icon.png` at the root of your project
* Run `ngx-pwa-icons` to generate icon variants for PWA
* Follow the instructions on https://www.npmjs.com/package/pwa-asset-generator to generate splash screens how you'd like them (there are a lot of options)
* Upload your SVG icon to https://realfavicongenerator.net/ to generate various vendor specific settings for PWA and favicon preferences
* Download the package and place the icons in assets => icons
* Copy the HTML and place in `index.html`
* Change the path for the icons in index.html to point to assets => icons where they have been placed
* Remove existing theme color meta tag and use the one provided in your favicon package
* Drag the browserconfif file adjacent to the index.html file
* Copy the icon array from site.webmanifest and paste into the icons array in manifest.webmanifest (change the icon paths to assets => icons)
* Copy the theme color and background color values over as well
* Delete the manifest link in index.html and delete the file if you added it to the project (you only need manifest.webmanifest, not site.webmanifest)
