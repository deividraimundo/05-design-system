import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typograph/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel excepturi fugiat nostrum fugit odit quod dolorum minus ratione, tempore qui non ea eaque earum quos placeat reiciendis expedita hic.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
