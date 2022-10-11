import React from "react";

import { Column, Stack, Img, Text, Row } from "components";
import { useNavigate } from "react-router-dom";

const SignuploginsignupidentityverificationPage = () => {
  const navigate = useNavigate();

  function handleNavigate36() {
    navigate("/signuploginsignupcreatepassword");
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
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-end lg:p-[112px] xl:p-[140px] 2xl:p-[158px] 3xl:p-[189px] rounded-radius8 w-[100%]">
          <Text className="profilemain" as="h1" variant="h1">
            ID Verification
          </Text>
          <Column className="items-center justify-start lg:mt-[219px] xl:mt-[273px] 2xl:mt-[308px] 3xl:mt-[369px] w-[12%]">
            <Row
              className="common-pointer bg-bluegray_500 font-metropolis items-center justify-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[89%]"
              onClick={handleNavigate36}
            >
              <Text className="buttoncontents" as="h3" variant="h3">
                Continue
              </Text>
              <Img
                src="images/img_share.svg"
                className="arrowright"
                alt="share"
              />
            </Row>
            <Text className="buttonswrapper">Why is this needed?</Text>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignuploginsignupidentityverificationPage;
