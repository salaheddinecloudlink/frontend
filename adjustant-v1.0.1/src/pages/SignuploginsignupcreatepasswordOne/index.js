import React from "react";

import { Column, Stack, Img, Text, Input, Line, Row } from "components";
import { useNavigate } from "react-router-dom";

const SignuploginsignupcreatepasswordOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate24() {
    navigate("/profilesetupintroone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[100%]">
          <Img
            src="images/img_airplane.svg"
            className="airplane"
            alt="airplane"
          />
        </Stack>
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-end lg:p-[123px] xl:p-[154px] 2xl:p-[174px] 3xl:p-[208px] rounded-radius8 w-[100%]">
          <Text className="profilemain" as="h1" variant="h1">
            Create a Password
          </Text>
          <Column className="items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] py-[1px] w-[40%]">
            <Column className="justify-start w-[100%]">
              <Text className="InputOutline" as="h3" variant="h3">
                Password
              </Text>
              <Input
                className="placeholder:text-gray_500 email_One"
                wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                type="password"
                name="inputarea"
                placeholder="Enter Password"
              ></Input>
              <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pr-[4px] pt-[4px] w-[100%]">
                <Line className="bg-bluegray_500_7f h-[4px] rounded-radius1 w-[33%]" />
                <Row className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[38%]">
                  <Text
                    className="font-normal mt-[1px] not-italic text-gray_500 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Password strength:
                  </Text>
                  <Text
                    className="font-medium mb-[1px] ml-[4px] text-bluegray_500 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Weak
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="justify-start lg:my-[16px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[100%]">
              <Text className="InputOutline" as="h3" variant="h3">
                Confirm Password
              </Text>
              <Input
                className="placeholder:text-gray_500 email_One"
                wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] w-[100%] xl:mt-[9px]"
                type="password"
                name="inputarea One"
                placeholder="Confirm Password"
                size="sm"
              ></Input>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[3px] px-[3px] w-[51%]">
            <Text className="buttonswrapper1" as="h3" variant="h3">
              Password must be at least 8 characters long and include an
              uppercase letter, a number, and a special character.
            </Text>
            <Row
              className="common-pointer bg-bluegray_500 items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[22%]"
              onClick={handleNavigate24}
            >
              <Text className="buttoncontents" as="h3" variant="h3">
                Continue
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="arrowright"
                alt="arrowright"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignuploginsignupcreatepasswordOnePage;
