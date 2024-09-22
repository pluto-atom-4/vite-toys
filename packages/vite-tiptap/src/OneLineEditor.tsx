import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import { Doc } from "./Doc";

import { Text } from "@tiptap/extension-text";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Mention } from "@tiptap/extension-mention";
import classes from "./DefaultTextEditor.module.css";
import suggestion from "./suggestion";
import { Button } from "@mantine/core";


export function OneLineEditor() {
  const editor = useEditor({
    extensions: [
      Doc,
      Text,
      Paragraph,
      Mention.configure({
        HTMLAttributes: {
          class: classes.mention
        },
        suggestion
      })
    ],
    content: "this is test."
  });
  return (<>
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content/>
    </RichTextEditor>
    <Button onClick={() => console.log(editor?.getJSON())}/>
  </>);
}
