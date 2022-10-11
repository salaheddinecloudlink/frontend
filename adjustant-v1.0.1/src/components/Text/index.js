import React from "react";
const variantClasses = {
  h1: "lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h2: "lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  h3: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  h4: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  h5: "font-normal text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
