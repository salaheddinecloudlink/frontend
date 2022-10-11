import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "border border-bluegray_100 border-solid",
};
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = {
  sm: "pb-[11px] 3xl:pb-[13px] lg:pb-[7px] xl:pb-[9px] lg:pt-[4px] xl:pt-[6px] pt-[7px] 3xl:pt-[8px] lg:px-[4px] xl:px-[6px] px-[7px] 3xl:px-[8px]",
  md: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  lg: "lg:pb-[4px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] lg:px-[4px] xl:px-[6px] px-[7px] 3xl:px-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineBluegray100"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineBluegray100",
  size: "lg",
};

export { Input };
