import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { NavigationProgress } from "@mantine/nprogress";
import { IReactChildren } from "../interfaces";
const theme = createTheme({});
export const Mantine = ({ children }: IReactChildren) => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <NavigationProgress />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
};
