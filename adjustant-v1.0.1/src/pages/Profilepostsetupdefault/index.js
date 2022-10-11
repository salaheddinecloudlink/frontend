import React from "react";

import { Column, Stack, Button, Img, Text, Row, List } from "components";
import Header3 from "components/Header/Header3";

const ProfilepostsetupdefaultPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
          <Stack className="bg-white_A700 lg:h-[256px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius8 w-[89%]">
            <Column className="absolute bg-gradient  items-end justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] top-[0] w-[100%]">
              <Button
                className="2xl:mt-[119px] 3xl:mt-[142px] flex items-center justify-center lg:mt-[84px] text-center w-[12%] xl:mt-[105px]"
                rightIcon={
                  <Img
                    src="images/img_link.svg"
                    className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[5px] xl:w-[14px] xl:h-[15px] xl:ml-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[9px]"
                    alt="link"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillWhiteA700"
              >
                <div className="bg-transparent font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                  Edit Profile
                </div>
              </Button>
            </Column>
            <Column className="absolute border border-gray_200 border-solid justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[100%]">
              <Stack className="3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[9%]">
                <Column className="absolute bg-bluegray_800 border-4 border-solid border-white_A700 3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] items-center justify-start left-[0] px-[4px] rounded-radius50 3xl:w-[115px] lg:w-[68px] xl:w-[85px] 2xl:w-[96px]">
                  <Stack className="bg-white_A700 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]">
                    <Img
                      src="images/img_screenshot202.png"
                      className="absolute bottom-[2%] lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] w-[100%]"
                      alt="ScreenShot202"
                    />
                    <div className="absolute bg-white_A700 lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] right-[0] top-[20%] w-[9%]"></div>
                  </Stack>
                </Column>
                <Button
                  className="absolute bottom-[13%] flex items-center justify-center right-[0] rounded-radius50 plus1"
                  size="smIcn"
                  variant="icbOutlineWhiteA700"
                >
                  <Img
                    src="images/img_camera.svg"
                    className="flex items-center justify-center"
                    alt="camera"
                  />
                </Button>
              </Stack>
              <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[3px] pt-[3px] w-[100%]">
                <Text
                  className="font-normal text-gray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Mile High Adjusters
                </Text>
                <Text
                  className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-gray_600 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Aurora, Colorado
                </Text>
              </Column>
            </Column>
          </Stack>
          <Row className="items-center lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mt-[4px] w-[89%]">
            <Column className="bg-white_A700 border border-gray_200 border-solid lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[50%]">
              <Text
                className="font-normal text-gray_600 w-[auto]"
                as="h2"
                variant="h2"
              >
                Licenses & Certifications Requirements
              </Text>
              <List
                className="gap-[0] lg:mb-[227px] xl:mb-[284px] 2xl:mb-[320px] 3xl:mb-[384px] min-h-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[58%]"
                orientation="vertical"
              >
                <Column className="listfloridadhslic">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Florida DHS License
                  </Text>
                  <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                    <Text className="IssuedMarchFourteen" as="h3" variant="h3">
                      Issued March 14, 2022
                    </Text>
                    <Text className="InputOutline" as="h3" variant="h3">
                      Expires March 14, 2026
                    </Text>
                  </Row>
                </Column>
                <Column className="listfloridadhslic">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Xactimate Level 3
                  </Text>
                  <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                    <Text className="IssuedMarchFourteen" as="h3" variant="h3">
                      Issued March 14, 2022
                    </Text>
                    <Text className="InputOutline" as="h3" variant="h3">
                      Expires March 14, 2023
                    </Text>
                  </Row>
                </Column>
              </List>
            </Column>
            <Column className="bg-white_A700 border border-gray_200 border-solid ml-[4px] lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[50%]">
              <Text
                className="font-normal text-gray_600 w-[auto]"
                as="h2"
                variant="h2"
              >
                Areas of Operation
              </Text>
              <Stack className="bg-gray_50 lg:h-[293px] xl:h-[367px] 2xl:h-[413px] 3xl:h-[495px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Stack className="absolute lg:h-[238px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] w-[100%]">
                  <Stack className="absolute lg:h-[238px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] w-[100%]">
                    <Img
                      src="images/img_map.png"
                      className="absolute lg:h-[238px] xl:h-[298px] 2xl:h-[335px] 3xl:h-[402px] w-[100%]"
                      alt="reactusamapTwo"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="absolute lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] left-[26%] top-[25%] w-[12%]"
                      alt="folder"
                    />
                  </Stack>
                  <Img
                    src="images/img_folder_50X65.svg"
                    className="absolute lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] left-[28%] top-[39%] w-[12%]"
                    alt="folder One"
                  />
                </Stack>
                <Row className="absolute h-[max-content] inset-y-[0] items-start justify-center left-[10%] my-[auto] w-[28%]">
                  <Img
                    src="images/img_computer.svg"
                    className="3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] lg:mb-[36px] xl:mb-[46px] 2xl:mb-[52px] 3xl:mb-[62px] w-[39%]"
                    alt="computer"
                  />
                  <Img
                    src="images/img_megaphone.svg"
                    className="lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[42%]"
                    alt="megaphone"
                  />
                </Row>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ProfilepostsetupdefaultPage;
