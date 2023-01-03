import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typograph/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel excepturi fugiat nostrum fugit odit quod dolorum minus ratione, tempore qui non ea eaque earum quos placeat reiciendis expedita hic.",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
