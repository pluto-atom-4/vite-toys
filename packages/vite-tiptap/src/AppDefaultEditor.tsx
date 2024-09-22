import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { DefaultTextEditor } from "./DefaultTextEditor.tsx";

export default function AppMantine() {
  return (
    <MantineProvider theme={theme}>
      <DefaultTextEditor/>
    </MantineProvider>
  );
}
