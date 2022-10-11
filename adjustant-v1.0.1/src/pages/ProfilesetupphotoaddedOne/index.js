import React from "react";

import { Column, Text, Button, Img, Row } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const ProfilesetupphotoaddedOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/profilepostsetupdefaultone");
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
              Profile Details
            </Text>
            <Column className="justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[100%]">
              <Column className="justify-start lg:pb-[5px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] w-[38%]">
                <Text className="InputOutline" as="h3" variant="h3">
                  Upload a Profile Picture (Optional)
                </Text>
                <Button
                  className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[14px] text-center w-[62%] xl:mt-[17px]"
                  rightIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="ml-[4px] text-center lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_500">
                    IMG_3930.png
                  </div>
                </Button>
              </Column>
              <Column className="justify-start lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[100%]">
                <Text className="InputOutline" as="h3" variant="h3">
                  Bio (Optional)
                </Text>
                <Column className="border border-bluegray_100 border-solid items-center justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius4 w-[100%]">
                  <Text className="inputarea1" as="h3" variant="h3">
                    Tell us about yourself. This will be displayed to firms with
                    the rest of your profile to help them understand who they’re
                    hiring.
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="items-center justify-center lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[49%]">
            <Row className="border border-bluegray_400 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]">
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft"
                alt="arrowleft"
              />
              <Text className="buttoncontents2" as="h3" variant="h3">
                Back
              </Text>
            </Row>
            <Row
              className="common-pointer bg-bluegray_500 items-center justify-center lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[38%]"
              onClick={handleNavigate11}
            >
              <Text className="buttoncontents" as="h3" variant="h3">
                Finish & Create Profile
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="arrowright"
                alt="arrowright"
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ProfilesetupphotoaddedOnePage;
