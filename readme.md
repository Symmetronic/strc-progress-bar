[![Build Status](https://travis-ci.com/Symmetronic/strc-progress-bar.svg?branch=master)](https://travis-ci.com/Symmetronic/strc-progress-bar) [![GitHub License](https://img.shields.io/github/license/Symmetronic/strc-progress-bar)](https://github.com/Symmetronic/strc-progress-bar/blob/master/LICENSE) [![npm Version](https://img.shields.io/npm/v/strc-progress-bar)](https://www.npmjs.com/package/strc-progress-bar) [![npm Downloads](https://img.shields.io/npm/dm/strc-progress-bar)](https://npmcharts.com/compare/strc-progress-bar?minimal=true)

# Symmetronic Progress Bar

A simple progress bar.

![The progress bar component](/assets/progress-bar.gif)

## Using this component

### Script tag

- Put the following script tag `<script src='https://unpkg.com/strc-progress-bar@2.0.9/dist/strc-progress-bar.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, HTML, etc.

### Node Modules

- Run `npm install strc-progress-bar --save`
- Put the following script tag `<script src='node_modules/strc-progress-bar/dist/strc-progress-bar.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, HTML, etc.

### In a Stencil app

- Run `npm install strc-progress-bar --save`
- Add an import to the npm packages `import strc-progress-bar;`
- Then you can use the element anywhere in your Stencil app.

### In a React app

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

- Then you can use the element anywhere in your React app.

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
