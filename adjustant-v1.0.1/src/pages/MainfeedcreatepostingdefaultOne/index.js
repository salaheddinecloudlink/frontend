import React from "react";

import { Column, Text, Row, Button, Img, List } from "components";
import Header3 from "components/Header/Header3";

const MainfeedcreatepostingdefaultOnePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="items-center justify-end lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] w-[100%]">
          <Column className="bg-white_A700 border border-gray_200 border-solid justify-start lg:p-[32px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] rounded-radius8 w-[47%]">
            <Column className="justify-start ml-[1px] w-[87%]">
              <Text
                className="font-normal text-gray_600 w-[auto]"
                as="h2"
                variant="h2"
              >
                Dates & Duration
              </Text>
              <Text
                className="font-normal leading-[120.00%] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-gray_900 w-[100%]"
                as="h3"
                variant="h3"
              >
                Select the start date for this job, then select the end date.
                The duration will be automatically determined based on
                selection.
              </Text>
            </Column>
            <Row className="bg-white_A700 items-start justify-between mb-[1px] ml-[1px] lg:pt-[34px] xl:pt-[43px] 2xl:pt-[49px] 3xl:pt-[58px] w-[99%]">
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
                      <Text className="Seventeen" as="h3" variant="h3">
                        14
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
                        15
                      </Text>
                      <Text className="Eighteen" as="h3" variant="h3">
                        16
                      </Text>
                      <Text className="Five" as="h3" variant="h3">
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
          <Column className="bg-white_A700 border border-gray_200 border-solid justify-end 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pt-[32px] xl:pt-[40px] 2xl:pt-[46px] 3xl:pt-[55px] lg:px-[32px] xl:px-[40px] 2xl:px-[46px] 3xl:px-[55px] rounded-radius8 w-[47%]">
            <Text
              className="font-normal ml-[1px] text-gray_600 w-[auto]"
              as="h2"
              variant="h2"
            >
              Location
            </Text>
            <Text
              className="ml-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rowmultipledeploy"
              as="h3"
              variant="h3"
            >
              Start typing and select the city/town where the job is taking
              place.
            </Text>
          </Column>
        </Column>
        <Row className="bg-white_A700 items-center justify-between lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
          <aside className="w-[16%]">
            <div className="">
              <Text className="rowmultipledeploy" as="h2" variant="h2">
                Everything look good?
              </Text>
            </div>
          </aside>
          <Column className="bg-white_A700 items-center w-[9%]">
            <Button
              className="flex items-center justify-center text-center w-[100%]"
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
                Post Now
              </div>
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MainfeedcreatepostingdefaultOnePage;
