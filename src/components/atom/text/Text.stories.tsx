import React from "react";
import { Text } from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Primary: ComponentStory<typeof Text> = () => (
  <>
    <Text tag="h1" style={{ color: "green" }} className="">
      Heading 1
    </Text>
    <Text tag="h2" style={{ color: "#666" }} className="">
      Heading 2
    </Text>
    <Text tag="h3" style={{ color: "#666" }} className="">
      Heading 3
    </Text>
    <Text tag="h4" style={{ color: "#666" }} className="">
      Heading 4
    </Text>
    <Text tag="h5" style={{ color: "#666" }} className="">
      Heading 5
    </Text>
    <Text tag="h6" style={{ color: "#666" }} className="">
      Heading 6
    </Text>
    <Text tag="p" style={{ color: "#666" }} className="">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </Text>
  </>
);
