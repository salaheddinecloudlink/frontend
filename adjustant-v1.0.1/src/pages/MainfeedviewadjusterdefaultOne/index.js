import React from "react";

import { Column, Stack, Img, Button, Text, Row, Line } from "components";
import Header3 from "components/Header/Header3";

const MainfeedviewadjusterdefaultOnePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="items-center justify-end lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] w-[100%]">
          <Stack className="lg:h-[256px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] w-[89%]">
            <Column className="absolute bg-white_A700 items-center justify-start lg:pb-[113px] xl:pb-[142px] 2xl:pb-[160px] 3xl:pb-[192px] rounded-radius8 w-[100%]">
              <div className="bg-gradient  lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] w-[100%]"></div>
            </Column>
            <Column className="absolute border border-gray_200 border-solid justify-end lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[100%]">
              <Stack className="3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[9%]">
                <Stack className="absolute bg-bluegray_800 border-4 border-solid border-white_A700 3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] left-[0] px-[4px] rounded-radius50 3xl:w-[115px] lg:w-[68px] xl:w-[85px] 2xl:w-[96px]">
                  <Img
                    src="images/img_photocropprev.png"
                    className="unsplashs2Oisy"
                    alt="unsplashs2Oisy"
                  />
                </Stack>
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
              <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[4px] pt-[4px] w-[100%]">
                <Text
                  className="font-normal text-gray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Johnny Appleseed
                </Text>
                <Text className="AuroraColorad" as="h3" variant="h3">
                  Aurora, Colorado
                </Text>
              </Column>
            </Column>
          </Stack>
          <Column className="bg-white_A700 border border-gray_200 border-solid justify-end mt-[4px] lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[89%]">
            <Text className="profilemain" as="h2" variant="h2">
              About
            </Text>
            <Text className="description" as="h3" variant="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fringilla urna porttitor rhoncus dolor purus non enim praesent
              elementum. Molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed. Cras fermentum odio eu feugiat pretium nibh
              ipsum consequat nisl. Dictumst vestibulum rhoncus est pellentesque
              elit ullamcorper dignissim cras. Lectus proin nibh nisl
              condimentum id venenatis a. Id velit ut tortor pretium viverra
              suspendisse potenti. Fermentum et sollicitudin ac orci phasellus
              egestas tellus. Neque viverra justo nec ultrices. Sit amet massa
              vitae tortor condimentum lacinia.
            </Text>
          </Column>
          <Row className="items-center mt-[4px] w-[89%]">
            <div className="bg-white_A700 border border-gray_200 border-solid lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] rounded-radius8 w-[33%]"></div>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-center ml-[4px] lg:pt-[34px] xl:pt-[42px] 2xl:pt-[48px] 3xl:pt-[57px] lg:px-[34px] xl:px-[42px] 2xl:px-[48px] 3xl:px-[57px] rounded-radius8 w-[33%]">
              <Column className="items-center justify-end lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] w-[60%]">
                <div className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] outline outline-[8px] outline-teal_200_85 rotate-[90deg] rounded-radius86 w-[100%]"></div>
                <Stack className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Img
                    src="images/img_completed.svg"
                    className="absolute lg:h-[123px] xl:h-[154px] 2xl:h-[173px] 3xl:h-[207px] top-[0] lg:w-[122px] xl:w-[153px] 2xl:w-[172px] 3xl:w-[206px]"
                    alt="completed"
                  />
                  <Column className="absolute inset-x-[0] items-center justify-end mx-[auto] top-[100%] w-[67%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <div className="bg-bluegray_500 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text className="InputOutline" as="h3" variant="h3">
                        Jobs Completed
                      </Text>
                    </Row>
                    <Text
                      className="font-normal text-gray_600 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      34
                    </Text>
                  </Column>
                </Stack>
              </Column>
              <Column className="items-center justify-start lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[255px] w-[35%]">
                <Line className="bg-bluegray_100 h-[1px] w-[91%]" />
                <Column className="items-center justify-start lg:mt-[169px] xl:mt-[211px] 2xl:mt-[238px] 3xl:mt-[285px] w-[100%]">
                  <Text
                    className="font-normal text-bluegray_800 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    94%
                  </Text>
                  <Text
                    className="font-normal lg:mt-[206px] xl:mt-[258px] 2xl:mt-[291px] 3xl:mt-[349px] text-bluegray_800 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Completion Rate
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-center ml-[3px] lg:pt-[56px] xl:pt-[71px] 2xl:pt-[80px] 3xl:pt-[96px] lg:px-[56px] xl:px-[71px] 2xl:px-[80px] 3xl:px-[96px] rounded-radius8 w-[33%]">
              <Img
                src="images/img_vectorstroke.svg"
                className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] w-[44%]"
                alt="VectorStroke"
              />
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[151px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[255px] w-[40%]" />
              <Column className="items-center justify-start lg:mt-[169px] xl:mt-[211px] 2xl:mt-[238px] 3xl:mt-[285px] w-[48%]">
                <Text
                  className="font-normal text-bluegray_800 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  97%
                </Text>
                <Text
                  className="font-normal lg:mt-[206px] xl:mt-[258px] 2xl:mt-[291px] 3xl:mt-[349px] text-bluegray_800 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Positive Feedback
                </Text>
              </Column>
            </Column>
          </Row>
        </Column>
        <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
          <Column className="pb-[1px] pr-[1px] w-[76%]">
            <Text className="rowmultipledeploy" as="h2" variant="h2">
              Accept Johnny Appleseed on the job?
            </Text>
            <Row className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[12%]">
              <Img
                src="images/img_plus.svg"
                className="mt-[1px] plus"
                alt="plus"
              />
              <Text
                className="font-bold mb-[1px] ml-[2px] text-bluegray_500 w-[auto]"
                as="h3"
                variant="h3"
              >
                View Job Details
              </Text>
            </Row>
          </Column>
          <Row className="bg-white_A700 items-center justify-between w-[24%]">
            <Row className="items-start justify-evenly w-[32%]">
              <Text
                className="font-bold mt-[2px] text-bluegray_500 w-[auto]"
                as="h3"
                variant="h3"
              >
                Don’t Accept
              </Text>
              <Img
                src="images/img_plus.svg"
                className="calendar_Six"
                alt="plus One"
              />
            </Row>
            <Line className="bg-gray_200 lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[1px]" />
            <Button
              className="flex items-center justify-center text-center w-[53%]"
              rightIcon={
                <Img
                  src="images/img_checkmark.svg"
                  className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[5px] xl:w-[14px] xl:h-[15px] xl:ml-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[9px]"
                  alt="checkmark"
                />
              }
              shape="RoundedBorder4"
              size="md"
              variant="FillBluegray500"
            >
              <div className="bg-transparent font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                Accept Adjuster
              </div>
            </Button>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default MainfeedviewadjusterdefaultOnePage;
