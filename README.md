# 一日一宝 BabyOneDay official website

> ⚠️ **警告：请勿直接修改此镜像仓库！本仓库属于镜像仓库**，由私有 monorepo `neo-idea/official-website` 自动同步发布，手动修改会被下次发布覆盖。

Static, dependency-free production site.

- Canonical home: `https://babyoneday.zpad.app/`
- Support: `https://babyoneday.zpad.app/support.html`
- Privacy: `https://babyoneday.zpad.app/privacy-policy.html`
- Terms: `https://babyoneday.zpad.app/terms-of-service.html`

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
