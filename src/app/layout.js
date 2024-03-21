import '../styles/reset.css';
import '../styles/global.css';

import { StoreContextProvider } from '@/context/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
