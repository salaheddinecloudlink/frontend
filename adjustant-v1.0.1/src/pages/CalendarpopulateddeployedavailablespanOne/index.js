import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Stack,
  Slider,
  Button,
  List,
} from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";

const CalendarpopulateddeployedavailablespanOnePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-metropolis items-center justify-end mx-[auto] w-[100%]">
        <Row className="bg-white_A700 items-center justify-between lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] shadow-bs w-[100%]">
          <Img
            src="images/img_airplane.svg"
            className="airplane1"
            alt="airplane"
          />
          <Row className="items-center xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[23%]">
            <Text
              className="font-medium text-bluegray_500 w-[auto]"
              as="h3"
              variant="h3"
            >
              JOBS
            </Text>
            <Column className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[40%]">
              <Text
                className="font-medium text-bluegray_500 w-[auto]"
                as="h3"
                variant="h3"
              >
                AVAILABILITY
              </Text>
              <Line className="bg-bluegray_500 h-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
            </Column>
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
        <Stack className="lg:h-[1304px] xl:h-[1631px] 2xl:h-[1835px] 3xl:h-[2201px] mt-[1px] w-[98%]">
          <Row className="absolute items-end justify-evenly top-[0] w-[100%]">
            <Sidebar2 className="w-[19%]" />
            <Column className="bg-gray_50 justify-start lg:mt-[121px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[205px] lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] w-[81%]">
              <Stack className="lg:h-[407px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] w-[100%]">
                <Stack className="absolute lg:h-[367px] xl:h-[460px] 2xl:h-[517px] 3xl:h-[620px] top-[0] w-[100%]">
                  <Stack className="absolute bottom-[1%] lg:h-[363px] xl:h-[454px] 2xl:h-[511px] 3xl:h-[613px] w-[100%]">
                    <Stack className="absolute lg:h-[316px] xl:h-[395px] 2xl:h-[445px] 3xl:h-[534px] top-[0] w-[100%]">
                      <Stack className="absolute bottom-[1%] lg:h-[312px] xl:h-[390px] 2xl:h-[439px] 3xl:h-[526px] w-[100%]">
                        <Stack className="absolute lg:h-[265px] xl:h-[331px] 2xl:h-[373px] 3xl:h-[447px] top-[0] w-[100%]">
                          <Stack className="absolute bottom-[2%] lg:h-[261px] xl:h-[326px] 2xl:h-[367px] 3xl:h-[440px] w-[100%]">
                            <Stack className="absolute lg:h-[214px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] top-[0] w-[100%]">
                              <Stack className="absolute bottom-[2%] lg:h-[210px] xl:h-[262px] 2xl:h-[295px] 3xl:h-[354px] w-[100%]">
                                <Stack className="absolute lg:h-[163px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] top-[0] w-[100%]">
                                  <Stack className="absolute bottom-[3%] lg:h-[158px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] w-[100%]">
                                    <Stack className="absolute lg:h-[111px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] top-[0] w-[100%]">
                                      <Stack className="absolute bottom-[4%] lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] w-[100%]">
                                        <Stack className="absolute 3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] top-[0] w-[100%]">
                                          <Stack className="absolute lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] top-[0] w-[100%]">
                                            <Row className="absolute items-center justify-between top-[0] w-[100%]">
                                              <Text
                                                className="not-italic text-gray_600 w-[auto]"
                                                as="h5"
                                                variant="h5"
                                              >
                                                1 am
                                              </Text>
                                              <Line className="bg-gray_200 h-[1px] w-[97%]" />
                                            </Row>
                                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[4%] w-[1px]"></div>
                                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[18%] w-[1px]"></div>
                                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[32%] w-[1px]"></div>
                                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[45%] w-[1px]"></div>
                                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[41%] w-[1px]"></div>
                                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[27%] w-[1px]"></div>
                                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[14%] w-[1px]"></div>
                                          </Stack>
                                          <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                                            <Text
                                              className="not-italic text-gray_600 w-[auto]"
                                              as="h5"
                                              variant="h5"
                                            >
                                              2 am
                                            </Text>
                                            <Line className="bg-gray_200 h-[1px] w-[97%]" />
                                          </Row>
                                        </Stack>
                                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[4%] w-[1px]"></div>
                                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[18%] w-[1px]"></div>
                                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[32%] w-[1px]"></div>
                                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[45%] w-[1px]"></div>
                                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[41%] w-[1px]"></div>
                                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[27%] w-[1px]"></div>
                                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[14%] w-[1px]"></div>
                                      </Stack>
                                      <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                                        <Text
                                          className="not-italic text-gray_600 w-[auto]"
                                          as="h5"
                                          variant="h5"
                                        >
                                          3 am
                                        </Text>
                                        <Line className="bg-gray_200 h-[1px] w-[97%]" />
                                      </Row>
                                    </Stack>
                                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[4%] w-[1px]"></div>
                                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[18%] w-[1px]"></div>
                                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[32%] w-[1px]"></div>
                                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[45%] w-[1px]"></div>
                                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[41%] w-[1px]"></div>
                                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[27%] w-[1px]"></div>
                                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[14%] w-[1px]"></div>
                                  </Stack>
                                  <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                                    <Text
                                      className="not-italic text-gray_600 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      4 am
                                    </Text>
                                    <Line className="bg-gray_200 h-[1px] w-[97%]" />
                                  </Row>
                                </Stack>
                                <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[4%] w-[1px]"></div>
                                <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[18%] w-[1px]"></div>
                                <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[32%] w-[1px]"></div>
                                <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[45%] w-[1px]"></div>
                                <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[41%] w-[1px]"></div>
                                <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[27%] w-[1px]"></div>
                                <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[14%] w-[1px]"></div>
                              </Stack>
                              <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                                <Text
                                  className="not-italic text-gray_600 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  5 am
                                </Text>
                                <Line className="bg-gray_200 h-[1px] w-[97%]" />
                              </Row>
                            </Stack>
                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[4%] w-[1px]"></div>
                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[18%] w-[1px]"></div>
                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[32%] w-[1px]"></div>
                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[45%] w-[1px]"></div>
                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[41%] w-[1px]"></div>
                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[27%] w-[1px]"></div>
                            <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[14%] w-[1px]"></div>
                          </Stack>
                          <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                            <Text
                              className="not-italic text-gray_600 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              6 am
                            </Text>
                            <Line className="bg-gray_200 h-[1px] w-[97%]" />
                          </Row>
                        </Stack>
                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[4%] w-[1px]"></div>
                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[18%] w-[1px]"></div>
                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[32%] w-[1px]"></div>
                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[45%] w-[1px]"></div>
                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[41%] w-[1px]"></div>
                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[27%] w-[1px]"></div>
                        <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[14%] w-[1px]"></div>
                      </Stack>
                      <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                        <Text
                          className="not-italic text-gray_600 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          7 am
                        </Text>
                        <Line className="bg-gray_200 h-[1px] w-[97%]" />
                      </Row>
                    </Stack>
                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[4%] w-[1px]"></div>
                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[18%] w-[1px]"></div>
                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[32%] w-[1px]"></div>
                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] left-[45%] w-[1px]"></div>
                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[41%] w-[1px]"></div>
                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[27%] w-[1px]"></div>
                    <div className="absolute bg-gray_200 bottom-[0] lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] right-[14%] w-[1px]"></div>
                  </Stack>
                  <Row className="absolute bottom-[0] items-center justify-between w-[100%]">
                    <Text
                      className="not-italic text-gray_600 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      8 am
                    </Text>
                    <Line className="bg-gray_200 h-[1px] w-[97%]" />
                  </Row>
                </Stack>
                <div className="absolute bg-gray_200 bottom-[0] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] left-[4%] w-[1px]"></div>
                <div className="absolute bg-gray_200 bottom-[0] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] left-[18%] w-[1px]"></div>
                <div className="absolute bg-gray_200 bottom-[0] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] left-[32%] w-[1px]"></div>
                <div className="absolute bg-gray_200 bottom-[0] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] left-[45%] w-[1px]"></div>
                <div className="absolute bg-gray_200 bottom-[0] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] right-[41%] w-[1px]"></div>
                <div className="absolute bg-gray_200 bottom-[0] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] right-[27%] w-[1px]"></div>
                <div className="absolute bg-gray_200 bottom-[0] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] right-[14%] w-[1px]"></div>
              </Stack>
              <Row className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  9 am
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[1px]"></div>
              <Row className="items-center lg:mt-[54px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  10 am
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[1px]"></div>
              <Row className="items-center lg:mt-[105px] xl:mt-[132px] 2xl:mt-[149px] 3xl:mt-[178px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  11 am
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[1px]"></div>
              <Row className="items-center lg:mt-[157px] xl:mt-[196px] 2xl:mt-[221px] 3xl:mt-[265px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  12 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[1px]"></div>
              <Row className="items-center lg:mt-[208px] xl:mt-[260px] 2xl:mt-[293px] 3xl:mt-[351px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  1 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[212px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[212px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[212px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[212px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[212px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[212px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[212px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[1px]"></div>
              <Row className="items-center lg:mt-[259px] xl:mt-[324px] 2xl:mt-[365px] 3xl:mt-[438px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  2 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[263px] xl:mt-[330px] 2xl:mt-[371px] 3xl:mt-[445px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[263px] xl:mt-[330px] 2xl:mt-[371px] 3xl:mt-[445px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[263px] xl:mt-[330px] 2xl:mt-[371px] 3xl:mt-[445px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[263px] xl:mt-[330px] 2xl:mt-[371px] 3xl:mt-[445px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[263px] xl:mt-[330px] 2xl:mt-[371px] 3xl:mt-[445px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[263px] xl:mt-[330px] 2xl:mt-[371px] 3xl:mt-[445px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[263px] xl:mt-[330px] 2xl:mt-[371px] 3xl:mt-[445px] w-[1px]"></div>
              <Row className="items-center lg:mt-[310px] xl:mt-[388px] 2xl:mt-[437px] 3xl:mt-[524px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  3 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[443px] 3xl:mt-[531px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[443px] 3xl:mt-[531px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[443px] 3xl:mt-[531px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[443px] 3xl:mt-[531px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[443px] 3xl:mt-[531px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[443px] 3xl:mt-[531px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[315px] xl:mt-[394px] 2xl:mt-[443px] 3xl:mt-[531px] w-[1px]"></div>
              <Row className="items-center lg:mt-[361px] xl:mt-[452px] 2xl:mt-[509px] 3xl:mt-[611px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  4 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[366px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[366px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[366px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[366px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[366px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[366px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[366px] xl:mt-[458px] 2xl:mt-[515px] 3xl:mt-[618px] w-[1px]"></div>
              <Row className="items-center lg:mt-[413px] xl:mt-[516px] 2xl:mt-[581px] 3xl:mt-[697px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  5 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[417px] xl:mt-[522px] 2xl:mt-[587px] 3xl:mt-[704px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[417px] xl:mt-[522px] 2xl:mt-[587px] 3xl:mt-[704px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[417px] xl:mt-[522px] 2xl:mt-[587px] 3xl:mt-[704px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[417px] xl:mt-[522px] 2xl:mt-[587px] 3xl:mt-[704px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[417px] xl:mt-[522px] 2xl:mt-[587px] 3xl:mt-[704px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[417px] xl:mt-[522px] 2xl:mt-[587px] 3xl:mt-[704px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[417px] xl:mt-[522px] 2xl:mt-[587px] 3xl:mt-[704px] w-[1px]"></div>
              <Row className="items-center lg:mt-[464px] xl:mt-[580px] 2xl:mt-[653px] 3xl:mt-[784px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  6 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[468px] xl:mt-[586px] 2xl:mt-[659px] 3xl:mt-[791px] w-[1px]"></div>
              <Row className="items-center lg:mt-[515px] xl:mt-[644px] 2xl:mt-[725px] 3xl:mt-[870px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  7 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[519px] xl:mt-[650px] 2xl:mt-[731px] 3xl:mt-[877px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[519px] xl:mt-[650px] 2xl:mt-[731px] 3xl:mt-[877px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[519px] xl:mt-[650px] 2xl:mt-[731px] 3xl:mt-[877px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[519px] xl:mt-[650px] 2xl:mt-[731px] 3xl:mt-[877px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[519px] xl:mt-[650px] 2xl:mt-[731px] 3xl:mt-[877px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[519px] xl:mt-[650px] 2xl:mt-[731px] 3xl:mt-[877px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[519px] xl:mt-[650px] 2xl:mt-[731px] 3xl:mt-[877px] w-[1px]"></div>
              <Row className="items-center lg:mt-[566px] xl:mt-[708px] 2xl:mt-[797px] 3xl:mt-[956px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  8 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[571px] xl:mt-[714px] 2xl:mt-[803px] 3xl:mt-[964px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[571px] xl:mt-[714px] 2xl:mt-[803px] 3xl:mt-[964px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] lg:mt-[571px] xl:mt-[714px] 2xl:mt-[803px] 3xl:mt-[964px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] lg:mt-[571px] xl:mt-[714px] 2xl:mt-[803px] 3xl:mt-[964px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] lg:mt-[571px] xl:mt-[714px] 2xl:mt-[803px] 3xl:mt-[964px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] lg:mt-[571px] xl:mt-[714px] 2xl:mt-[803px] 3xl:mt-[964px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] lg:mt-[571px] xl:mt-[714px] 2xl:mt-[803px] 3xl:mt-[964px] w-[1px]"></div>
              <Row className="items-center 3xl:mt-[1043px] lg:mt-[617px] xl:mt-[773px] 2xl:mt-[869px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  9 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] 3xl:mt-[1050px] lg:mt-[622px] xl:mt-[778px] 2xl:mt-[875px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] 3xl:mt-[1050px] lg:mt-[622px] xl:mt-[778px] 2xl:mt-[875px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] 3xl:mt-[1050px] lg:mt-[622px] xl:mt-[778px] 2xl:mt-[875px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] 3xl:mt-[1050px] lg:mt-[622px] xl:mt-[778px] 2xl:mt-[875px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] 3xl:mt-[1050px] lg:mt-[622px] xl:mt-[778px] 2xl:mt-[875px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] 3xl:mt-[1050px] lg:mt-[622px] xl:mt-[778px] 2xl:mt-[875px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] 3xl:mt-[1050px] lg:mt-[622px] xl:mt-[778px] 2xl:mt-[875px] w-[1px]"></div>
              <Row className="items-center 3xl:mt-[1129px] lg:mt-[669px] xl:mt-[837px] 2xl:mt-[941px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  10 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] 3xl:mt-[1137px] lg:mt-[673px] xl:mt-[842px] 2xl:mt-[947px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] 3xl:mt-[1137px] lg:mt-[673px] xl:mt-[842px] 2xl:mt-[947px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] 3xl:mt-[1137px] lg:mt-[673px] xl:mt-[842px] 2xl:mt-[947px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] 3xl:mt-[1137px] lg:mt-[673px] xl:mt-[842px] 2xl:mt-[947px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] 3xl:mt-[1137px] lg:mt-[673px] xl:mt-[842px] 2xl:mt-[947px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] 3xl:mt-[1137px] lg:mt-[673px] xl:mt-[842px] 2xl:mt-[947px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] 3xl:mt-[1137px] lg:mt-[673px] xl:mt-[842px] 2xl:mt-[947px] w-[1px]"></div>
              <Row className="items-center 2xl:mt-[1013px] 3xl:mt-[1216px] lg:mt-[720px] xl:mt-[901px] w-[100%]">
                <Text
                  className="not-italic text-gray_600 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  11 pm
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]" />
              </Row>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] 2xl:mt-[1019px] 3xl:mt-[1223px] lg:mt-[724px] xl:mt-[906px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] 2xl:mt-[1019px] 3xl:mt-[1223px] lg:mt-[724px] xl:mt-[906px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[248px] xl:ml-[311px] 2xl:ml-[350px] 3xl:ml-[420px] 2xl:mt-[1019px] 3xl:mt-[1223px] lg:mt-[724px] xl:mt-[906px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[356px] xl:ml-[445px] 2xl:ml-[501px] 3xl:ml-[601px] 2xl:mt-[1019px] 3xl:mt-[1223px] lg:mt-[724px] xl:mt-[906px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[463px] xl:ml-[580px] 2xl:ml-[652px] 3xl:ml-[782px] 2xl:mt-[1019px] 3xl:mt-[1223px] lg:mt-[724px] xl:mt-[906px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[571px] xl:ml-[714px] 2xl:ml-[803px] 3xl:ml-[964px] 2xl:mt-[1019px] 3xl:mt-[1223px] lg:mt-[724px] xl:mt-[906px] w-[1px]"></div>
              <div className="bg-gray_200 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 3xl:ml-[1145px] lg:ml-[678px] xl:ml-[848px] 2xl:ml-[954px] 2xl:mt-[1019px] 3xl:mt-[1223px] lg:mt-[724px] xl:mt-[906px] w-[1px]"></div>
            </Column>
          </Row>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={5}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00] absolute"
            ref={sliderRef}
            className="absolute top-[0] w-[100%]"
            items={[...Array(15)].map(() => (
              <React.Fragment key={Math.random()}>
                <Column className="bg-white_A700 items-center justify-start w-[100%]">
                  <Column className="items-end justify-end lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[96%]">
                    <Row className="items-center justify-center lg:mr-[260px] xl:mr-[325px] 2xl:mr-[366px] 3xl:mr-[439px] w-[34%]">
                      <Button
                        className="flex items-center justify-center plus1"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbFillBluegray5001e"
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          className="flex items-center justify-center"
                          alt="arrowleft"
                        />
                      </Button>
                      <Text className="header4" as="h2" variant="h2">
                        Week of Aug. 14 - Aug. 20
                      </Text>
                      <Button
                        className="flex items-center justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] plus1"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbFillBluegray5001e"
                      >
                        <Img
                          src="images/img_arrowright_40X40.svg"
                          className="flex items-center justify-center"
                          alt="arrowright"
                        />
                      </Button>
                    </Row>
                    <Row className="items-start justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius8 w-[100%]">
                      <Text className="days" as="h5" variant="h5">
                        MST
                      </Text>
                      <List
                        className="gap-[1px] grid grid-cols-7 min-h-[auto] w-[96%]"
                        orientation="horizontal"
                      >
                        <Column className="listsun">
                          <Text className="InputOutline" as="h3" variant="h3">
                            Sun
                          </Text>
                          <Text className="Fourteen_One" as="h1" variant="h1">
                            14
                          </Text>
                        </Column>
                        <Column className="listsun">
                          <Text className="InputOutline" as="h3" variant="h3">
                            Mon
                          </Text>
                          <Text className="Fifteen_One" as="h1" variant="h1">
                            15
                          </Text>
                        </Column>
                        <Column className="listsun">
                          <Text className="InputOutline" as="h3" variant="h3">
                            Tue
                          </Text>
                          <Text className="Fourteen_One" as="h1" variant="h1">
                            16
                          </Text>
                        </Column>
                        <Column className="listsun">
                          <Text className="InputOutline" as="h3" variant="h3">
                            Wed
                          </Text>
                          <Text className="Fourteen_One" as="h1" variant="h1">
                            17
                          </Text>
                        </Column>
                        <Column className="listsun">
                          <Text className="InputOutline" as="h3" variant="h3">
                            Thu
                          </Text>
                          <Text className="Fourteen_One" as="h1" variant="h1">
                            18
                          </Text>
                        </Column>
                        <Column className="listsun">
                          <Text className="InputOutline" as="h3" variant="h3">
                            Fri
                          </Text>
                          <Text className="Fourteen_One" as="h1" variant="h1">
                            19
                          </Text>
                        </Column>
                        <Column className="listsun">
                          <Text className="InputOutline" as="h3" variant="h3">
                            Sat
                          </Text>
                          <Text className="Fourteen_One" as="h1" variant="h1">
                            20
                          </Text>
                        </Column>
                      </List>
                    </Row>
                    <List
                      className="gap-[1px] grid grid-cols-[repeat(6,_1fr_1px)_1fr] min-h-[auto] pl-[1px] rounded-radius8 w-[96%]"
                      orientation="horizontal"
                    >
                      <Column className="bottomdividers2">
                        <Row className="items-center p-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                          <Img
                            src="images/img_trash_10X10.svg"
                            className="bag"
                            alt="trash"
                          />
                          <Text
                            className="ml-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deployed, Available
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[1px] bg-gray_200 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]" />
                      <Column className="bottomdividers2">
                        <Row className="items-center p-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                          <Img
                            src="images/img_trash_10X10.svg"
                            className="bag"
                            alt="trash One"
                          />
                          <Text
                            className="ml-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deployed, Available
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[1px] bg-gray_200 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]" />
                      <Column className="bottomdividers2">
                        <Row className="items-center p-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                          <Img
                            src="images/img_trash_10X10.svg"
                            className="bag"
                            alt="trash Two"
                          />
                          <Text
                            className="ml-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deployed, Available
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[1px] bg-gray_200 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]" />
                      <Column className="bottomdividers2">
                        <Row className="items-center p-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                          <Img
                            src="images/img_trash_10X10.svg"
                            className="bag"
                            alt="trash Three"
                          />
                          <Text
                            className="ml-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deployed, Available
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[1px] bg-gray_200 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]" />
                      <Column className="bottomdividers2">
                        <Row className="items-center p-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                          <Img
                            src="images/img_trash_10X10.svg"
                            className="bag"
                            alt="trash Four"
                          />
                          <Text
                            className="ml-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deployed, Available
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[1px] bg-gray_200 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]" />
                      <Column className="bottomdividers2">
                        <Row className="items-center p-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                          <Img
                            src="images/img_trash_10X10.svg"
                            className="bag"
                            alt="trash Five"
                          />
                          <Text
                            className="ml-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deployed, Available
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[1px] bg-gray_200 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]" />
                      <Column className="bottomdividers2">
                        <Row className="items-center p-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
                          <Img
                            src="images/img_trash_10X10.svg"
                            className="bag"
                            alt="trash Six"
                          />
                          <Text
                            className="ml-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deployed, Available
                          </Text>
                        </Row>
                      </Column>
                    </List>
                  </Column>
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                </Column>
              </React.Fragment>
            ))}
          />
          <Img
            src="images/img_unavailableblo_1662X146.svg"
            className="unavailableblo"
            alt="unavailableblo"
          />
          <Img
            src="images/img_unavailableblo_1662X146.svg"
            className="unavailableblo_One"
            alt="unavailableblo One"
          />
          <Img
            src="images/img_unavailableblo_1662X146.svg"
            className="unavailableblo_Two"
            alt="unavailableblo Two"
          />
          <Img
            src="images/img_unavailableblo_1662X146.svg"
            className="unavailableblo_Three"
            alt="unavailableblo Three"
          />
          <Img
            src="images/img_unavailableblo_1662X146.svg"
            className="unavailableblo_Four"
            alt="unavailableblo Four"
          />
          <Img
            src="images/img_unavailableblo_1662X146.svg"
            className="unavailableblo_Five"
            alt="unavailableblo Five"
          />
          <Img
            src="images/img_unavailableblo_1662X146.svg"
            className="unavailableblo_Six"
            alt="unavailableblo Six"
          />
        </Stack>
      </Column>
    </>
  );
};

export default CalendarpopulateddeployedavailablespanOnePage;
