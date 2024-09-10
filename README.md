## Caching with Query Params in Next.js

- This repo shows how route caching is affected by query parameters in next.js 14

- In the `query` page, we are using the searchParam portion of the URL
- In the `no-query` page, we are NOT using the searchParam portion of the URL

Expected Behaviour:

- I would expect both pages to cache the same

Actual Results

- The `no-query` page has a `cache-control` response header of `s-maxage=60, stale-while-revalidate`
- The `query` page has a `cache-control` response header of `private, no-cache, no-store, max-age=0, must-revalidate`, even when NO query parameters are passed.

Steps to repro

- `yarn install`
- `yarn build`
- `yarn start`

- Browse to `http://localhost:3000/query/test`
  - notice the cache-control header specifies maxage that matches our revalidate export and stale-while-revalidate
- Browse to 'http://localhost:3000/query/test'
  - notice the cache-control header specifies no-cache
