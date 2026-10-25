# Zayed Prep

Free placement prep tracker for engineering students: aptitude, Coding 100, DSA, core CS, foundations, projects, communication, design, cloud & AI, and interview prep. Includes tips, free resources and cheat sheets.

- Runs entirely on the device. No server, no login, no data collection.
- Progress is saved on the device; use **Log → Back up** to move it.
- Works offline once opened.

## Get the APK and website (free, ~10 minutes, one time)

1. Create a free account at github.com.
2. Click **+ → New repository**, name it `zayed-prep`, set it **Public**, create it.
3. Click **uploading an existing file**, drag in everything from this folder (including the hidden `.github` folder; if your file browser hides it, use GitHub Desktop or the command line below), and click **Commit changes**.
4. Go to **Settings → Pages**, and under *Build and deployment* set **Source: GitHub Actions**.
5. Go to the **Actions** tab. The *Build APK and publish website* run starts on its own (or click **Run workflow**). Wait about 5–8 minutes for a green tick.
6. **APK:** open the repo's **Releases** (right side of the repo page) and download `ZayedPrep.apk`. Share this link with students.
7. **Website:** it's live at `https://<your-username>.github.io/zayed-prep/`. On a phone, open it and use **Add to Home Screen** (works on iPhone too).

Command line instead of step 3:
```
git init && git add . && git commit -m "Zayed Prep v1"
git branch -M main
git remote add origin https://github.com/<your-username>/zayed-prep.git
git push -u origin main
```

### Installing the APK on Android
Open the downloaded file. Android will ask to allow installs from this source (Chrome or Files); allow it once, then tap **Install**. Play Protect may warn because the app isn't on the Play Store; tap **More details → Install anyway**.

## Editing content
All checklists, tips, resources and cheat sheets are in `www/data.js`. Add new checklist items at the **end** of a group so existing progress stays lined up. Push the change and GitHub rebuilds both the APK and the website.

After changing files, also bump `VERSION` in `www/sw.js` so website users get the update.

## Other free hosting for the website
Drag the `www` folder onto Netlify Drop (app.netlify.com/drop) or import the repo in Vercel / Cloudflare Pages.

## Build the APK on your own PC (optional)
Install Node 22, JDK 21 and Android Studio, then:
```
npm install
npx cap sync android
npx cap open android   # Build → Build APK(s)
```
