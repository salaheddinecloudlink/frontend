import React from "react";

import { Column, Text, Row, Button, Img, List, Stack, Input } from "components";
import Header4 from "components/Header/Header4";

const AdvancedsearchouterdefaultPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header4 className="w-[100%]" />
        <Column className="items-center justify-end lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] w-[100%]">
          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius8 w-[46%]">
            <Column className="justify-start pb-[3px] pr-[3px] w-[100%]">
              <Text
                className="font-normal text-gray_600 w-[auto]"
                as="h2"
                variant="h2"
              >
                Availability
              </Text>
              <Text
                className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] contents"
                as="h3"
                variant="h3"
              >
                To search for adjusters available for the dates needed, select
                the start date for this job, then select the end date.{" "}
              </Text>
            </Column>
            <Row className="bg-white_A700 items-start justify-between lg:pt-[34px] xl:pt-[43px] 2xl:pt-[49px] 3xl:pt-[58px] w-[100%]">
              <Button
                className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:mt-[115px] 2xl:mt-[130px] 3xl:mt-[156px] lg:mt-[92px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
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
              <Column className="items-center justify-start w-[57%]">
                <Text
                  className="font-normal text-gray_600 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  August 2022
                </Text>
                <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] lg:pt-[34px] xl:pt-[42px] 2xl:pt-[48px] 3xl:pt-[57px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listone">
                      <Text className="Five" as="h3" variant="h3">
                        1
                      </Text>
                      <Text className="Two" as="h3" variant="h3">
                        2
                      </Text>
                      <Text className="Three3" as="h3" variant="h3">
                        3
                      </Text>
                      <Text className="Four3" as="h3" variant="h3">
                        4
                      </Text>
                      <Text className="Four3" as="h3" variant="h3">
                        5
                      </Text>
                      <Text className="Six4" as="h3" variant="h3">
                        6
                      </Text>
                    </Row>
                    <Row className="items-center justify-between my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
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
                    <Row className="items-center justify-between my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                      <Text className="Seven" as="h3" variant="h3">
                        7
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
                        8
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
                        9
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
                        10
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
                        11
                      </Text>
                      <Text className="Eighteen" as="h3" variant="h3">
                        12
                      </Text>
                      <Text className="Thirteen" as="h3" variant="h3">
                        13
                      </Text>
                    </Row>
                    <Row className="items-center justify-between my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                      <Text className="TwentyOne" as="h3" variant="h3">
                        14
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
                        15
                      </Text>
                      <Text className="Eighteen" as="h3" variant="h3">
                        16
                      </Text>
                      <Text className="Eighteen" as="h3" variant="h3">
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
                    <Row className="items-center justify-between my-[0] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
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
                      <Text className="Five" as="h3" variant="h3">
                        25
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
                        26
                      </Text>
                      <Text className="Six" as="h3" variant="h3">
                        27
                      </Text>
                    </Row>
                  </List>
                  <Row className="items-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                    <Text className="TwentyEight" as="h3" variant="h3">
                      28
                    </Text>
                    <Text className="TwentyNine" as="h3" variant="h3">
                      29
                    </Text>
                    <Text className="Thirty4" as="h3" variant="h3">
                      30
                    </Text>
                    <Text className="ThirtyOne1" as="h3" variant="h3">
                      31
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Button
                className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:mt-[115px] 2xl:mt-[130px] 3xl:mt-[156px] lg:mt-[92px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
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
          </Column>
          <Stack className="lg:h-[127px] xl:h-[159px] 2xl:h-[179px] 3xl:h-[214px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
            <Column className="absolute bg-white_A700 border border-gray_200 border-solid inset-x-[27%] justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius8 w-[46%]">
              <Column className="justify-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[38%]">
                <Text
                  className="font-normal text-gray_600 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Location
                </Text>
                <Text className="XactimateLevel" as="h3" variant="h3">
                  Search for adjusters in specific areas.
                </Text>
              </Column>
              <Input
                className="placeholder:text-gray_500 email_One"
                wrapClassName="2xl:ml-[26px] 2xl:mt-[24px] 3xl:ml-[31px] 3xl:mt-[28px] lg:ml-[18px] lg:mt-[17px] w-[92%] xl:ml-[23px] xl:mt-[21px]"
                name="inputarea"
                placeholder="Where would you like to search?"
              ></Input>
            </Column>
            <Column className="absolute bg-white_A700 bottom-[0] items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
              <Column className="bg-white_A700 items-center justify-start w-[8%]">
                <Button
                  className="flex items-center justify-center text-center w-[100%]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[5px] xl:w-[14px] xl:h-[15px] xl:ml-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[9px]"
                      alt="arrow_right"
                    />
                  }
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBluegray500"
                >
                  <div className="bg-transparent font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                    Search
                  </div>
                </Button>
              </Column>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default AdvancedsearchouterdefaultPage;
