# Build Tool Showcase

A simple web app demonstrating modern build tools, written in TypeScript and SCSS. The project showcases a responsive UI, theme switching, and a dynamic list of dev dependencies.

## Features

- TypeScript and SCSS support
- Webpack for bundling (with production and development configs)
- Babel for transpilation
- Jest for unit testing
- Responsive design with SCSS mixins and variables
- Theme switcher (light/dark mode)
- Dynamic display of dev dependencies from `package.json`

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```sh
npm install
```

### Development Server

```sh
npm run serve
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```sh
npm run build
```
The output will be in the `public/` directory.

### Run Tests

```sh
npm test
```

## Project Structure

- `src/` — Source files (TypeScript, SCSS, HTML)
- `public/` — Production build output
- `webpack.*.js` — Webpack configuration files
- `jest.config.ts` — Jest configuration
- `babel.config.js` — Babel configuration

## License

ISC

---

Designed with caffeine & chaos by Pixel & Co.
