import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
// import {DefaultTextEditor} from "./DefaultTextEditor.tsx";
import { OneLineEditor } from "./OneLineEditor.tsx";
import { DemoStyles } from "./DemoStyles.tsx";

export default function AppMantine() {
  return (
    <MantineProvider theme={theme}>
      {/*<DefaultTextEditor/>*/}
      <OneLineEditor />
      <DemoStyles collapsed={false} />
    </MantineProvider>
  );
}
