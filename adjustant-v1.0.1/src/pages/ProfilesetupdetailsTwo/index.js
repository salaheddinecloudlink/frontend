import React from "react";

import { Column, Text, Button, Img, Row } from "components";
import Header1 from "components/Header/Header1";
import { useNavigate } from "react-router-dom";

const ProfilesetupdetailsTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/profilesetupphotomodalthree");
  }
  function handleNavigate10() {
    navigate("/profilesetuplicensescertificationsone1");
  }

  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header1 className="w-[100%]" />
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
              <Column className="justify-start pr-[3px] pt-[3px] w-[100%]">
                <Text className="InputOutline" as="h3" variant="h3">
                  Upload a Company Logo (Optional)
                </Text>
                <Text
                  className="font-normal leading-[120.00%] mt-[3px] not-italic text-gray_600 w-[98%]"
                  as="h4"
                  variant="h4"
                >
                  For best results, use a solid color such as white, black, or a
                  main company color as the background of the image.
                </Text>
              </Column>
              <Button
                className="2xl:mt-[12px] 3xl:mt-[14px] flex items-center justify-center lg:mt-[8px] text-center w-[21%] xl:mt-[10px]"
                onClick={handleNavigate9}
                rightIcon={
                  <Img
                    src="images/img_upload.svg"
                    className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[5px] xl:w-[14px] xl:h-[15px] xl:ml-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[9px]"
                    alt="upload"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillBluegray500"
              >
                <div className="common-pointer bg-transparent font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                  Upload
                </div>
              </Button>
            </Column>
          </Column>
          <Row className="items-center justify-center lg:mt-[152px] xl:mt-[190px] 2xl:mt-[214px] 3xl:mt-[256px] w-[49%]">
            <Row
              className="common-pointer border border-bluegray_400 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]"
              onClick={handleNavigate10}
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
            <Row className="bg-bluegray_500 items-center justify-center lg:ml-[179px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[38%]">
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

export default ProfilesetupdetailsTwoPage;
