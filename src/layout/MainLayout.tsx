import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='overscroll-x-none'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
