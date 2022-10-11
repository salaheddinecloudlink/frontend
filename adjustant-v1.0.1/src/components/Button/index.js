import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder12: "rounded-radius12",
  icbRoundedBorder8: "rounded-radius8",
};
const variants = {
  FillBluegray5001e: "bg-bluegray_500_1e",
  FillBluegray500: "bg-bluegray_500 text-white_A700",
  OutlineBluegray400:
    "border border-bluegray_400 border-solid text-bluegray_500",
  FillWhiteA700: "bg-white_A700 text-bluegray_800",
  OutlineBluegray100:
    "bg-black_900_0a border border-bluegray_100 border-solid text-gray_900",
  FillGray200: "bg-gray_200 text-gray_900",
  OutlineBluegray500cc:
    "border border-bluegray_500_cc border-solid text-bluegray_500",
  FillRed80019: "bg-red_800_19 text-red_800",
  FillGray50: "bg-gray_50 text-bluegray_100",
  FillRed8001e: "bg-red_800_1e text-red_800",
  icbFillBluegray5001e: "bg-bluegray_500_1e",
  icbOutlineWhiteA700:
    "bg-bluegray_500 outline outline-[1.5px] outline-white_A700",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  smIcn: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  mdIcn: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder4",
    "icbRoundedBorder4",
    "icbCircleBorder12",
    "icbRoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray5001e",
    "FillBluegray500",
    "OutlineBluegray400",
    "FillWhiteA700",
    "OutlineBluegray100",
    "FillGray200",
    "OutlineBluegray500cc",
    "FillRed80019",
    "FillGray50",
    "FillRed8001e",
    "icbFillBluegray5001e",
    "icbOutlineWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
