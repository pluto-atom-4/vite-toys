import { Button, Flex, Paper, Text, TextInput } from "@mantine/core";
import classes from "./DemoStyles.module.css";

export function DemoStyles({collapsed}: { collapsed: boolean }) {
  return (
    <>
      <div>
        <Button variant="filled">Button</Button>
        <Text c="blue.8" fz="lg">
          Card title
        </Text>
        <Text c="dimmed" fz="sm">
          Card description
        </Text>
        <form>
          <TextInput label="First name"/>
          <TextInput label="Last name" mt="md"/>
          <TextInput label="Email" mt="md"/>
        </form>
      </div>
      <div>
        <Paper p="xl">My custom card</Paper>
      </div>
      <div>
        <Flex>
          <Button style={{flex: 1}}>Large button</Button>
          <Button>Small button</Button>
        </Flex>
      </div>
      <div className={classes.root} data-collapsed={collapsed || undefined}>
        <button type="button" className={classes.control}>
          Control
        </button>
      </div>
    </>
  );
}
