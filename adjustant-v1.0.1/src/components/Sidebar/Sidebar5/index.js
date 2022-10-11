import React from "react";

import { Column, Row, Text, Line, Img, Button } from "components";

const Sidebar5 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="items-center justify-start w-[100%]">
            <Row className="bg-white_A700 items-start justify-end lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pt-[11px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] shadow-bs w-[100%]">
              <Text
                className="font-bold font-metropolis mt-[3px] text-gray_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Open Jobs
              </Text>
              <Column className="items-center justify-start lg:ml-[47px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[52%]">
                <Row className="items-start justify-center w-[38%]">
                  <Text className="font-metropolis cancel" as="h3" variant="h3">
                    Past Jobs
                  </Text>
                  <div className="bg-red_800 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                </Row>
                <Line className="bg-bluegray_500 h-[4px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]" />
              </Column>
            </Row>
            <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[94%]">
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
                <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Button
                    className="font-medium font-metropolis xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[24%]"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="FillBluegray5001e"
                  >
                    Wind & Hail
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center w-[57%]"
                    rightIcon={
                      <Img
                        src="images/img_arrowright_14X14.svg"
                        className="ml-[2px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="arrow_right"
                      />
                    }
                    shape="RoundedBorder8"
                    size="sm"
                    variant="FillRed8001e"
                  >
                    <div className="bg-transparent font-medium font-metropolis xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                      Pending Performance Review
                    </div>
                  </Button>
                </Row>
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
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Text className="header6" as="h3" variant="h3">
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pt-[1px] w-[51%]">
                  <Row className="items-start justify-evenly w-[56%]">
                    <Img
                      src="images/img_location.svg"
                      className="calendar_Six"
                      alt="location Three"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Boulder, CO
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[37%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="calendar_Six"
                      alt="calendar Three"
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
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] rounded-radius8 w-[100%]">
                <Text className="header6" as="h3" variant="h3">
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="items-center mr-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pt-[1px] w-[51%]">
                  <Row className="items-start justify-evenly w-[56%]">
                    <Img
                      src="images/img_location.svg"
                      className="calendar_Six"
                      alt="location Four"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Boulder, CO
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[37%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="calendar_Six"
                      alt="calendar Four"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Sep. 12
                    </Text>
                  </Row>
                </Row>
                <Text
                  className="bg-bluegray_500_1e font-medium font-metropolis lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] py-[3px] rounded-radius8 text-bluegray_500 w-[49px]"
                  as="h4"
                  variant="h4"
                >
                  Flood
                </Text>
              </Column>
              <Row className="bg-bluegray_500 border border-solid border-white_A700_cc items-start justify-center lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                <Text className="buttoncontents5" as="h3" variant="h3">
                  Add New Job
                </Text>
                <Img
                  src="images/img_editaddplus.svg"
                  className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mr-[108px] 2xl:mr-[122px] 3xl:mr-[146px] lg:mr-[86px] mt-[1px] w-[4%]"
                  alt="EditAddPlus"
                />
              </Row>
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar5;
