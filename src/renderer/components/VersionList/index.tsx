import { Box, Paper, Text } from "@mantine/core";

export const VersionList = () => {
  return (
    <Box sx={{ width: 200, height: "calc(100vh - 105px)" }}>
      <Paper
        withBorder
        sx={{ width: "100%", height: "100%", borderWidth: "0 0 0 1px" }}
        radius={0}
      >
        <Text>バージョン</Text>
      </Paper>
    </Box>
  );
};
