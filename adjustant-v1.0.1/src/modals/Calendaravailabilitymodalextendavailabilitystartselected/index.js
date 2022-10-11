import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const CalendaravailabilitymodalextendavailabilitystartselectedModal = (
  props
) => {
  const navigate = useNavigate();

  function handleNavigate19() {
    navigate("/calendaravailabilitymodalextendavailabilityendselected");
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_a3 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start 3xl:p-[118px] lg:p-[70px] xl:p-[88px] 2xl:p-[99px] rounded-radius8 w-[100%]">
            <Column className="bg-white_A700 items-center justify-end lg:pt-[14px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] w-[49%]">
              <Row className="items-center justify-between w-[92%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Extend Availability
                </Text>
                <Img src="images/img_plus.svg" className="plus1" alt="plus" />
              </Row>
              <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            </Column>
            <Column className="justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[49%]">
              <Text className="DenverCO" as="h3" variant="h3">
                Sunday, Aug. 14, 2022 is currently set to unavailable. Would you
                like to change to be available?
              </Text>
              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[100%]">
                <Button
                  className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
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
                <Column className="items-center w-[57%]">
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
                      <Row className="bg-gray_200 items-start justify-between xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[41%]">
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
                      <Row className="bg-gray_200 items-start justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[55%]">
                        <Text className="Nine" as="h3" variant="h3">
                          9
                        </Text>
                        <Text className="Ten" as="h3" variant="h3">
                          10
                        </Text>
                        <Text className="Eleven" as="h3" variant="h3">
                          11
                        </Text>
                        <Text className="Twelve1" as="h3" variant="h3">
                          12
                        </Text>
                      </Row>
                      <Button
                        className="font-medium lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillGray200"
                      >
                        13
                      </Button>
                    </Row>
                    <Row className="items-center justify-evenly p-[4px] w-[100%]">
                      <Row className="items-center justify-between rounded-radius8 w-[41%]">
                        <Button
                          className="font-medium lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillBluegray500"
                        >
                          14
                        </Button>
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          15
                        </Text>
                        <Column
                          className="common-pointer lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius8 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          onClick={handleNavigate19}
                        >
                          <Text className="Eighteen" as="h3" variant="h3">
                            16
                          </Text>
                        </Column>
                      </Row>
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
                      <Row className="bg-gray_200 items-start justify-between xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[27%]">
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
                        variant="FillGray200"
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
                  className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
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
              <Line className="bg-gray_200 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
              <Row className="bg-white_A700 items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:pl-[111px] 2xl:pl-[125px] 3xl:pl-[150px] lg:pl-[88px] w-[100%]">
                <Row className="items-center justify-center w-[44%]">
                  <Text
                    className="font-bold text-bluegray_500 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Cancel & Discard Changes
                  </Text>
                  <Img
                    src="images/img_plus.svg"
                    className="plus_One"
                    alt="plus One"
                  />
                </Row>
                <Line className="bg-gray_200 lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[1px]" />
                <Button
                  className="2xl:ml-[24px] 3xl:ml-[28px] flex items-center justify-center lg:ml-[17px] text-center w-[44%] xl:ml-[21px]"
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
                    Update Availability
                  </div>
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { CalendaravailabilitymodalextendavailabilitystartselectedModal };
