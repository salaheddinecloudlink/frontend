import React from "react";

import {
  Column,
  Stack,
  Button,
  Img,
  Text,
  Row,
  List,
  Line,
  Slider,
} from "components";
import Header from "components/Header/Header";

const ProfilepostsetupdefaultTwoPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
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
              <Row className="items-start lg:pr-[14px] xl:pr-[17px] 2xl:pr-[20px] 3xl:pr-[24px] lg:pt-[14px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] rounded-radius8 w-[100%]">
                <Row className="items-center justify-between w-[13%]">
                  <div className="bg-bluegray_500 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius4 w-[43%]"></div>
                  <Text
                    className="not-italic text-gray_600 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Active
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] w-[14%]">
                  <div className="bg-bluegray_101 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius4 w-[41%]"></div>
                  <Text className="inactive" as="h5" variant="h5">
                    Inactive
                  </Text>
                </Row>
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
                            <Text
                              className="ml-[3px] Five"
                              as="h3"
                              variant="h3"
                            >
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
                            <Text className="Seven" as="h3" variant="h3">
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
                              <Text className="Fourteen" as="h3" variant="h3">
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
                            <Text className="Seventeen" as="h3" variant="h3">
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

export default ProfilepostsetupdefaultTwoPage;
