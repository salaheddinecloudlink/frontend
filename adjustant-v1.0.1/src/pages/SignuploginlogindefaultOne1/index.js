import React from "react";

import { Column, Stack, Img, Row, Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const SignuploginlogindefaultOne1Page = () => {
  const navigate = useNavigate();

  function handleNavigate35() {
    navigate("/signuploginloginresetpassword");
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
        <Column className="border border-gray_200 border-solid items-center justify-start mt-[1px] xl:p-[104px] 2xl:p-[118px] 3xl:p-[141px] lg:p-[83px] rounded-radius8 w-[100%]">
          <Row className="bg-white_A700 items-center justify-center lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] w-[54%]">
            <Text className="loginnav1" as="h3" variant="h3">
              Adjuster
            </Text>
            <Column className="items-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] w-[51%]">
              <Text
                className="font-bold text-bluegray_500 w-[auto]"
                as="h3"
                variant="h3"
              >
                Firm
              </Text>
              <Line className="bg-bluegray_500 h-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
            </Column>
          </Row>
          <Line className="bg-gray_200 h-[1px] w-[54%]" />
          <Column className="bg-white_A700 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[54%]">
            <Text className="profilemain" as="h1" variant="h1">
              Welcome Back
            </Text>
            <Column className="items-center justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] pt-[1px] w-[77%]">
              <Column className="justify-start w-[100%]">
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
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[1px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="LabelText_One" as="h3" variant="h3">
                    Password
                  </Text>
                  <Text
                    className="common-pointer ForgotPassword"
                    onClick={handleNavigate35}
                  >
                    Forgot Password?
                  </Text>
                </Row>
                <Input
                  className="placeholder:text-gray_500 email_One"
                  wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] lg:mt-[6px] w-[100%] xl:mt-[8px]"
                  type="password"
                  name="inputarea"
                  placeholder="Password"
                  size="sm"
                ></Input>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[41%]">
              <Button
                className="font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[39%]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBluegray500"
              >
                Log In
              </Button>
              <Row className="items-start justify-evenly lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Text className="confirmation1" as="h3" variant="h3">
                  Don???t have an account?
                </Text>
                <Text className="GetStarted">Get Started</Text>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignuploginlogindefaultOne1Page;
