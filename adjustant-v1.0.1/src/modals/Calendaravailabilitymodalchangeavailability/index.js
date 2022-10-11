import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line } from "components";
import { useNavigate } from "react-router-dom";

const CalendaravailabilitymodalchangeavailabilityModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate17() {
    navigate("/calendaravailabilitymodalchangetounavailable");
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
          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:p-[207px] xl:p-[259px] 2xl:p-[292px] 3xl:p-[350px] rounded-radius8 w-[100%]">
            <Column className="bg-white_A700 items-center justify-end lg:pt-[14px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] w-[71%]">
              <Row className="items-center justify-between w-[92%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Change Availability
                </Text>
                <Img src="images/img_plus.svg" className="plus1" alt="plus" />
              </Row>
              <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            </Column>
            <Column className="justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[71%]">
              <Text className="contents7" as="h3" variant="h3">
                Sunday, Aug. 14, 2022 is currently set to available. What would
                you like to do?{" "}
              </Text>
              <Row
                className="common-pointer items-center ml-[1px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[29%]"
                onClick={handleNavigate17}
              >
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Change to Unavailabe
                </Text>
                <Img
                  src="images/img_arrowright_12X12.svg"
                  className="arrowright4"
                  alt="arrowright"
                />
              </Row>
              <Row className="items-start ml-[1px] mr-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[20%]">
                <Text className="cancel" as="h3" variant="h3">
                  Cancel & Keep
                </Text>
                <Img
                  src="images/img_checkmark_16X16.svg"
                  className="checkmark"
                  alt="checkmark"
                />
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { CalendaravailabilitymodalchangeavailabilityModal };
