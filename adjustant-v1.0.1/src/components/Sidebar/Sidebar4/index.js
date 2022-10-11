import React from "react";

import { Column, Row, Text, Line, Img, Button } from "components";

const Sidebar4 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="items-center justify-start w-[100%]">
            <Row className="bg-white_A700 items-end justify-evenly shadow-bs w-[100%]">
              <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[50%]">
                <Text className="toggleoption1" as="h3" variant="h3">
                  Open Jobs
                </Text>
                <Line className="bg-bluegray_500 h-[4px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
              </Column>
              <Row className="items-center justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[50%]">
                <Text className="toggleoption2" as="h3" variant="h3">
                  Past Jobs
                </Text>
                <div className="bg-red_800 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mr-[34px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
              </Row>
            </Row>
            <Column className="items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Text className="header6" as="h3" variant="h3">
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pt-[1px] w-[63%]">
                  <Row className="items-start justify-evenly w-[45%]">
                    <Img
                      src="images/img_location.svg"
                      className="calendar_Six"
                      alt="location"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Boulder, CO
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[49%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="calendar_Six"
                      alt="calendar"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Sep. 12, 2022
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-medium font-metropolis lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[24%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  Wind & Hail
                </Button>
              </Column>
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Text className="header6" as="h3" variant="h3">
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pt-[1px] w-[51%]">
                  <Row className="items-start justify-evenly w-[56%]">
                    <Img
                      src="images/img_location.svg"
                      className="calendar_Six"
                      alt="location One"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Boulder, CO
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[37%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="calendar_Six"
                      alt="calendar One"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Sep. 12
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-medium font-metropolis lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[11%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  Fire
                </Button>
              </Column>
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Text className="header6" as="h3" variant="h3">
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pt-[1px] w-[51%]">
                  <Row className="items-start justify-evenly w-[56%]">
                    <Img
                      src="images/img_location.svg"
                      className="calendar_Six"
                      alt="location Two"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Boulder, CO
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[37%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="calendar_Six"
                      alt="calendar Two"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Sep. 12
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-medium font-metropolis lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[14%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  Flood
                </Button>
              </Column>
              <Row className="bg-bluegray_500 border border-solid border-white_A700_cc items-center justify-center lg:mb-[140px] xl:mb-[176px] 2xl:mb-[198px] 3xl:mb-[237px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[100%]">
                <Text className="buttoncontents5" as="h3" variant="h3">
                  Add New Job
                </Text>
                <Img
                  src="images/img_plus_16X16.svg"
                  className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mr-[108px] 2xl:mr-[122px] 3xl:mr-[146px] lg:mr-[86px] trash"
                  alt="plus"
                />
              </Row>
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar4;
