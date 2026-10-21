# Campus Directory — Student Directory Project

A responsive student and academic department directory built with **Next.js App Router**, **React**, and **TypeScript**. Uses local fictional sample data; no backend or database is required.

## Features

- Student directory with live search by name or student ID
- Department filter and responsive student cards
- Dynamic student profiles at `/students/[id]`
- Department listing at `/departments`
- Department details at `/departments/[department]`
- Nested specialization pages at `/departments/[department]/[specialization]`
- About page, shared navigation/footer, loading skeleton, error boundary, and custom 404 page
- Typed data kept separately from UI components
- Responsive layout and keyboard-accessible form controls

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Main routes

| Route                                           | Purpose                                     |
| ----------------------------------------------- | ------------------------------------------- |
| `/`                                             | Redirects to `/students`                    |
| `/students`                                     | Search and filter student directory         |
| `/students/STU-1042`                            | Example student profile                     |
| `/departments`                                  | Department listing                          |
| `/departments/computer-science`                 | Department overview and tracks              |
| `/departments/computer-science/web-development` | Nested specialization and enrolled students |
| `/about`                                        | Project information                         |
| Invalid IDs/slugs                               | Custom not-found page                       |

## Folder structure

```text
app/                  App Router pages, layouts and error states
components/            Shared navigation and student UI components
data/students.ts       Typed local student, department and specialization data
types/index.ts         TypeScript data types
```

## Data note

Names, emails, student IDs, course names, enrollment counts, and staff names are fictional examples for frontend practice.

## GitHub submission

Create a new empty GitHub repository, then run from this project folder:

```bash
git init
git add .
git commit -m "Build Campus Directory with Next.js App Router"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
git rev-parse HEAD
```

Copy the repository URL and the full hash printed by `git rev-parse HEAD` into the assignment form. Replace the example remote URL with your own repository URL.
