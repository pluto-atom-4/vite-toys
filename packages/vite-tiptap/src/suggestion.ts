import { ReactRenderer } from "@tiptap/react";
import tippy, { GetReferenceClientRect, Instance, Props } from "tippy.js";
import MentionList, { MentionListProps, MentionListRef } from "./MentionList";
import { SuggestionProps } from "@tiptap/suggestion";
import { MentionNodeAttrs } from "@tiptap/extension-mention";

export default {
  items: ({ query }: { query: string }) => {
    return [
      "Lea Thompson",
      "Cyndi Lauper",
      "Tom Cruise",
      "Madonna",
      "Jerry Hall",
      "Joan Collins",
      "Winona Ryder",
      "Christina Applegate",
      "Alyssa Milano",
      "Molly Ringwald",
      "Ally Sheedy",
      "Debbie Harry",
      "Olivia Newton-John",
      "Elton John",
      "Michael J. Fox",
      "Axl Rose",
      "Emilio Estevez",
      "Ralph Macchio",
      "Rob Lowe",
      "Jennifer Grey",
      "Mickey Rourke",
      "John Cusack",
      "Matthew Broderick",
      "Justine Bateman",
      "Lisa Bonet",
    ]
      .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 5);
  },

  render: () => {
    let component: ReactRenderer<MentionListRef, MentionListProps> | null =
      null;
    let popup: Instance<Props>[] | null = null;

    return {
      onStart: (props: SuggestionProps<any, MentionNodeAttrs>) => {
        component = new ReactRenderer(MentionList, {
          props,
          editor: props.editor,
        });

        if (!props?.clientRect || !isGetReferenceClientRect(props.clientRect)) {
          return;
        }

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        });
      },

      onUpdate(props: SuggestionProps<any, MentionNodeAttrs>) {
        component?.updateProps(props);

        if (!props?.clientRect || !isGetReferenceClientRect(props.clientRect)) {
          return;
        }
        popup?.[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props: { event: KeyboardEvent }) {
        if (props.event.key === "Escape") {
          popup?.[0].hide();
          return true;
        }

        return component?.ref?.onKeyDown(props) ?? false;
      },

      onExit() {
        popup?.[0].destroy();
        component?.destroy();
      },
    };
  },
};

function isGetReferenceClientRect(arg: unknown): arg is GetReferenceClientRect {
  return typeof arg === "function" && arg() instanceof DOMRect;
}
