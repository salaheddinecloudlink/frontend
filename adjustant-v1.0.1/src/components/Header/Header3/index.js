import React from "react";

import { Row, Img, Column, Text, Line } from "components";

const Header3 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 items-center justify-between lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] shadow-bs w-[100%]">
          <Img
            src="images/img_airplane.svg"
            className="airplane1"
            alt="airplane"
          />
          <Row className="items-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[24%]">
            <Column className="items-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[19%]">
              <Text className="navlinks1" as="h3" variant="h3">
                JOBS
              </Text>
              <Line className="bg-bluegray_500 h-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
            </Column>
            <Text
              className="font-metropolis ADJUSTERSEARCH"
              as="h3"
              variant="h3"
            >
              ADJUSTER SEARCH
            </Text>
            <Img
              src="images/img_notification.svg"
              className="notification1"
              alt="notification"
            />
            <Text className="profile9" as="h3" variant="h3">
              M
            </Text>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header3;
