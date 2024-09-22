import { useState } from 'react';
import { ActionIcon, Tabs, TextInput, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import { MantineLogo } from "@mantinex/mantine-logo";

import classes from "./Demo.module.css";


export function Demo() {
  const {setColorScheme} = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {getInitialValueInEffect: true});
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (<>
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5}/>
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5}/>
    </ActionIcon>
    <MantineLogo color="blue" size={30}/>
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
    <TextInput
      label="Floating label input"
      labelProps={{'data-floating': floating}}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  </>);
}
