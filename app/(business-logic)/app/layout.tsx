import { auth } from "@/auth";
import LayoutProvider from "@/components/business-logic/provider/LayoutProvider";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }
  return <LayoutProvider>{children}</LayoutProvider>;
}
