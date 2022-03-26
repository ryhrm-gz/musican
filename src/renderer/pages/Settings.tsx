import { Box, ScrollArea, Tabs } from "@mantine/core";
import { InfoCircledIcon, TrashIcon } from "@radix-ui/react-icons";
import { Info } from "../components/Settings/Info";
import { Reset } from "../components/Settings/Reset";
import { SettingsHeader } from "../components/SettingsHeader";

export const Settings = () => {
  return (
    <Box>
      <SettingsHeader />
      <ScrollArea style={{ height: "calc(100vh - 107px)" }} scrollbarSize={8}>
        <Tabs p="sm">
          <Tabs.Tab label="情報" icon={<InfoCircledIcon />}>
            <Info />
          </Tabs.Tab>
          <Tabs.Tab label="リセット" icon={<TrashIcon />}>
            <Reset />
          </Tabs.Tab>
        </Tabs>
      </ScrollArea>
    </Box>
  );
};
