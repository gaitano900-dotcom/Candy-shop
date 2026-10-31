import Link from 'next/link';
import { categories } from '../data/products';

export default function Footer() {
  return <footer><div className="footer-brand"><span className="logo-mark">CS</span><h2>CANDY<br />SHOP</h2><p>Quality products + friendly service.</p></div><div><b>Shop</b>{categories.map((category) => <Link key={category} href={`/shop?category=${encodeURIComponent(category)}`}>{category}</Link>)}</div><div><b>Visit</b><Link href="/about">About us</Link><Link href="/contact">Location &amp; hours</Link><a href="mailto:hello@candyshopdispensary.ca">Contact</a></div><div><b>Find us</b><p>222 Rowntree Dairy Rd<br />Woodbridge, ON L4L 9T2</p><p>Mon–Sat: 9am–11pm<br />Sunday: 10am–8pm</p></div><div className="legal">© {new Date().getFullYear()} Candy Shop Dispensary <span>Adults 19+ only. Please consume responsibly.</span></div></footer>;
}
