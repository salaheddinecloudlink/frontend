import { Input } from "components";
export default {
  title: "adjustant/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineBluegray100",
  size: "lg",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
