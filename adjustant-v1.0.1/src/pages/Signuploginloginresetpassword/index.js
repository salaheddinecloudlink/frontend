import React from "react";

import { Column, Stack, Img, Line, Text, Input, Button } from "components";

const SignuploginloginresetpasswordPage = () => {
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
        <Column className="border border-gray_200 border-solid items-center justify-start mt-[1px] lg:p-[130px] xl:p-[162px] 2xl:p-[183px] 3xl:p-[219px] rounded-radius8 w-[100%]">
          <Line className="bg-gray_200 h-[1px] w-[61%]" />
          <Column className="bg-white_A700 items-center justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[61%]">
            <Text className="profilemain" as="h1" variant="h1">
              Reset Password
            </Text>
            <Column className="justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] pt-[1px] w-[77%]">
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
            <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] pt-[3px] px-[3px] w-[100%]">
              <Text className="InputOutline" as="h3" variant="h3">
                We will send a link to your email to create a new password.
              </Text>
              <Button
                className="font-normal lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[27%]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBluegray500"
              >
                Reset Password
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignuploginloginresetpasswordPage;
