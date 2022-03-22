import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Outlet, Router } from "@tanstack/react-location";
import { Layout } from "./Layout";
import { location, routes } from "./Router";

export const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme, primaryColor: "teal" }}>
        <Router routes={routes} location={location}>
          <Layout>
            <Outlet />
          </Layout>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
