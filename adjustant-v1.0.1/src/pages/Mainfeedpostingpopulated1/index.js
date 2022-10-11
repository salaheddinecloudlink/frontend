import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, List } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";

const Mainfeedpostingpopulated1Page = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Row className="bg-white_A700 items-center justify-between lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] shadow-bs w-[100%]">
            <Img
              src="images/img_airplane.svg"
              className="airplane1"
              alt="airplane"
            />
            <Row className="items-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[23%]">
              <Column className="items-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[28%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  JOBS
                </Text>
                <Line className="bg-bluegray_500 h-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[72%]" />
              </Column>
              <Text
                className="font-medium text-bluegray_500 w-[auto]"
                as="h3"
                variant="h3"
              >
                AVAILABILITY
              </Text>
              <Img
                src="images/img_notification.svg"
                className="notification"
                alt="notification"
              />
              <Text className="profile" as="h3" variant="h3">
                M
              </Text>
            </Row>
          </Row>
          <Row className="items-start justify-evenly w-[100%]">
            <Sidebar3 className="w-[29%]" />
            <Column className="bg-white_A700 justify-center lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] shadow-bs1 w-[71%]">
              <Row className="items-center justify-between mt-[1px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="bg-bluegray_500 items-center justify-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[17%]">
                  <Text className="buttoncontents" as="h3" variant="h3">
                    Request Work
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright"
                    alt="arrowright"
                  />
                </Row>
              </Row>
              <Row className="items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[25%]">
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
              <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[64%]">
                <Button
                  className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[14%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  Wind & Hail
                </Button>
                <Row className="items-start justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[36%]">
                  <Img
                    src="images/img_calendar.svg"
                    className="calendar_Six"
                    alt="calendar Five"
                  />
                  <Text className="date" as="h3" variant="h3">
                    Sep. 12, 2022 - Sep. 14, 2022
                  </Text>
                </Row>
                <Row className="items-start justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[11%]">
                  <Img
                    src="images/img_clock.svg"
                    className="calendar_Six"
                    alt="clock"
                  />
                  <Text className="date" as="h3" variant="h3">
                    2 days
                  </Text>
                </Row>
                <Row className="items-center justify-evenly lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[27%]">
                  <Text
                    className="font-normal text-bluegray_500 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    View with Your Availability
                  </Text>
                  <Img
                    src="images/img_arrowright_12X12.svg"
                    className="arrowright_One"
                    alt="arrowright One"
                  />
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
              <Line className="bg-gray_200 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
              <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Licenses & Certifications
                </Text>
                <Row className="items-start justify-evenly lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Column className="justify-start w-[34%]">
                    <Text
                      className="font-medium text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Active
                    </Text>
                    <Button
                      className="2xl:mt-[13px] 3xl:mt-[15px] flex items-center justify-center lg:mt-[9px] text-center w-[36%] xl:mt-[11px]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_16X16.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[5px] xl:w-[14px] xl:h-[15px] xl:mr-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[9px] rounded-radius4"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBluegray5001e"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800">
                        DHS License
                      </div>
                    </Button>
                    <Button
                      className="2xl:mt-[10px] 3xl:mt-[12px] flex items-center justify-center lg:mt-[7px] text-center w-[49%] xl:mt-[8px]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_16X16.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[5px] xl:w-[14px] xl:h-[15px] xl:mr-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[9px] rounded-radius4"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillBluegray5001e"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800">
                        Xactimate Level 2+
                      </div>
                    </Button>
                  </Column>
                  <List
                    className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 min-h-[auto] w-[66%]"
                    orientation="horizontal"
                  >
                    <Column className="listrecommended">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Recommended
                      </Text>
                      <Text className="Noadditionally" as="h3" variant="h3">
                        No additionally recommended licenses.
                      </Text>
                    </Column>
                    <Column className="listrecommended">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Needed
                      </Text>
                      <Text className="Noadditionally" as="h3" variant="h3">
                        No additionally needed licenses.
                      </Text>
                    </Column>
                  </List>
                </Row>
              </Column>
              <Line className="bg-gray_200 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
              <Column className="justify-start lg:mb-[27px] xl:mb-[33px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[25%]">
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
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Mainfeedpostingpopulated1Page;
