import CustomPagenation from "./pagination";

export default {
  title: "Components/page",
  component: CustomPagenation,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    shape: {
      options: ["roundBtn", "squareBtn"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "select" },
    },
    num: {
      control: { type: "number" },
    },
    currentPage: {
      control: {type: "number"}
    }
  },
};

export const Primary = {
  args: {
    variant: "primary",
    shape: "roundBtn",
    size: "small",
    num: 10,
    currentPage: 1,
  },
};
