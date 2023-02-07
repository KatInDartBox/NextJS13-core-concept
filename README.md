# nextJs

another react framework on the back.

## install

- #### next 13 stable

```js
// automatic setup
// required nodejs >= v14
npx create-next-app@latest
```

- #### next 13 experimental (beta)

```js
// now 2023-01-26 version 13(beta)
// required nodejs >= v16.8.0
// after install the stable version
// just add the following to next.config.js
// file: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
```

- #### use turbopack instead of webpack

inside package.json add the following line
pls note that turbopack is in alpha version, which mean there will be bugs.

```js
// file: package.json
"scripts": {
    "dev": "next dev --turbo",
}
```

- ### NextJs caching

Next13 will no longer support getStaticProps getServerSideProps or
getStaticPaths

- #### getStaticProps -> force-cache

```js
await fetch(`https://...`, { cache: "force-cache" });
```

- #### getServerSideProps -> no-store

```js
await fetch(`https://...`, { cache: "no-store" });
```

- #### ISR(Incremental Static Regeneration) -> next: { revalidate: 10 }

```js
await fetch(`https://...`, { next: { revalidate: 10 } });
```

- #### getStaticPaths -> generateStaticParams

for the sake of change nextJs replace getStaticPaths to generateStaticParams
the same purpose, but different api, just to embrace change.

```js
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

- #### cannot access to fetch

if we are using other module such as prisma to query database,
on top of page file export the following

```js
export const revalidate = false; // false  | 0 | number
// false for 'force-cache'
// 0 for for 'no-store'
// number for Incremental Static Regeneration
```
