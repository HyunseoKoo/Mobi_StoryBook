import Select from "./select";
import * as S from './select.style';

export default {
    title: "Components/Select",
    component: Select,
    argTypes: {
      variant: {
        options: ["default", "secondary"],
        control: { type: "radio" },
      },
      shape: {
        options: ["default", "littleShape", "shape"],
        control: { type: "radio" },
      },
      size: {
        options: ["default", "small", "large"],
        control: { type: "select" },
      },
    },
  };

export const Primary = {
  args: {
    children: ["option1", "option2", "option3", "option4"]
  },
};
