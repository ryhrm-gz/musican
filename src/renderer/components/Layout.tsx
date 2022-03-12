import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <AppShell padding="sm" header={<Header />}>
      {children}
    </AppShell>
  );
};
