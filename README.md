<div align="center">
  <br>
  <br>
  <img src="logo.png" alt="The Diffr logo: two slightly overlapping diamond shapes" width="270" height="174">

  <br>
</div>

# Diffr

> Create and share diffs with Diffr, the privacy focused online text diffing tool.

This is the source code repository of the Diffr app. You can find the app at [loilo.github.io/diffr](https://loilo.github.io/diffr/).

## Technologies

The core technologies this project uses are:

<!-- prettier-ignore -->
Technology | Purpose
-|-
**[Monaco Editor](https://microsoft.github.io/monaco-editor/)** | A text/code editor by Microsoft, used for the editing and diffing area itself.
**[Nuxt](https://nuxt.com/)** | An application framework for Vue.js, used for prerendering, PWA support and overall application structure.
**[`lz-string`](https://www.npmjs.com/package/lz-string)** | A quick and space-efficient compression algorithm, used for serializing the current app state in the URL anchor in as few characters as possible.
**[GitHub Pages](https://pages.github.com/)** | This app does (purposefully) not generate any income. Therefore, free hosting is essential to keep it running.

## Setup

Clone this repository and install its dependencies using [npm](https://npmjs.com/).

```bash
npm ci
```

## Local Development

Start a local dev server with hot reloading:

```bash
npm run dev
```

## Generate Production Site

Create a production-ready site in the `dist` folder:

```
npm run generate
```

Set the `BASE_URL` environment variable to create a build that can be hosted in a subfolder of a domain, e.g.:

```
BASE_URL=/diffr/ npm run generate
```