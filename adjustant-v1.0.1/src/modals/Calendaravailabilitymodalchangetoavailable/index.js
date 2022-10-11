import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, Button } from "components";

const CalendaravailabilitymodalchangetoavailableModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_a3 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:p-[198px] xl:p-[248px] 2xl:p-[279px] 3xl:p-[334px] rounded-radius8 w-[100%]">
            <Column className="bg-white_A700 items-center justify-end lg:pt-[14px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] w-[69%]">
              <Row className="items-center justify-between w-[92%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Change to Available
                </Text>
                <Img src="images/img_plus.svg" className="plus1" alt="plus" />
              </Row>
              <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            </Column>
            <Column className="items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[69%]">
              <Text className="DenverCO" as="h3" variant="h3">
                Sunday, Aug. 14, 2022 is currently set to unavailable. Would you
                like to change it to be available?
              </Text>
              <Line className="bg-gray_200 h-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]" />
              <Row className="bg-white_A700 items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:pl-[104px] 2xl:pl-[118px] 3xl:pl-[141px] lg:pl-[83px] w-[100%]">
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
                  className="2xl:ml-[24px] 3xl:ml-[28px] flex items-center justify-center lg:ml-[17px] text-center w-[45%] xl:ml-[21px]"
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
                    Change to Available
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

export { CalendaravailabilitymodalchangetoavailableModal };
