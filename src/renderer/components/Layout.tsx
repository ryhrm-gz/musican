import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import { Titlebar } from "./Titlebar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <AppShell
      padding={0}
      header={<Titlebar />}
      styles={(theme) => ({
        main: {
          height: "calc(100vh - 50px)",
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
