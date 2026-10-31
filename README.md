# 一日一宝 BabyOneDay official website

> ⚠️ **警告：请勿直接修改此镜像仓库！本仓库属于镜像仓库**，由私有 monorepo `neo-idea/official-website` 自动同步发布，手动修改会被下次发布覆盖。

Static, dependency-free production site.

The home page uses the latest bilingual product captures from the iOS
screenshot project. Homepage images are locale-specific WebP files
(`home-zh.webp`, `home-en.webp`, and so on); `assets/social-zh.jpg` and `assets/social-en.jpg`
are the 1.20:1 locale-specific Open Graph/Twitter share cards. Legal and support pages intentionally
keep a narrower reading layout through `<body class="legal">.

- Chinese home (default): `https://babyoneday.zpad.app/`
- English home: `https://babyoneday.zpad.app/en/`
- Chinese support / privacy / terms: `/support.html`, `/privacy-policy.html`, `/terms-of-service.html`
- English support / privacy / terms: `/en/support.html`, `/en/privacy-policy.html`, `/en/terms-of-service.html`

The app routes mainland-China (`CN`) devices to the Chinese pages and all other
regions to the English pages. Both language versions expose equivalent content,
per-page canonical URLs, language switches, and `hreflang` alternates.

## Deployment

This directory is published by the monorepo workflow to
`neo-idea/official-website-babyoneday` through a subtree split. Do not edit the
mirror repository directly.

The `CNAME` file must remain `babyoneday.zpad.app`. In Cloudflare DNS for
`zpad.app`, `babyoneday` is a proxied CNAME to `neo-idea.github.io`. Cloudflare
terminates public HTTPS and proxies the request to GitHub Pages.

## Local preview

```bash
cd babyoneday
python3 -m http.server 4173
```
