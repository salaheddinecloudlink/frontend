import React from "react";

import { Column, Stack, Img, Text, Row, Input } from "components";
import { useNavigate } from "react-router-dom";

const SignuploginsignupbasicinfoOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate32() {
    navigate("/signuploginsignupidentityverificationone");
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
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:p-[114px] xl:p-[143px] 2xl:p-[161px] 3xl:p-[193px] rounded-radius8 w-[100%]">
          <Text
            className="font-normal text-gray_600 w-[auto]"
            as="h1"
            variant="h1"
          >
            Sign Up
          </Text>
          <Column className="items-center justify-start lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[39%]">
            <Row className="items-center justify-evenly pt-[1px] w-[100%]">
              <Column className="w-[53%]">
                <Text className="InputOutline" as="h3" variant="h3">
                  First Name
                </Text>
                <Input
                  className="placeholder:text-gray_500 email_One"
                  wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[89%] xl:mt-[8px]"
                  name="inputarea"
                  placeholder="Johnny"
                ></Input>
              </Column>
              <Column className="mt-[1px] w-[47%]">
                <Text className="InputOutline" as="h3" variant="h3">
                  Last Name
                </Text>
                <Input
                  className="placeholder:text-gray_500 email_One"
                  wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                  name="inputarea One"
                  placeholder="Appleseed"
                ></Input>
              </Column>
            </Row>
            <Column className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Text className="InputOutline" as="h3" variant="h3">
                Email
              </Text>
              <Input
                className="placeholder:text-gray_500 email_One"
                wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                type="email"
                name="email One"
                placeholder="johnny.appleseed@email.com"
              ></Input>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mb-[44px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[19%]">
            <Row
              className="common-pointer bg-bluegray_500 items-center justify-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[59%]"
              onClick={handleNavigate32}
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
            <Row className="items-center justify-evenly lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Text className="confirmation" as="h3" variant="h3">
                Already have an account?
              </Text>
              <Text className="font-inter xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] underline cancel">
                Log In
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignuploginsignupbasicinfoOnePage;
