import { Box, Card as MantineCard, Divider, Group, Text } from "@mantine/core";
import { Fragment, ReactNode } from "react";

type Props = {
  items: {
    label: string;
    value: ReactNode | string;
  }[];
};

export const Card = ({ items }: Props) => {
  return (
    <MantineCard p={0} sx={{ maxWidth: 800 }} mt={10} pb={14}>
      <Group direction="column" sx={{ width: "100%" }}>
        {items.map((item, index) => (
          <Fragment key={item.label}>
            <Group sx={{ width: "100%" }} p="sm">
              <Box sx={{ width: "30%" }}>
                <Text size="sm" color="dimmed">
                  {item.label}
                </Text>
              </Box>
              <Box>{item.value}</Box>
            </Group>
            {index === items.length - 1 ? (
              ""
            ) : (
              <Divider sx={{ width: "100%", opacity: 0.6 }} m={0} />
            )}
          </Fragment>
        ))}
      </Group>
    </MantineCard>
  );
};
