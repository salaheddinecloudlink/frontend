import React from "react";

import { Column, Text, Row, Img } from "components";
import Header3 from "components/Header/Header3";

const ProfilesetupintroTwoPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-end lg:p-[201px] xl:p-[252px] 2xl:p-[284px] 3xl:p-[340px] rounded-radius8 w-[100%]">
          <Text className="profilemain4" as="h1" variant="h1">
            Welcome, let’s setup your profile to get started.
          </Text>
          <Row className="bg-bluegray_500 items-center justify-center lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[16%]">
            <Text className="buttoncontents1" as="h3" variant="h3">
              Get Started
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="arrowright1"
              alt="arrowright"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ProfilesetupintroTwoPage;
