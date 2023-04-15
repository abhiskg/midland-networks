import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
