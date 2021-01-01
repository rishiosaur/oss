# 📚 Open Source Profiles!

![lint status](https://github.com/rishiosaur/oss/workflows/lint/badge.svg)
![format status](https://github.com/rishiosaur/oss/workflows/format/badge.svg)
![format status](https://github.com/rishiosaur/oss/workflows/build/badge.svg)
![GitHub](https://img.shields.io/github/license/rishiosaur/oss)
![GitHub issues](https://img.shields.io/github/issues/rishiosaur/oss)
![GitHub contributors](https://img.shields.io/github/contributors/rishiosaur/oss)
![GitHub last commit](https://img.shields.io/github/last-commit/rishiosaur/oss)

A minimal showcase of the developers that came to the Open Source workshop at Hack the North 2020!

# Profiles

To add yourself to the list, you'll need to modify `profiles.json` - the API reads data from that specific file as a rudimentary persistent data source.

`profiles.json` merely contains an array of `Profile`s, which are defined to be:

```typescript
interface Profile {
	name: string // Your name
	github?: string
	twitter?: string
	insta?: string
	description: string // Minimal description about you!
	profileUrl: string // Image of yourself
}
```

To add yourself to the website, you'll need to add another object to the array listed in `profiles.json`.

To make sure your PR has the highest change of being reviewed, you must:

1. Create an issue using the "New Profile" template and fill it out using your proposal.
2. Edit `profiles.json` according to your own profile on your fork, and make a PR mentioning your corresponding issue.
3. Fix any merge conflicts and/or build errors (your PR will be merged _automatically_ as soon as all checks pass).

# Development

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
