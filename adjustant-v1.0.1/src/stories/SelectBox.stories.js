import { SelectBox } from "components";
export default {
  title: "adjustant/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder4",
  variant: "OutlineBluegray100",
  size: "sm",
  className: "w-[300px]",
};
