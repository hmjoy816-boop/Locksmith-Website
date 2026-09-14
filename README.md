# Ironclad Locksmith — website

A 5-page static website: **Home** (`index.html`), **Services** (`services.html`),
**Broken Key Extraction** (`service-broken-key.html`), **About** (`about.html`),
and **Contact** (`contact.html`). All pages share `css/styles.css` and `js/main.js`,
and link to each other through their navigation menus and footers.

No build tools, no installs — it's plain HTML/CSS/JS, so it runs straight from
GitHub Pages.

## File structure

```
locksmith-site/
├── index.html                 (Home)
├── services.html              (Services)
├── service-broken-key.html    (Broken Key Extraction — single service page)
├── about.html
├── contact.html
├── css/
│   └── styles.css             (shared styling for every page)
├── js/
│   └── main.js                (mobile menu, form handling, footer year)
└── README.md
```

## 1. Before you publish: replace the placeholders

Search each HTML file for these and swap in your real details (your editor's
"Find in files" / GitHub's search box works fine):

- **Phone number**: `(555) 010-2929` and `tel:+15550102929`
- **Email**: `help@ironcladlocksmith.example`
- **Business name**: `Ironclad Locksmith` / `Ironclad`
- **License number**: `Placeholder license #LOC-000000` (footer of every page)
- Testimonials, team size, and "since 2013" on the About page — replace with
  your real story once you have it.

## 2. Put it on GitHub

1. Create a new repository on [github.com](https://github.com) — for example
   `ironclad-locksmith-site`. Don't add a README when creating it (you already
   have one here).
2. Upload the files: on the repo's page, click **Add file → Upload files**,
   then drag in everything from this folder (keep the `css/` and `js/`
   subfolders — GitHub will preserve them).
3. Commit the upload.

If you'd rather use git from a terminal instead of the web upload:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 3. Turn on GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. GitHub gives you a live URL after a minute or two, usually
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

Any time you upload changed files and commit, the live site updates
automatically within a minute or so.

## 4. Making the contact form actually send you emails

GitHub Pages only serves static files — it can't run server code to send
email. Right now, submitting the form just shows an on-page "message sent"
confirmation without emailing anyone. To make it real, the easiest options are:

- **[Formspree](https://formspree.io)** (free tier available): sign up, get a
  form endpoint URL, then change the form's opening tag in `contact.html`
  from:
  ```html
  <form id="contact-form">
  ```
  to:
  ```html
  <form id="contact-form" action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
  ```
  and remove the `e.preventDefault();` line in `js/main.js` inside the
  contact-form submit handler, since Formspree needs the normal form
  submission to go through.
- **[Netlify Forms](https://www.netlify.com/)** works similarly if you decide
  to host on Netlify instead of GitHub Pages.

## 5. Adding a real map

The Contact page has a placeholder box where a map would go. To add a real
Google Map: open [Google Maps](https://maps.google.com), search your
business address, click **Share → Embed a map**, and paste the `<iframe>`
code it gives you in place of the `.map-placeholder` `<div>` in
`contact.html`.

## 6. Custom domain (optional)

If you buy a domain (e.g. `ironcladlocksmith.com`), add it under
**Settings → Pages → Custom domain** in your GitHub repo, and follow GitHub's
prompt to add a DNS record with your domain registrar. GitHub's own guide
covers this step by step: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>
