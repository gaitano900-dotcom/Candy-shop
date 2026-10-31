'use client';

import Link from 'next/link';
import { useStore } from './StoreProvider';

export default function ProductCard({ product }) {
  const { addToCart } = useStore();
  return <article className="product-card"><Link className="product-image" href={`/product/${product.slug}`}><img src={product.image} alt={product.name} loading="lazy" />{product.badge && <span className={`badge${product.badge === 'Low Stock' ? ' low' : ''}`}>{product.badge}</span>}<span className="quick">View product →</span></Link><div className="product-copy"><p>{product.brand}</p><h3><Link href={`/product/${product.slug}`}>{product.name}</Link></h3><small>{product.type} · {product.thc} · {product.size}</small><div><b>${product.price.toFixed(2)}</b><button aria-label={`Add ${product.name} to bag`} onClick={() => addToCart(product)}>+</button></div></div></article>;
}
