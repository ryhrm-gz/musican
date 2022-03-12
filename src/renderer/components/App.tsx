import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { Routes } from "react-router-dom";
import { useLocalStorage } from "../utils/useLocalStorage";
import { Layout } from "./Layout";

export const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Layout>
          <Routes></Routes>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
