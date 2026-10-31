'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import { categories, products } from '../data/products';

export default function Shop() {
  const [category, setCategory] = useState('All products');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selected = params.get('category');
    if (categories.includes(selected)) setCategory(selected);
  }, []);
  const shown = products.filter((product) => (category === 'All products' || category === product.category) && `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase()));
  if (sort === 'low') shown.sort((a, b) => a.price - b.price);
  if (sort === 'high') shown.sort((a, b) => b.price - a.price);
  return <><Header /><main className="page"><div className="shop-title"><p className="eyebrow">Find your favourite</p><h1>The candy <i>aisle.</i></h1><p>Explore flower, vapes, concentrates, and edibles.</p></div><div className="shop-toolbar"><div className="filter-pills">{['All products', ...categories].map((item) => <button key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><input className="product-search" type="search" aria-label="Search products" placeholder="Search products" value={query} onChange={(event) => setQuery(event.target.value)} /><select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div><p className="product-count" aria-live="polite">{shown.length} products</p>{shown.length ? <div className="product-grid full-grid">{shown.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty"><p>No products match your search.</p><button className="btn primary" onClick={() => { setCategory('All products'); setQuery(''); }}>Clear filters</button></div>}</main><Footer /></>;
}
