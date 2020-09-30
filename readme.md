[![Build Status](https://travis-ci.com/Symmetronic/strc-progress-bar.svg?branch=master)](https://travis-ci.com/Symmetronic/strc-progress-bar) [![GitHub License](https://img.shields.io/github/license/Symmetronic/strc-progress-bar)](https://github.com/Symmetronic/strc-progress-bar/blob/master/LICENSE) [![npm Version](https://img.shields.io/npm/v/strc-progress-bar)](https://www.npmjs.com/package/strc-progress-bar) [![npm Downloads](https://img.shields.io/npm/dm/strc-progress-bar)](https://npmcharts.com/compare/strc-progress-bar?minimal=true)

# Simple Progress Bar

A simple progress bar.

![Progress Bar Component](/assets/progress-bar.gif)

## Usage

This component is implemented as a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). Hence it can be imported in almost any setup you are using.

### CDN

- Put the following script tags in the head of your HTML file:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/strc-progress-bar@2/dist/strc-progress-bar/strc-progress-bar.esm.js"></script>
<script nomodule="" src="https://cdn.jsdelivr.net/npm/strc-progress-bar@2/dist/strc-progress-bar/strc-progress-bar.js"></script>
```

- Then you can use the element anywhere in your app.

### React

- Run `npm install strc-progress-bar --save`
- Define custom element:

```javascript
import {
  applyPolyfills,
  defineCustomElements as defineStrcProgressBar,
} from 'strc-progress-bar/loader';

applyPolyfills().then(() => {
  defineStrcProgressBar();
});
```

- If you use React with TypeScript, add types in the following way:

```typescript
import { Components as StrcProgressBarComponents } from 'strc-progress-bar';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'strc-progress-bar': StrcProgressBarComponents.StrcProgressBar,
    }
  }
}
```

- Then you can use the element anywhere in your [React](https://reactjs.org) app.

### Vue

- Run `npm install strc-progress-bar --save`
- Define custom element:

```javascript
import {
  applyPolyfills,
  defineCustomElements as defineStrcProgressBar,
} from 'strc-progress-bar/loader';

// Tell Vue to ignore all components defined in strc-progress-bar package
Vue.config.ignoredElements = [/strc-progress-bar\w*/];

// Bind custom elements to window object
applyPolyfills().then(() => {
  defineStrcProgressBar();
});
```

- Then you can use the element anywhere in your [Vue](https://vuejs.org) app.

### Stencil

- Run `npm install strc-progress-bar --save`
- Add an import to the npm package

```typescript
import 'strc-progress-bar';
```

- Then you can use the element anywhere in your [Stencil](https://stenciljs.com) app.

## API

### Updating progress

Set the progress as a JSX or HTML attribute between 0 and 1.

```html
<strc-progress-bar
  progress='0.6'
/>
```

### Styling

You can adjust the style of the progress bar using CSS variables.

```css
strc-progress-bar {
  --strc-progress-bar-color: red;
  --strc-progress-bar-background-color: gray;
  --strc-progress-bar-height: 3px;
  --strc-progress-bar-transition-duration: 0.2s;
}
```

## NPM scripts

- `npm install`: Install dependencies
- `npm start`: Build in development mode
- `npm run build`: Build in production mode
- `npm test`: Run tests
- `npm run test:watch`: Run tests in interactive watch mode
