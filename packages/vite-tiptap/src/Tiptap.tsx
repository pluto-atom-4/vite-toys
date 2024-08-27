import {
  // EditorProvider,
  FloatingMenu,
  BubbleMenu,
  useEditor,
  EditorContent,
} from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Highlight from "@tiptap/extension-highlight";

const extensions = [Document, Paragraph, Text, Highlight];

const content = "<p>Hello World</p>";

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  });
  return (
    <>
      <EditorContent editor={editor}/>
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the buggle menu</BubbleMenu>
    </>
  );
};

export default Tiptap;
