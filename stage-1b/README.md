# Stage 1B: Testable Profile Card

An accessible, and responsive profile card built with a focus on semantic HTML and precise JavaScript state.

## 🚀 Features

- **Live Epoch Clock**: High-precision UTC time display in milliseconds, updating in real-time.
- **Glassmorphism UI**: Advanced CSS styling with backdrop filters and semi-transparent layers for a premium, modern feel.
- **Responsive Architecture**: Fully fluid layout that scales seamlessly from mobile to desktop.

## 🛠️ Technical Stack

- **HTML5**: Semantic structure using `<article>`, `<figure>`, `<nav>`, and `<section>`.
- **CSS3**: Custom styling utilizing Flexbox and glassmorphism design patterns.
- **Vanilla JavaScript**: Real-time DOM manipulation for millisecond-accurate time tracking.

## 📝 Implementation Details & Test IDs
Every required element is mapped to a specific `data-testid` for automated grading stability:

- `test-profile-card`: Root container
- `test-user-name`: bntyTechie
- `test-user-bio`:  bio
- `test-user-time`: Current Epoch time in ms
- `test-user-avatar`: Profile image with alt text
- `test-user-hobbies`: List of personal hobbies
- `test-user-dislikes`: List of dislikes
- `test-user-social-links`: Social navigation container

## ♿ Accessibility Notes

- **Screen Readers**: The millisecond clock uses `aria-live="polite"` to ensure updates are accessible without being intrusive.
- **Keyboard Navigation**: All social links are keyboard-focusable with visible focus rings for better visibility.
- **Semantics**: Used `<figure>` and `<figcaption>` patterns (where applicable) to provide context to visual media.

## 🏗️ Running Locally

1. Clone the repository.
2. Navigate to the `/stage-1b` directory.
3. Ensure `index.html` and `style.css` are in the same folder.
4. Open `index.html` in any modern browser.