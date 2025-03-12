This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Admin Dashboard UI

This project is a simple Admin Dashboard interface built with **Next.js**, **ShadCN UI components**, **Tailwind CSS**, and **external CSS**. It includes a page that lists mock interview data and a button to create a new interview (non-functional for now).

---

## 🛠️ Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- External CSS Modules (for extra styling)
- TypeScript

## 📦 Installation

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/admin-dashboard-ui.git
cd admin-dashboard-ui
```

2. **Install dependencies:**

- npm install

- npm run dev

3. **ShadCN Setup:**

**If not already set up**
```bash
npx shadcn-ui@latest init
```

 **Required components**
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### Project Structure

/app
  /dashboard
    page.tsx              # Dashboard UI page

/components
  InterviewTable.tsx      # Table displaying interview data
  CreateButton.tsx        # Button for creating a new interview

/components/ui
  button.tsx              # ShadCN Button component
  card.tsx                # ShadCN Card component

/constants(data)
  index.ts       # Mock interview data

/types
  index.ts          # Interview type definition


#### Features
- Interview List (Title, Status, Date Created)
- Create Interview button (UI only)
- Responsive and styled with Tailwind + ShadCN
- Modular file structure with reusable components
- TypeScript with separated types and data
