# Candy Shop Dispensary

A bright, responsive Next.js storefront for Candy Shop Dispensary in Woodbridge, Ontario.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replacing product images (important)

All catalog content, including **every image path**, lives in [`data/products.js`](./data/products.js). Product components do not contain hard-coded image paths.

1. Add your new image to `public/images/products/`.
2. Change that product's `image` value in `data/products.js`, for example:

```js
image: '/images/products/connected-gelonade.jpg'
```

The project ships with colourful `.svg` placeholder images so it works immediately. They can be replaced with `.jpg`, `.png`, `.webp`, or `.svg` files at any time. Product cards and detail pages automatically update from the central file.

## Structure

- `data/products.js` — the single source of truth for products
- `public/images/products/` — replaceable product image assets
- `components/` — reusable header, footer, cart, product card, and views
- `app/` — homepage, shop, product details, about, and contact routes

The front end includes an age gate, searchable/sortable product collection, product details, pickup/delivery options, and a side cart drawer.
