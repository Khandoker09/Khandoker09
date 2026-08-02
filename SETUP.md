# Deploy the updated tanjim.net website

This package is ready for GitHub Pages. It contains the updated research profile, A1/A3 qualification, three poster PDFs and previews, and a professional GitHub profile README.

## Files you normally edit later

```text
content/site-data.js  # website text and records
README.md             # public GitHub profile README
```

You normally do not need to edit:

```text
index.html
assets/styles.css
assets/app.js
```

## Preview on your computer

Open a terminal inside this folder and run:

```bash
python3 -m http.server 8000
```

On Windows, this may be:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Replace the old GitHub Pages site using Git

```bash
git clone https://github.com/Khandoker09/Khandoker09.git
cd Khandoker09
```

Create a backup branch before replacing the old Jekyll site:

```bash
git checkout -b legacy-jekyll
git push -u origin legacy-jekyll
git checkout main
```

Delete the old Jekyll files:

```bash
rm -f index.md projects.md publications.md contact.md _config.yml Gemfile Gemfile.lock
```

Copy **all files and folders inside this package** into the cloned `Khandoker09` folder. Do not upload the ZIP itself.

Then publish:

```bash
git add -A
git commit -m "Update portfolio with current research, posters, and UAS qualification"
git push origin main
```

## GitHub Pages settings

In the repository:

1. Open **Settings**.
2. Open **Pages**.
3. Choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Keep the custom domain as `tanjim.net`.
6. Enable **Enforce HTTPS** after the DNS check succeeds.

The root `CNAME` file is already configured for `tanjim.net`.

## Browser-only upload method

GitHub's browser uploader can be used, but it is slower for folders. Unzip the package first, create a backup branch, delete the old Jekyll files, and upload the package contents to the repository root. Preserve the `assets/` and `content/` folder structure exactly.

## Important privacy note

The original UAS certificate is not included in the public site package. The website shows the qualification type and validity date but omits the registration number and QR code.
