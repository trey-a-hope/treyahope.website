# Trey A. Hope Website

Trey Hope's personal portfolio site from 2017 ("Personal Website of Trey A. Hope, better known as Tr3umPHant.Designs"). It's a single page with sections for an about-me intro, skills with a resume link, graphic design work from 2013-2015, a photo portfolio of Los Angeles shots from 2017, visitor comments and a contact form. It's an AngularJS 1.4 app written in TypeScript, with text stored in Firebase.

## Sections

| Section | Folder | What it shows |
| --- | --- | --- |
| About | `app/Pages/About/` | intro and personal background |
| Skills | `app/Pages/Skills/` | web, mobile and design skills, plus a "View My Resume" button |
| Graphic Design | `app/Pages/GraphicDesign/` | flyers and event graphics with their creation dates |
| Portfolio | `app/Pages/Portfolio/` | photography from around Los Angeles |
| Comments | `app/Pages/Comments/` | visitor comments with a "Leave A Comment" dialog |
| Contact | `app/Pages/Contact/` | contact form with inline validation |

## How it works

- Section text is loaded from the Firebase Realtime Database (Firebase JS SDK 4.0 from the CDN) under `Home`, `About`, `Skills`, `GraphicDesign`, `Portfolio` and `Contact` (`app/Services/MyFirebaseRef.ts`). `json/Quotes.json` holds quotes for the page.
- The contact form posts to `php/sendEmail.php`, so the site needs a PHP host that can send mail.
- TypeScript in `app/` compiles to the `.js` files the page loads (`tsconfig.json`). Animations use WOW.js, and toasts use `plugins/ng-toast`.
- `index.html` includes Google Analytics.

## Tech stack

- AngularJS 1.4.8 with UI Bootstrap, TypeScript
- Bootstrap and Material Design styling, WOW.js, ngToast
- Firebase Realtime Database, PHP mail script

## Running it

```sh
php -S localhost:8000      # serves the site and runs the contact script
```

Recompile TypeScript changes with `tsc`.
