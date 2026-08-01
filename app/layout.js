import './globals.css';
import StoreProvider from '../components/StoreProvider';

export const metadata = { title: 'Candy Shop Dispensary | Woodbridge', description: 'Quality products + friendly service.' };

export default function RootLayout({ children }) {
  return <html lang="en"><body><StoreProvider>{children}</StoreProvider></body></html>;
}
