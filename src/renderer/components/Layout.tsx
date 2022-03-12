import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <AppShell
      padding="sm"
      header={<Header />}
      styles={(theme) => ({
        main: {
          height: "calc(100vh - 55px)",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
