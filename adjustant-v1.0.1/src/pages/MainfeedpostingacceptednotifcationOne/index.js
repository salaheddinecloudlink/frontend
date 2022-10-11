import React from "react";

import { Column, Stack, Row, Text, Img, Button, Line } from "components";
import Header2 from "components/Header/Header2";
import Sidebar from "components/Sidebar/Sidebar";

const MainfeedpostingacceptednotifcationOnePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-end mx-[auto] w-[100%]">
        <Header2 className="w-[100%]" />
        <Stack className="3xl:h-[1128px] lg:h-[668px] xl:h-[836px] 2xl:h-[940px] w-[100%]">
          <Sidebar className="absolute left-[0] w-[29%]" />
          <Column className="absolute bg-white_A700 justify-center lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] right-[0] shadow-bs1 top-[0] w-[71%]">
            <Row className="items-center justify-between mt-[1px] w-[100%]">
              <Text
                className="font-bold text-gray_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                36 Adjusters Needed ASAP
              </Text>
              <Row className="bg-bluegray_500 items-center justify-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[13%]">
                <Text className="buttoncontents" as="h3" variant="h3">
                  Request
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
                  alt="calendar Six"
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
              ullamcorper velit sed. Cras fermentum odio eu feugiat pretium nibh
              ipsum consequat nisl. Dictumst vestibulum rhoncus est pellentesque
              elit ullamcorper dignissim cras. Lectus proin nibh nisl
              condimentum id venenatis a. Id velit ut tortor pretium viverra
              suspendisse potenti. Fermentum et sollicitudin ac orci phasellus
              egestas tellus. Neque viverra justo nec ultrices. Sit amet massa
              vitae tortor condimentum lacinia.
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
            <Row className="items-start lg:mb-[131px] xl:mb-[164px] 2xl:mb-[185px] 3xl:mb-[222px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pr-[157px] xl:pr-[197px] 2xl:pr-[222px] 3xl:pr-[266px] w-[100%]">
              <Column className="justify-start pb-[1px] pr-[1px] w-[67%]">
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
              <Column className="justify-start w-[33%]">
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
          <Column className="absolute bg-black_900_a3 items-end justify-start 2xl:pl-[1024px] 3xl:pl-[1229px] lg:pl-[728px] xl:pl-[910px] top-[0] w-[100%]">
            <Column className="bg-white_A700 items-center justify-start lg:pb-[406px] xl:pb-[508px] 2xl:pb-[572px] 3xl:pb-[686px] w-[100%]">
              <Row className="bg-white_A700 items-center justify-between lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Text className="header" as="h2" variant="h2">
                  Notifications
                </Text>
                <Img
                  src="images/img_settings.svg"
                  className="settings"
                  alt="settings"
                />
              </Row>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Row className="items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
                <div className="bg-bluegray_500 rounded-radius50 plus1"></div>
                <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[61%]">
                  <Text className="columndescription_one" as="h3" variant="h3">
                    Pilot accepted your job request on:
                    <br />
                    36 Adjusters Needed ASAP
                  </Text>
                  <Row className="items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[42%]">
                    <Text
                      className="font-normal text-bluegray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      View Calendar
                    </Text>
                    <Img
                      src="images/img_arrowright_12X12.svg"
                      className="arrowright_One"
                      alt="arrowright Two"
                    />
                  </Row>
                </Column>
              </Row>
              <Line className="bg-gray_200 h-[1px] w-[100%]" />
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default MainfeedpostingacceptednotifcationOnePage;
