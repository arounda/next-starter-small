import '../styles/reset.css';
import '../styles/global.css';

import { inter } from '@/app/fonts';
import { StoreContextProvider } from '@/context/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
