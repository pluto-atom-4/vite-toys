import "./MentionList.module.css";
import { Paper } from "@mantine/core";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import classes from "./MentionList.module.css";

export interface MentionListProps {
  items: string[];
  command: (item: { id: string }) => void;
}

export type MentionListRef = {
  onKeyDown: ({ event }: { event: KeyboardEvent }) => boolean;
};

export default forwardRef<MentionListRef, MentionListProps>(MentionList);

export function MentionList(
  props: MentionListProps,
  ref: ForwardedRef<MentionListRef>,
) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item });
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length,
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: KeyboardEvent }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <Paper className={classes.dropdownMenu}>
      {props.items.length ? (
        props.items.map((item, index) => (
          <button
            className={index === selectedIndex ? classes.isSelected : ""}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item}
          </button>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </Paper>
  );
}
