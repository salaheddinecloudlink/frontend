import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line } from "components";
import { useNavigate } from "react-router-dom";

const CalendaravailabilitymodalupdateavailabilityModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate15() {
    navigate("/calendaravailabilitymodalchangetoavailable");
  }
  function handleNavigate16() {
    navigate("/calendaravailabilitymodalextendavailabilityunselected");
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
          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:p-[192px] xl:p-[240px] 2xl:p-[270px] 3xl:p-[324px] rounded-radius8 w-[100%]">
            <Row className="bg-white_A700 items-center justify-center lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[68%]">
              <Text className="header5" as="h2" variant="h2">
                Update Availability
              </Text>
              <Img
                src="images/img_plus.svg"
                className="lg:ml-[245px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] mr-[3px] plus1"
                alt="plus"
              />
            </Row>
            <Line className="bg-gray_200 h-[1px] w-[68%]" />
            <Column className="justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[68%]">
              <Text className="contents7" as="h3" variant="h3">
                Sunday, Aug. 14, 2022 is currently set to unavailable. What
                would you like to do?{" "}
              </Text>
              <Row
                className="common-pointer items-center ml-[1px] mr-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[26%]"
                onClick={handleNavigate15}
              >
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Change to Availabe
                </Text>
                <Img
                  src="images/img_arrowright_12X12.svg"
                  className="arrowright4"
                  alt="arrowright"
                />
              </Row>
              <Row
                className="common-pointer items-center ml-[1px] mr-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[25%]"
                onClick={handleNavigate16}
              >
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Extend Availability
                </Text>
                <Img
                  src="images/img_arrowright_12X12.svg"
                  className="arrowright4"
                  alt="arrowright One"
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

export { CalendaravailabilitymodalupdateavailabilityModal };
