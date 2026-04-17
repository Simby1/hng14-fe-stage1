# Stage 1a: Advanced Todo Card

An advancement of the HNG14 Stage 0 task, transitioning from a static React-based UI to a stateful, interactive application built with Vanilla JavaScript, HTML5, and pure CSS. It demonstrates a "no-framework" approach to state management, bi-directional data syncing, and accessibility.

## 🚀 What Changed from Stage 0?

- **Framework-less State**: Replaced React's useState with a centralized JavaScript state object and a refreshUI function to manage DOM updates manually.
- **Full CRUD Interface**: Added an interactive Edit Mode that allows real-time updates to the task's metadata (Title, Description, Priority, and Due Date).
- **Intelligent Status Sync**: Implemented bi-directional logic between the checkbox and the status dropdown. Toggling one automatically updates the other, ensuring the "Source of Truth" remains consistent.
- **Dynamic Time Tracking**: Enhanced the timer logic to handle both "Due in" and "Overdue by" states, updating every 30-60 seconds without page refreshes.
- **Semantic Expansion**: Added a collapsible description section to improve information density on smaller screens.

## 🎨 New Design Decisions

- **Descriptive CSS Architecture**: Moved away from utility-first frameworks to a custom CSS naming convention (e.g., `.priority-high`, `.workspace-card`)to ensure the code is distinct, readable, and easy to maintain.
- **Priority Visual Hierarchy**: Implemented a "Sidebar Accent" design where the card's left border and priority indicator change color dynamically based on the task's urgency.
- **Focus Management**: To improve the user experience during transitions, the app automatically focuses the "Title" input when entering Edit Mode and returns focus to the "Edit" button upon cancellation or saving.

## ♿ Accessibility (A11y) Notes

- **Aria Attributes**: Utilized `aria-live="polite"` for the countdown timer so screen readers announce time updates without interrupting the user.
- **Keyboard Navigation**: The Expand/Collapse toggle and all form inputs are fully accessible via keyboard.
- **Interactive States**: Added `aria-expanded` and `aria-controls` to the collapsible section to ensure assistive technologies correctly identify the relationship between the toggle and the content.

## ⚠️ Known Limitations

- **Session Persistence**: Currently, data is stored in volatile memory. Changes will reset upon page refresh as persistent storage (e.g., LocalStorage or Database) was not part of the Stage 1a core requirements.
- **Single Task Focus**: The current architecture is optimized for managing a single high-priority task rather than a multi-item list.