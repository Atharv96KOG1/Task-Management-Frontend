# Task Management Frontend

A task management web app built with Next.js. Users can create, view, search, filter, edit, complete, and delete tasks through a dashboard UI, with a light/dark theme toggle.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [HeroUI](https://www.heroui.com/) component library
- [Tailwind CSS 4](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [lucide-react](https://lucide.dev) icons
- [react-hook-form](https://react-hook-form.com) and [react-hot-toast](https://react-hot-toast.com)

## Features

- **Dashboard** — view all tasks with search and status filters (all / pending / completed)
- **Add Task** — create a task with a title and description
- **Task Card** — inline edit, mark complete, and delete a task
- **Theme Toggle** — switch between light and dark mode

## Project Structure

```
app/
  page.tsx           # Landing page
  dashboard/         # Task dashboard
  Addtask/           # Create task form
  layout.tsx         # Root layout
  providers.tsx      # App-level providers
components/
  AppNavbar.tsx
  SearchBar.tsx
  FilterButtons.tsx
  TaskList.tsx
  TaskCard.tsx
  ThemeToggle.tsx
hooks/
  usetasks.ts        # Task state and API calls
  usetheme.ts
services/
  api.ts             # REST client for the tasks API
```

## Getting Started

### Prerequisites

- Node.js 20+
- A running backend that exposes the tasks API (see Environment Variables below)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api/tasks
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build & Run

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## API

The frontend expects a REST API with the following endpoints (see [services/api.ts](services/api.ts)):

| Method | Endpoint             | Description          |
| ------ | --------------------- | -------------------- |
| GET    | `/`                    | List all tasks        |
| GET    | `/:id`                 | Get a task by id       |
| POST   | `/`                    | Create a task          |
| PUT    | `/:id`                 | Update a task           |
| DELETE | `/:id`                 | Delete a task           |
| PATCH  | `/:id/complete`        | Mark a task complete    |
