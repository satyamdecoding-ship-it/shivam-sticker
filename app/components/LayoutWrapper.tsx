"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideHeader = pathname === "/login-page";

  return (
    <>
      {!hideHeader && <Header />}

      <main className={!hideHeader ? "flex-1 pt-16" : "flex-1"}>
        {children}
      </main>
    </>
  );
}