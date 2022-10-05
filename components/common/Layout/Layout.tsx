import React, { FC } from "react";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";

interface LayoutProps {
  children: ReactNode;
}

const DynamicSidebar = dynamic(() => import("../Sidebar/index"), {
  //when import, you must improt default directly, instead of {default}.
  ssr: false,
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <DynamicSidebar />
    </>
  );
};

export default Layout;
