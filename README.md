# Static page template

Minimal static site template for deploying a subpath on `dy.tsou.me` via [cloudflare-subpath-deploy](https://github.com/dytsou/cloudflare-subpath-deploy).

## 1. Create a repo from this template

Use **Use this template** on GitHub, or:

```bash
gh repo create dytsou/my-page --template dytsou/static-page-template --public
```

## 2. Customize `deploy-contract.json`

Replace placeholders:

| Field | Example |
|-------|---------|
| `ownerRepo` | `dytsou/my-page` |
| `canonicalPath` | `/my-page/` |
| `canonicalUrl` | `https://dy.tsou.me/my-page/` |
| `pagesProject` | `dy-tsou-my-page` |
| `previewUrl` | optional preview hostname |

Build output must land in `dist/` with `index.html` at the root (Front Door strips the subpath).

## 3. Set GitHub secrets

On your new repo:

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | Pages deploy (Account → Cloudflare Pages → Edit) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `MANIFEST_REPO_TOKEN` | Fine-grained PAT on `dytsou/site` with Contents + Pull requests write |

## 4. Push to `main`

CI builds and uploads `dist/`. Deploy runs after CI succeeds, deploys to Cloudflare Pages, and opens a manifest PR on `dytsou/site`. Merge that PR to route `dy.tsou.me/<slug>/` through the Front Door Worker.

## Local dev

```bash
pnpm install
pnpm build
# open dist/index.html
```

## Requirements

- Front Door Worker + `route-manifest.json` live in `dytsou/site` (already set up for dy.tsou.me)
- `main` branch protection with required CI checks (recommended)

## License

MIT
