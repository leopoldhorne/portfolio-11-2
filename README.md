# leopoldhorne.com

Personal site for Leopold Horne, built with Next.js (App Router), TypeScript and Tailwind CSS v4. It's a single static page with no backend.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing content

All copy, links, case studies, projects and timeline entries live in **`content/site.ts`**. Components in `components/` only handle presentation.

- **Placeholders:** text wrapped in `[[double brackets]]` renders as a dashed yellow marker on the page. Search `content/site.ts` for `[[` to find everything that still needs a verified fact before launch.
- **LinkedIn:** set `links.linkedin` to your profile URL. While it is `null`, LinkedIn buttons render as a placeholder.
- **Case studies:** each entry has `problem`, `approach`, `outcome` and a conceptual `diagram` flow. Keep descriptions at the architecture level, with no confidential details.
- **Archive projects:** add an item to `archive` with an image in `public/images/`.

## Structure

```
app/
  layout.tsx            fonts, metadata, JSON-LD
  page.tsx              section order
  globals.css           design tokens, flow diagram, placeholder styles
  opengraph-image.tsx   generated social preview (also used for Twitter)
  robots.ts, sitemap.ts
components/             one file per section, plus ui.tsx primitives
content/site.ts         all editable content
public/images/          screenshots; ScaleCue images come from its App Store listing
```
