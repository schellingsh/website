# schelling.sh website

React single-page site built with Vite and served as static files.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

This outputs static files in `dist/`.

## Docker

```bash
docker build -t schelling-website .
docker run --rm -p 8080:80 schelling-website
```

The Docker image runs a multi-stage build (`npm run build`) and serves `dist/` with nginx.
