# Chrome Extension LWC Template

## Installation & Development

1. Clone the repo.
2. Run `npm install`
3. Run `npm run dev` to run it with a watcher
4. Open `chrome://extensions/`.
5. Enable `Developer mode`.
6. Click `Load unpacked extension...`.
7. Select the folder `dist` that contain the built version

## Build
1. Run `npm run build`
2. Export the `dist` folder that represent your package


## LWC modules
LWC components are stored under the path `client/modules`.

## Global CSS access
LWC is using Shadow dom and it's preventing the components to use the "global" css styling (such as SLDS style) added in the index.html file.\
To have access to this styling, `import '@lwc/synthetic-shadow';` has been added to the `main.js` file.
