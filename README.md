# Abinav Sundar — Personal Portfolio

A responsive multi-page portfolio website built with HTML, CSS and vanilla JavaScript.

## Run locally
1. Extract the ZIP file.
2. Open the `abinav_portfolio` folder.
3. Double-click `index.html` to preview it in a browser.
4. For the best development experience, open the folder in VS Code and use the Live Server extension.

## Pages
- `index.html` — Home
- `about.html` — About, background and skills
- `services.html` — Web development, video editing and poster designing
- `play-zone.html` — Lightweight browser games
- `contact.html` — Contact information and links

## Personalise your website

### 1. Contact details
Open `js/main.js` and edit the values at the top:
- `WHATSAPP_NUMBER` is already set to `919629240407`.
- Replace `INSTAGRAM_URL` with your Instagram profile URL.
- Replace `LINKEDIN_URL` with your LinkedIn profile URL if you want to use it.

### 2. Profile photo
Add your photo to the `assets` folder as `profile.jpg`. Then replace the photo placeholder in `index.html` and `about.html` with:
```html
<img src="assets/profile.jpg" alt="Abinav Sundar">
```
Add this CSS if needed:
```css
.about-photo img, .hero-image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 3. Update your information
Edit the placeholder text in `about.html` and `index.html`. Add your education, skills, achievements, project descriptions, images and links.

### 4. Change project placeholders
The Play Zone games are in `play-zone.html` and `js/play-zone.js`.

## Notes
- The design uses Google Fonts (Clash Display and DM Sans) and Font Awesome icons via CDNs, so an internet connection is needed for those assets.
- This is a front-end static website. It does not include a database, admin panel or message-storage backend.
- Before publishing, test all links and replace all remaining placeholder details.

## Play Zone
The former Projects page is now a Play Zone with Tic-Tac-Toe, Memory Match and Reaction Time. Game logic is in `js/play-zone.js`; games run locally in the visitor's browser and do not collect or upload scores. No images or game libraries are required.
