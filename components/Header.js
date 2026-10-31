'use client';

import Link from 'next/link';
import { useStore } from './StoreProvider';

export default function Header() {
  const { cart, openCart } = useStore();
  return <><div className="announcement">Free local delivery on orders over $75 <span>•</span> Ontario adults 19+ only</div><header><Link className="brand" href="/" aria-label="Candy Shop home"><i>CS</i><span>CANDY<br />SHOP</span></Link><nav aria-label="Main navigation"><Link href="/shop">Shop</Link><Link href="/about">About</Link><Link href="/contact">Visit us</Link></nav><div className="header-actions"><Link href="/shop" aria-label="Search products">⌕</Link><button className="bag" onClick={openCart}>Bag <em>{cart.length}</em></button></div></header></>;
}
