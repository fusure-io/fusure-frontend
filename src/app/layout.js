import { Manrope } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BootstrapClient from './components/BootstrapClient';
import Header from './components/Header';
import Footer from './components/Footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Assistify',
  description: 'AI Startup and Technology Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
