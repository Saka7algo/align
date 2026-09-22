# ALIGN website

Dependency-free static website. Node.js 20 or later is required for the build and preview scripts.

Run `npm run dev` to build and preview at http://127.0.0.1:4173. Run `npm run build` after source edits, and `npm test` to verify generated pages. The preview server serves `dist`; it does not rebuild automatically.

Edit service content and page templates in `build.mjs`, styles in `style.css`, and progressive interactions in `app.js`. `dist` contains the generated static site. The supplied logo is retained in `assets/align-logo.jpeg` and copied into the output during build.

`refinements.css` loads after `style.css` and contains the current responsive layout, spacing and typography refinements. Edit those overrides when adjusting the current presentation.

Implemented: homepage, six service pages, method, registry and a 404 page. Contact details and incomplete resources are intentionally absent. There is no analytics, subscription backend, intake form or external font dependency. Publication and a full accessibility audit remain future work. See the parent PLAN.md and CHANGELOG.md.
