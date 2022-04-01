import { Anchor, Box, Text, useMantineColorScheme } from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import { Logo } from "../Logo";
import { Card } from "./Card";

type Item = {
  label: string;
  value: string | ReactNode;
};

export const Info = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [versin, setVersion] = useState("");

  useEffect(() => {
    (async () => {
      const response = await window.api.getVersion();
      if (response.status === "ok") {
        setVersion(response?.data ?? "");
      }
    })();
  }, []);

  const items: Item[] = [
    {
      label: "",
      value: (
        <Logo
          style={{ width: "auto", height: 60 }}
          fill={dark ? "white" : "black"}
        />
      ),
    },
    { label: "バージョン", value: <Text size="sm">{versin}</Text> },
    {
      label: "著作権",
      value: <Text size="sm">Copyright © 2022 Ryo Hirama</Text>,
    },
    {
      label: "公式サイト",
      value: (
        <Anchor href="https://musican.vercel.app" target="_blank" size="sm">
          https://musican.vercel.app
        </Anchor>
      ),
    },
    {
      label: "作者Twitter",
      value: (
        <Anchor href="https://twitter.com/ryoh555" target="_blank" size="sm">
          https://twitter.com/ryoh555
        </Anchor>
      ),
    },
  ];

  return (
    <Box>
      <Card items={items} />
    </Box>
  );
};
