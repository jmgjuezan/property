# Property

Property Management User Interface (UI) for this [backend](https://github.com/jmgjuezan/property-be)

## Built using

- HTML
- CSS
- JavaScript
- Node
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind.css](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [@headlessui/react](https://headlessui.com/)
- [@heroicons/react](https://heroicons.com/)

## Development Tools

You will need the following

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/download)
- [Visual Studio Code](https://code.visualstudio.com/download)

## VSCode Extensions

- Tailwind CSS IntelliSense by Tailwind Labs

## About

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This uses the modern `App Router` as routing mechanism.

## Installation

Using HTTP
```
git clone https://github.com/jmgjuezan/property.git
```
Using SSH
```
git clone git@github.com:jmgjuezan/property.git
```

Follow the [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

## Getting Started

First, run the development server:

Run independently with mock data, as admin and without authentication:
```
npm run dev:sandbox
```

Run independently with mock data, as tenant and without authentication:
```
npm run dev:sandbox-tenant
```

Run connected to backend as admin and without authentication:
```
npm run dev:test
```

Run connected to backend as tenant and without authentication:
```
npm run dev:test-tenant
```

Run connected to backend as admin and with authentication:
```
npm run dev
```

Run connected to backend as tenant and with authentication:
```
npm run dev-tenant
```

Run with production build:
```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
