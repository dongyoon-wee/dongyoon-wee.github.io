# dongyoon-wee.github.io

Personal academic homepage of **Dongyoon Wee** — AI Research Engineer at NAVER Corp,
leading the Video team on video and human-centric computer vision.

Live site: <https://dongyoon-wee.github.io>

Built with [Astro](https://astro.build) + Tailwind CSS v4. The design is a fully
monochrome, editorial layout referencing <https://www.anthropic.com/research> — no
color; typography contrast and whitespace carry the design.

## Develop

Requires Node ≥ 22.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Structure

| Path | Purpose |
|------|---------|
| `src/data/publications.yaml` | All 27 publications (the content source) |
| `src/data/talks.yaml` | Talks |
| `src/content/pages/*.md` | Prose for About / Research |
| `src/pages/*.astro` | Routes: home, research, publications, cv |
| `src/components/` | `Hero`, `PublicationList`, `MetricStat`, `ResearchAreaSection`, `Video`, `YouTube`, `Nav`, `Footer` |
| `src/layouts/Base.astro` | Shared HTML shell |
| `src/styles/global.css` | Design tokens (`@theme`) + fonts |
| `src/content.config.ts` | Content collection schemas (zod) |

## Adding content

- **Publication** — add an entry to `src/data/publications.yaml`. The key is the
  slug; fields are validated by the schema in `src/content.config.ts`
  (`title`, `venue`, `year`, `status`, `area`, `date`, optional `urlPdf` /
  `urlProject` / `tags`).
- **Talk** — add an entry to `src/data/talks.yaml`.
- **Demo media** — use the `<Video>` (self-hosted MP4/WebM) or `<YouTube>`
  component inside a page or markdown.

## Deploy

Pushing to `master` triggers `.github/workflows/astro.yml`, which builds and
deploys to GitHub Pages via `withastro/action` + `actions/deploy-pages`.

> One-time setup: in the repo **Settings → Pages**, set the build source to
> **GitHub Actions**.

## Notes

- Content is maintained from canonical career notes in a separate Obsidian vault;
  keep `publications.yaml` and `cv.astro` in sync with that source of truth.
- The previous Jekyll/academicpages version of this site is preserved on the
  `backup/jekyll-state` branch.
