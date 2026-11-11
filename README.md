# Daybub: Baby Tracker official website

> ⚠️ **警告：请勿直接修改此镜像仓库！本仓库属于镜像仓库**，由私有 monorepo `neo-idea/official-website` 自动同步发布，手动修改会被下次发布覆盖。

Static, dependency-free production site.

The bilingual homepage leads with the Daybub App Store banner. Responsive WebP
candidates (`assets/daybub-banner-900.webp`, `1440`, and `2400`) keep the hero
light while preserving text readability on retina displays. On phones the banner
uses a 16:10 crop focused on the headline; on desktop it keeps the full 3.03:1
creative. `assets/daybub-social.jpg` is the shared 1200×630 Open Graph/Twitter
card. Product captures below the hero remain locale-specific WebP files and use
responsive 360w / 480w / 720w candidates. The banner loads eagerly with
`fetchpriority="high"` while later visuals use `fetchpriority="low"`.

- Chinese home (default): `https://babyoneday.zpad.app/`
- English home: `https://babyoneday.zpad.app/en/`
- Chinese support / privacy / terms: `/support.html`, `/privacy-policy.html`, `/terms-of-service.html`
- English support / privacy / terms: `/en/support.html`, `/en/privacy-policy.html`, `/en/terms-of-service.html`

The website follows the browser's preferred language on its Chinese entry URLs:
browsers whose primary language starts with `zh` stay on Chinese, while all
other languages automatically enter the matching English URL. The language
switches use `?lang=zh` / `?lang=en` and remember that choice only for the
current browser session, so following an internal link does not undo a manual
language choice. Both language versions expose equivalent content,
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
