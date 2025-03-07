import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { OneLineEditor } from "./OneLineEditor.tsx";

export default function AppMantine() {
  return (
    <MantineProvider theme={theme}>
      <OneLineEditor/>
    </MantineProvider>
  );
}
