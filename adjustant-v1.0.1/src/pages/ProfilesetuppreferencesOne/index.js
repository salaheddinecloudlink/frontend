import React from "react";

import { Column, Text, Input, Row, Img } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const ProfilesetuppreferencesOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate25() {
    navigate("/profilesetuplicensescertificationsone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-end lg:p-[105px] xl:p-[131px] 2xl:p-[148px] 3xl:p-[177px] rounded-radius8 w-[100%]">
          <Column className="items-center justify-start mt-[1px] w-[49%]">
            <Text
              className="font-normal text-gray_600 w-[auto]"
              as="h1"
              variant="h1"
            >
              Job Preferences
            </Text>
            <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Text className="InputOutline" as="h3" variant="h3">
                  Location (Optional)
                </Text>
                <Input
                  className="placeholder:text-gray_600 inputarea"
                  wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[4px] w-[100%] xl:mt-[6px]"
                  name="inputarea"
                  placeholder="What states/regions do you primarily work in?"
                  size="md"
                ></Input>
              </Column>
              <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Text className="InputOutline" as="h3" variant="h3">
                  Type (Optional)
                </Text>
                <Input
                  className="placeholder:text-gray_600 inputarea"
                  wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[4px] w-[100%] xl:mt-[6px]"
                  name="inputarea One"
                  placeholder="What type of jobs do you specialize in or prefer to work on?"
                  size="md"
                ></Input>
              </Column>
            </Column>
          </Column>
          <Row className="items-center justify-center lg:mt-[142px] xl:mt-[177px] 2xl:mt-[200px] 3xl:mt-[240px] w-[49%]">
            <Row
              className="common-pointer border border-bluegray_400 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]"
              onClick={handleNavigate25}
            >
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft"
                alt="arrowleft"
              />
              <Text className="buttoncontents2" as="h3" variant="h3">
                Back
              </Text>
            </Row>
            <Row className="bg-bluegray_500 items-center justify-center lg:ml-[260px] xl:ml-[326px] 2xl:ml-[367px] 3xl:ml-[440px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]">
              <Text className="buttoncontents1" as="h3" variant="h3">
                Next
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

export default ProfilesetuppreferencesOnePage;
