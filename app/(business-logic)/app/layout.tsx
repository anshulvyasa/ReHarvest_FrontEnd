import { auth } from "@/auth";
import LayoutProvider from "@/components/business-logic/provider/LayoutProvider";
import ToasterProvider from "@/components/general/toaster-provider";
import StoreProvider from "@/lib/redux/redux-provider/store-provider";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }
  return (
    <LayoutProvider>
      <StoreProvider>{children}</StoreProvider>
      <ToasterProvider />
    </LayoutProvider>
  );
}
