import Link from 'next/link';
import './global.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
              <ul>
                <li>
                  <Link href="/dev">dev</Link>
                </li>
                <li>
                  <Link href="/market">Marketing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <body>{children}</body>
      <footer>
        <p>Ahmed {new Date().getFullYear()}. all rights reserved.</p>
      </footer>
    </html>
  );
}