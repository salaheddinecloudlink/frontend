import React from "react";

import {
  Column,
  Stack,
  Img,
  Button,
  Text,
  Row,
  Line,
  List,
  Slider,
} from "components";
import Header3 from "components/Header/Header3";

const MainfeedviewadjusterdefaultPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
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
            <Column className="bg-white_A700 border border-gray_200 border-solid lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[33%]">
              <Text className="profilemain" as="h2" variant="h2">
                Queue
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-gray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                No other jobs accepted during:
              </Text>
              <Text
                className="lg:mb-[152px] xl:mb-[190px] 2xl:mb-[214px] 3xl:mb-[256px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rowmultipledeploy"
                as="h3"
                variant="h3"
              >
                Sep. 12, 2022 - Sep. 14, 2022
              </Text>
            </Column>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-center ml-[4px] lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[33%]">
              <Stack className="lg:h-[134px] xl:h-[168px] 2xl:h-[189px] 3xl:h-[226px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] lg:w-[133px] xl:w-[167px] 2xl:w-[188px] 3xl:w-[225px]">
                <div className="absolute lg:h-[123px] xl:h-[154px] 2xl:h-[173px] 3xl:h-[207px] inset-[0] justify-center m-[auto] outline outline-[8px] outline-teal_200_85 rotate-[90deg] rounded-radius50 lg:w-[122px] xl:w-[153px] 2xl:w-[172px] 3xl:w-[206px]"></div>
                <Column
                  className="absolute bg-cover bg-repeat h-[max-content] inset-[0] items-center justify-center m-[auto] lg:px-[19px] xl:px-[24px] 2xl:px-[28px] 3xl:px-[33px] lg:w-[122px] xl:w-[153px] 2xl:w-[172px] 3xl:w-[206px]"
                  style={{ backgroundImage: "url('images/img_completed.svg')" }}
                >
                  <Column className="items-center justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pt-[1px] px-[1px] w-[100%]">
                    <Text
                      className="font-normal text-gray_600 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      36
                    </Text>
                    <Row className="items-start justify-evenly lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[95%]">
                      <div className="bg-teal_200 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[1px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text className="InputOutline" as="h3" variant="h3">
                        Jobs Accepted
                      </Text>
                    </Row>
                  </Column>
                  <Line className="bg-gray_200 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[55%]" />
                  <Column className="items-center justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] pt-[3px] w-[100%]">
                    <Row className="items-start justify-evenly w-[100%]">
                      <div className="bg-bluegray_500 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[1px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text className="InputOutline" as="h3" variant="h3">
                        Jobs Completed
                      </Text>
                    </Row>
                    <Text className="profilemain" as="h2" variant="h2">
                      34
                    </Text>
                  </Column>
                </Column>
              </Stack>
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[35%]">
                <Line className="bg-bluegray_100 h-[1px] w-[91%]" />
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Text
                    className="font-normal text-bluegray_800 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    94%
                  </Text>
                  <Text
                    className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-bluegray_800 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Completion Rate
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-center ml-[3px] lg:p-[36px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] rounded-radius8 w-[33%]">
              <Img
                src="images/img_vectorstroke.svg"
                className="xl:h-[109px] 2xl:h-[123px] 3xl:h-[147px] lg:h-[87px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[36%]"
                alt="VectorStroke"
              />
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[32%]" />
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[39%]">
                <Text
                  className="font-normal text-bluegray_800 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  97%
                </Text>
                <Text
                  className="font-normal xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_800 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Positive Feedback
                </Text>
              </Column>
            </Column>
          </Row>
          <Row className="bg-white_A700 border border-gray_200 border-solid items-start mt-[4px] lg:p-[32px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] rounded-radius8 w-[89%]">
            <Column className="justify-start ml-[1px] w-[50%]">
              <Text
                className="font-normal text-gray_600 w-[auto]"
                as="h2"
                variant="h2"
              >
                Licenses & Certifications
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[53%]"
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
            <Column className="justify-start mb-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[50%]">
              <Row className="items-center 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[48%]">
                <Column className="items-center w-[38%]">
                  <Text
                    className="font-normal text-bluegray_500 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    LICENSES MAP
                  </Text>
                  <Line className="bg-bluegray_500 h-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]" />
                </Column>
                <Text className="navigation" as="h3" variant="h3">
                  CERTIFICATIONS MAP
                </Text>
              </Row>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Row
                className="bg-cover bg-gray_50 bg-repeat items-center lg:p-[55px] xl:p-[69px] 2xl:p-[78px] 3xl:p-[93px] w-[100%]"
                style={{ backgroundImage: "url('images/img_map.png')" }}
              >
                <Img
                  src="images/img_computer.svg"
                  className="computer"
                  alt="computer"
                />
                <Stack className="lg:h-[114px] xl:h-[142px] 2xl:h-[160px] 3xl:h-[191px] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[4px] w-[18%]">
                  <Stack className="absolute 2xl:h-[100px] 3xl:h-[119px] lg:h-[71px] xl:h-[89px] top-[0] w-[100%]">
                    <Img
                      src="images/img_folder.svg"
                      className="folder"
                      alt="folder"
                    />
                    <Img
                      src="images/img_folder_50X65.svg"
                      className="folder_One"
                      alt="folder One"
                    />
                  </Stack>
                  <Img
                    src="images/img_megaphone.svg"
                    className="megaphone"
                    alt="megaphone"
                  />
                </Stack>
              </Row>
            </Column>
          </Row>
          <Slider
            slidesToShow={2}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mt-[4px] w-[89%]"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <Column className="bg-white_A700 border border-gray_200 border-solid justify-start lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8">
                  <Text
                    className="font-normal text-gray_600 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Availaiblity
                  </Text>
                  <Row className="bg-white_A700 items-center justify-between mt-[3px] lg:py-[34px] xl:py-[42px] 2xl:py-[48px] 3xl:py-[57px] w-[100%]">
                    <Button
                      className="cursor-pointer flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      onClick={() => sliderRef.current?.slidePrev()}
                      shape="icbRoundedBorder8"
                      size="mdIcn"
                      variant="icbFillBluegray5001e"
                    >
                      <Img
                        src="images/img_arrowleft.svg"
                        className="flex items-center justify-center"
                        alt="arrowleft"
                      />
                    </Button>
                    <Column className="items-center mt-[1px] w-[61%]">
                      <Text
                        className="font-normal text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        August 2022
                      </Text>
                      <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <Row className="items-center justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                          <Text className="S" as="h3" variant="h3">
                            S
                          </Text>
                          <Text className="M" as="h3" variant="h3">
                            M
                          </Text>
                          <Text className="M" as="h3" variant="h3">
                            T
                          </Text>
                          <Text className="W" as="h3" variant="h3">
                            W
                          </Text>
                          <Text className="M" as="h3" variant="h3">
                            T
                          </Text>
                          <Text className="M" as="h3" variant="h3">
                            F
                          </Text>
                          <Text className="S_One" as="h3" variant="h3">
                            S
                          </Text>
                        </Row>
                        <Row className="items-center justify-evenly p-[4px] w-[100%]">
                          <Row className="items-start justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[55%]">
                            <Text className="One" as="h3" variant="h3">
                              1
                            </Text>
                            <Text className="Two" as="h3" variant="h3">
                              2
                            </Text>
                            <Text className="Three" as="h3" variant="h3">
                              3
                            </Text>
                          </Row>
                          <Row className="bg-gray_50 border border-bluegray_100 border-solid items-start justify-between xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[41%]">
                            <Text className="Four7" as="h3" variant="h3">
                              4
                            </Text>
                            <Text className="Five" as="h3" variant="h3">
                              5
                            </Text>
                            <Text className="Six" as="h3" variant="h3">
                              6
                            </Text>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly p-[4px] w-[100%]">
                          <Row className="items-start justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[27%]">
                            <Text className="Seven3" as="h3" variant="h3">
                              7
                            </Text>
                            <Text className="Eight" as="h3" variant="h3">
                              8
                            </Text>
                          </Row>
                          <Column
                            className="bg-cover bg-repeat items-center rounded-radius8 w-[55%]"
                            style={{
                              backgroundImage:
                                "url('images/img_deployedavaila.svg')",
                            }}
                          >
                            <Row className="bg-bluegray_500_1e border border-solid border-teal_100 items-start justify-between xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[100%]">
                              <Text className="Nine" as="h3" variant="h3">
                                9
                              </Text>
                              <Text className="Five" as="h3" variant="h3">
                                10
                              </Text>
                              <Text className="Five" as="h3" variant="h3">
                                11
                              </Text>
                              <Text className="Twelve" as="h3" variant="h3">
                                12
                              </Text>
                            </Row>
                          </Column>
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius8 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage:
                                "url('images/img_deployedunavai.svg')",
                            }}
                          >
                            <Button
                              className="font-medium lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                              shape="RoundedBorder8"
                              size="md"
                              variant="OutlineBluegray100"
                            >
                              13
                            </Button>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly p-[4px] w-[100%]">
                          <Column
                            className="bg-cover bg-repeat items-center rounded-radius8 w-[41%]"
                            style={{
                              backgroundImage:
                                "url('images/img_deployedunavai_40X128.svg')",
                            }}
                          >
                            <Row className="bg-black_900_0a border border-bluegray_100 border-solid items-start justify-between xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[100%]">
                              <Text
                                className="ml-[1px] Eighteen"
                                as="h3"
                                variant="h3"
                              >
                                14
                              </Text>
                              <Text className="Five" as="h3" variant="h3">
                                15
                              </Text>
                              <Text className="Twelve" as="h3" variant="h3">
                                16
                              </Text>
                            </Row>
                          </Column>
                          <Row className="items-start justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[55%]">
                            <Text className="TwentyOne" as="h3" variant="h3">
                              17
                            </Text>
                            <Text className="Eighteen" as="h3" variant="h3">
                              18
                            </Text>
                            <Text className="Eighteen" as="h3" variant="h3">
                              19
                            </Text>
                            <Text className="Twenty" as="h3" variant="h3">
                              20
                            </Text>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly p-[4px] w-[100%]">
                          <Row className="items-start justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[69%]">
                            <Text className="TwentyOne" as="h3" variant="h3">
                              21
                            </Text>
                            <Text className="Eighteen" as="h3" variant="h3">
                              22
                            </Text>
                            <Text className="Five" as="h3" variant="h3">
                              23
                            </Text>
                            <Text className="Eighteen" as="h3" variant="h3">
                              24
                            </Text>
                            <Text className="TwentyFive" as="h3" variant="h3">
                              25
                            </Text>
                          </Row>
                          <Row className="bg-black_900_0a border border-bluegray_100 border-solid items-start justify-between xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[27%]">
                            <Text className="Fourteen" as="h3" variant="h3">
                              26
                            </Text>
                            <Text className="Twelve" as="h3" variant="h3">
                              27
                            </Text>
                          </Row>
                        </Row>
                        <Row className="items-center justify-evenly p-[4px] w-[100%]">
                          <Button
                            className="font-medium lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            shape="RoundedBorder8"
                            size="md"
                            variant="OutlineBluegray100"
                          >
                            28
                          </Button>
                          <Row className="items-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[83%]">
                            <Text className="Five" as="h3" variant="h3">
                              29
                            </Text>
                            <Text className="Thirty" as="h3" variant="h3">
                              30
                            </Text>
                            <Text className="ThirtyOne" as="h3" variant="h3">
                              31
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                    <Button
                      className="cursor-pointer flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      onClick={() => sliderRef.current?.slideNext()}
                      shape="icbRoundedBorder8"
                      size="mdIcn"
                      variant="icbFillBluegray5001e"
                    >
                      <Img
                        src="images/img_arrowright_40X40.svg"
                        className="flex items-center justify-center"
                        alt="arrowright"
                      />
                    </Button>
                  </Row>
                  <Row className="items-center justify-between rounded-radius6 w-[100%]">
                    <Row className="items-center w-[18%]">
                      <div className="bg-black_900_0a border border-bluegray_100 border-solid xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius4 w-[33%]"></div>
                      <Text className="inactive" as="h5" variant="h5">
                        Unavailable
                      </Text>
                    </Row>
                    <List
                      className="lg:gap-[52px] xl:gap-[65px] 2xl:gap-[74px] 3xl:gap-[88px] grid grid-cols-2 min-h-[auto] w-[67%]"
                      orientation="horizontal"
                    >
                      <Row className="items-center w-[100%]">
                        <Stack className="bg-black_900_14 border border-bluegray_100 border-solid xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius4 w-[22%]">
                          <Img
                            src="images/img_vector1_12X32.svg"
                            className="VectorOne"
                            alt="VectorOne"
                          />
                        </Stack>
                        <Text className="inactive" as="h5" variant="h5">
                          Deployed, Unavailable
                        </Text>
                      </Row>
                      <Row className="items-center w-[100%]">
                        <Stack className="bg-bluegray_500_1e border border-solid border-teal_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius4 w-[24%]">
                          <Img
                            src="images/img_vector1_1.svg"
                            className="VectorOne"
                            alt="VectorOne One"
                          />
                        </Stack>
                        <Text className="inactive" as="h5" variant="h5">
                          Deployed, Available
                        </Text>
                      </Row>
                    </List>
                  </Row>
                </Column>
              </React.Fragment>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return <div className="" />;
              }
              return <div className="" role="button" tabIndex={0} />;
            }}
          />
        </Column>
      </Column>
    </>
  );
};

export default MainfeedviewadjusterdefaultPage;
