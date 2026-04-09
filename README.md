# Forest Management Quiz

This project is a React + TypeScript quiz application built for practicing Forestry and Forest Management assignment questions (Assignment 0 to Assignment 12).

## What this app does

- Presents a multiple-choice quiz with question-by-question navigation.
- Supports two session modes:
  - `In Sequence`: questions are shown in original order.
  - `Jumbled`: both question order and option order are shuffled.
- Keeps the selected session mode for the full session, including retries.
- Auto-moves to the next question only when a correct answer is selected.
- Allows moving forward without answering (skip behavior enabled).
- Shows a detailed final summary:
  - Correct answers
  - Incorrect answers
  - Unanswered questions
  - Total incorrect count (includes unanswered)
- Provides restart options at the end:
  - Retry only incorrect/unanswered questions
  - Restart the full quiz

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (animations)

## Run locally

### Prerequisites

- Node.js 18+ (recommended)

### Steps

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`
3. Open the local URL shown in terminal (usually `http://localhost:3000` or next available port).

## Build for production

- `npm run build` to create a production build in `dist`.
- `npm run preview` to preview the production build locally.

## Notes

- Quiz data is stored in `src/data/questions.ts`.
- Session behavior is in-memory only (no persistence/database by default).
