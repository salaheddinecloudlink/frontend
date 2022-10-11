import React from "react";

import { Column, Text, Row, Button, Img } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const ProfilesetupintroOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/profilesetuplicensescertificationsone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-end lg:p-[201px] xl:p-[252px] 2xl:p-[284px] 3xl:p-[340px] rounded-radius8 w-[100%]">
          <Text className="profilemain2" as="h1" variant="h1">
            Nice to meet you, let’s setup your profile.
          </Text>
          <Row className="items-center justify-center lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[33%]">
            <Button
              className="font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[43%]"
              shape="RoundedBorder4"
              size="md"
              variant="OutlineBluegray400"
            >
              Setup Later
            </Button>
            <Row
              className="common-pointer bg-bluegray_500 items-center justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[48%]"
              onClick={handleNavigate22}
            >
              <Text className="buttoncontents1" as="h3" variant="h3">
                Get Started
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="arrowright1"
                alt="arrowright"
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ProfilesetupintroOnePage;
