import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, List } from "components";
import Sidebar4 from "components/Sidebar/Sidebar4";

const MainfeedpostingpopulatedTwoPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Row className="bg-white_A700 items-center justify-between lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] shadow-bs w-[100%]">
            <Img
              src="images/img_airplane.svg"
              className="airplane1"
              alt="airplane"
            />
            <Row className="items-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[24%]">
              <Column className="items-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[19%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  JOBS
                </Text>
                <Line className="bg-bluegray_500 h-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
              </Column>
              <Text className="ADJUSTERSEARCH" as="h3" variant="h3">
                ADJUSTER SEARCH
              </Text>
              <Img
                src="images/img_notification.svg"
                className="notification1"
                alt="notification"
              />
              <Text className="profile" as="h3" variant="h3">
                M
              </Text>
            </Row>
          </Row>
          <Row className="items-center justify-evenly w-[100%]">
            <Sidebar4 className="w-[29%]" />
            <Column className="bg-white_A700 lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] shadow-bs1 w-[42%]">
              <Text className="test_36AdjustersNe_Three" as="h1" variant="h1">
                36 Adjusters Needed ASAP
              </Text>
              <Row className="items-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[46%]">
                <Column className="border border-gray_200 border-solid lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-start rounded-radius2 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] rounded-radius2 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                    style={{ backgroundImage: "url('images/img_group1.png')" }}
                  >
                    <Img
                      src="images/img_vector1.svg"
                      className="VectorOne1"
                      alt="VectorOne"
                    />
                  </Stack>
                </Column>
                <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[69%]">
                  <Text
                    className="font-bold text-bluegray_500 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Mile High Adjusters, LLC
                  </Text>
                  <Text className="BoulderColora" as="h3" variant="h3">
                    Boulder, Colorado
                  </Text>
                </Column>
              </Row>
              <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[80%]">
                <Button
                  className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[20%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  Wind & Hail
                </Button>
                <Row className="items-start justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[52%]">
                  <Img
                    src="images/img_calendar.svg"
                    className="calendar_Six"
                    alt="calendar Three"
                  />
                  <Text className="date" as="h3" variant="h3">
                    Sep. 12, 2022 - Sep. 14, 2022
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[16%]">
                  <Img
                    src="images/img_clock.svg"
                    className="calendar_Six"
                    alt="clock"
                  />
                  <Text className="date" as="h3" variant="h3">
                    2 days
                  </Text>
                </Row>
              </Row>
              <Line className="bg-gray_200 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
              <Text className="jobdetails" as="h3" variant="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fringilla urna porttitor rhoncus dolor purus non enim praesent
                elementum. Molestie ac feugiat sed lectus vestibulum mattis
                ullamcorper velit sed. Cras fermentum odio eu feugiat pretium
                nibh ipsum consequat nisl. Dictumst vestibulum rhoncus est
                pellentesque elit ullamcorper dignissim cras. Lectus proin nibh
                nisl condimentum id venenatis a. Id velit ut tortor pretium
                viverra suspendisse potenti. Fermentum et sollicitudin ac orci
                phasellus egestas tellus. Neque viverra justo nec ultrices. Sit
                amet massa vitae tortor condimentum lacinia.
              </Text>
              <Line className="bg-gray_200 h-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]" />
              <Row className="items-start xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] lg:mb-[83px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pr-[9px] w-[100%]">
                <Column className="justify-start pb-[1px] pr-[1px] w-[54%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Certifications/Licenses Required
                  </Text>
                  <Text className="DHSLicense" as="h3" variant="h3">
                    DHS License
                  </Text>
                  <Text className="XactimateLevel" as="h3" variant="h3">
                    Xactimate Level 2+
                  </Text>
                </Column>
                <Column className="justify-start w-[46%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Billing Details
                  </Text>
                  <Text className="XactimateLevel" as="h3" variant="h3">
                    Hourly - Disclosed prior to reporting.
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-white_A700 items-center py-[3px] w-[29%]">
              <Column className="justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] p-[1px] shadow-bs w-[100%]">
                <Text className="header1" as="h2" variant="h2">
                  Roster
                </Text>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
                orientation="vertical"
              >
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright One"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Two"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Three"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Four"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Five"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Six"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Seven"
                    />
                  </Row>
                </Row>
              </List>
              <Column className="items-center justify-start w-[88%]">
                <Column className="justify-start pr-[3px] pt-[3px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Secondary Roster
                  </Text>
                  <Text className="IssuedMarchFourteen" as="h4" variant="h4">
                    Able to report later if needed.
                  </Text>
                </Column>
                <Line className="bg-gray_200 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
                orientation="vertical"
              >
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Eight"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Nine"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Ten"
                    />
                  </Row>
                </Row>
                <Row className="roster">
                  <Row className="items-end w-[64%]">
                    <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                    <Text className="name" as="h3" variant="h3">
                      Johnny Appleseed
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[33%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Profile
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Eleven"
                    />
                  </Row>
                </Row>
              </List>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MainfeedpostingpopulatedTwoPage;
