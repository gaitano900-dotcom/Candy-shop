'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { useStore } from './StoreProvider';
import { getProduct } from '../data/products';

export default function ProductPage({ slug }) {
  const { addToCart } = useStore();
  const product = getProduct(slug);
  if (!product) notFound();
  return <><Header /><main className="page"><Link className="back" href="/shop">← Back to shop</Link><div className="product-detail"><div className="detail-image"><img src={product.image} alt={product.name} />{product.badge && <span className="badge">{product.badge}</span>}</div><div className="detail-copy"><p className="eyebrow">{product.brand} · {product.category}</p><h1>{product.name}</h1><p className="detail-price">${product.price.toFixed(2)}</p><div className="detail-facts"><span>{product.type}</span><span>{product.thc} THC</span><span>{product.size}</span></div><p>{product.description}</p><div className="fulfillment"><b>Available in store</b><span>Convenient pickup, or delivery where permitted by law.</span></div><button className="btn primary add-large" onClick={() => addToCart(product)}>Add to bag <span>→</span></button><p className="fine-print">Adults 19+ only. Please consume responsibly.</p></div></div></main><Footer /></>;
}
