# Chrome Extension boilerplate created with React Typescript

https://react.christmas/2020/12

## Getting started

Create a project based on this boilerplate.

```
$ npx degit https://github.com/sivertschou/react-typescript-chrome-extension-boilerplate.git#christmas <project-name>
```

Navigate to the project directory and install the dependencies.

```
$ npm install
```

To build the extension, and rebuild it when the files are changed, run

```
$ npm start
```

After the project has been built, a directory named `dist` has been created. You have to add this directory to your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `dist` directory.

## Files

### public

`public` contains metadata and configuration.

- icon\*.png: Icons [cf.document](https://developer.chrome.com/docs/extensions/mv3/manifest/icons/)
- manifest.json: [cf. document](https://developer.chrome.com/docs/extensions/mv3/manifest/)
  - [browser action](https://developer.chrome.com/docs/extensions/reference/browserAction/): always available in browser
    - default popup: is rendered when the icon is clicked
  - [page action](https://developer.chrome.com/docs/extensions/reference/pageAction/): only available on certain pages
  - background: background script
  - content scripts: scripts that can access the given webpages and their context
    - mathes: websites that are accessed by scripts
    - js: injected scripts
- popup.html: rendered in popup

### src

`src` contains script files.

- App.tsx + App.css: index.tsx + index.css
- popup.tsx + popup.css: mount the React code(`App.tsx`) to `public/popup.html`
- backgoround.ts, content.ts

## Terminologies

- [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction): Document Object Model
  - an HTML or XML document in memory
- [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA): Accessible Rich Internet Applications
  - define ways to make web content more accessible
  - sugar syntax??
