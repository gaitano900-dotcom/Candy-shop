'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const StoreContext = createContext(null);

export function useStore() {
  return useContext(StoreContext);
}

export default function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  useEffect(() => {
    if (!cartOpen) return;
    const close = (event) => { if (event.key === 'Escape') setCartOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [cartOpen]);

  function addToCart(product) {
    setCart((items) => [...items, product]);
    setCartOpen(true);
  }

  return <StoreContext.Provider value={{ cart, addToCart, openCart: () => setCartOpen(true) }}>
    {children}
    {!ageConfirmed && <div className="age-gate"><section className="age-card" role="dialog" aria-modal="true" aria-labelledby="age-title"><div className="logo-mark">CS</div><p className="eyebrow">Welcome to Candy Shop</p><h1 id="age-title">Are you 19 or older?</h1><p>You must be of legal age to enter this website. Please enjoy responsibly.</p><button className="btn primary" onClick={() => setAgeConfirmed(true)}>Yes, I’m 19+</button><a href="https://www.google.com">No, take me away</a></section></div>}
    {cartOpen && <><button className="scrim" aria-label="Close shopping bag" onClick={() => setCartOpen(false)} /><aside className="cart" role="dialog" aria-modal="true" aria-labelledby="cart-title"><button autoFocus className="close" aria-label="Close shopping bag" onClick={() => setCartOpen(false)}>×</button><p className="eyebrow">Your sweet stash</p><h2 id="cart-title">Shopping bag <small>({cart.length})</small></h2>{cart.length ? <>{cart.map((product, index) => <div className="cart-line" key={`${product.id}-${index}`}><img src={product.image} alt={product.name} /><div><b>{product.name}</b><small>{product.size} · {product.thc}</small><button onClick={() => setCart((items) => items.filter((_, itemIndex) => itemIndex !== index))}>Remove</button></div><b>${product.price.toFixed(2)}</b></div>)}<div className="cart-total"><b>Total</b><b>${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</b></div><p className="fine-print">Contact the store for ordering and availability.</p></> : <div className="empty"><span aria-hidden="true">✦</span><p>Your bag is feeling a little empty.</p><button className="btn primary" onClick={() => setCartOpen(false)}>Keep browsing</button></div>}</aside></>}
  </StoreContext.Provider>;
}
