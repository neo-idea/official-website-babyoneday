# 一日一宝 Baby by Day official website

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
`zpad.app`, `babyoneday` must be a DNS-only CNAME to `neo-idea.github.io` so
GitHub Pages can issue and renew the custom-domain HTTPS certificate.

## Local preview

```bash
cd babyoneday
python3 -m http.server 4173
```
