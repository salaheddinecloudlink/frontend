import React from "react";

import { Row, Img, Text, Column, Line } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 items-center justify-between lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] shadow-bs w-[100%]">
          <Img
            src="images/img_airplane.svg"
            className="airplane1"
            alt="airplane"
          />
          <Row className="items-center justify-between xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[23%]">
            <Text className="navlinks1" as="h3" variant="h3">
              JOBS
            </Text>
            <Text className="navlinks1" as="h3" variant="h3">
              AVAILABILITY
            </Text>
            <Img
              src="images/img_notification.svg"
              className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
              alt="notification"
            />
            <Column className="items-center w-[17%]">
              <Text className="profilewrapper" as="h3" variant="h3">
                M
              </Text>
              <Line className="bg-bluegray_500 h-[4px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
            </Column>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
