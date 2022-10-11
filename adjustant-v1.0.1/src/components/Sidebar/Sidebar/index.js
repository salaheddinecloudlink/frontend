import React from "react";

import { Column, Row, Text, Button, Img, Stack } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] shadow-bs w-[100%]">
              <Text className="sort" as="h3" variant="h3">
                Filter by Type:
              </Text>
              <Button
                className="font-medium font-metropolis xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[4px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_500 text-center w-[24%]"
                shape="RoundedBorder8"
                size="sm"
                variant="FillBluegray5001e"
              >
                Wind & Hail
              </Button>
              <Button
                className="font-medium font-metropolis xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[4px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_500 text-center w-[10%]"
                shape="RoundedBorder8"
                size="sm"
                variant="FillBluegray5001e"
              >
                Fire
              </Button>
              <Button
                className="font-medium font-metropolis xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[4px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_500 text-center w-[14%]"
                shape="RoundedBorder8"
                size="sm"
                variant="FillBluegray5001e"
              >
                Flood
              </Button>
            </Row>
            <Column className="items-center justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="header6" as="h3" variant="h3">
                    Pilot - Catastrophe Response
                  </Text>
                  <Button
                    className="flex items-center justify-center text-center w-[27%]"
                    rightIcon={
                      <Img
                        src="images/img_checkmark_14X14.svg"
                        className="ml-[4px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                    size="sm"
                    variant="FillRed80019"
                  >
                    <div className="bg-transparent font-medium font-metropolis xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                      Filling Fast
                    </div>
                  </Button>
                </Row>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pt-[1px] w-[58%]">
                  <Row className="items-start justify-evenly w-[41%]">
                    <Img
                      src="images/img_location.svg"
                      className="calendar_Six"
                      alt="location"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Miami, FL
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[53%]">
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
                  className="font-medium font-metropolis lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[24%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  Wind & Hail
                </Button>
              </Column>
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Text className="mt-[2px] header6" as="h3" variant="h3">
                  Pilot - Catastrophe Response
                </Text>
                <Row className="items-center mr-[auto] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] pt-[1px] w-[63%]">
                  <Row className="items-start justify-evenly w-[45%]">
                    <Img
                      src="images/img_location.svg"
                      className="calendar_Six"
                      alt="location One"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Boulder, CO
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[49%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="calendar_Six"
                      alt="calendar One"
                    />
                    <Text className="location" as="h3" variant="h3">
                      Sep. 12, 2022
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-medium font-metropolis lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[24%]"
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
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Text className="header6" as="h3" variant="h3">
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pt-[1px] w-[51%]">
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
                <Stack className="bg-bluegray_500_1e xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius6 w-[10%]">
                  <div className="absolute bg-bluegray_500_1e bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] rounded-radius575 w-[100%]"></div>
                  <Text className="absolute navlinks1" as="h4" variant="h4">
                    Flood
                  </Text>
                </Stack>
              </Column>
              <Column className="bg-white_A700 border border-gray_200 border-solid justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Text className="header6" as="h3" variant="h3">
                  36 Adjusters Needed ASAP
                </Text>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[51%]">
                  <Row className="items-center justify-evenly w-[56%]">
                    <Img
                      src="images/img_location.svg"
                      className="trash"
                      alt="location Five"
                    />
                    <Text className="confirmation" as="h3" variant="h3">
                      Boulder, CO
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[37%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="trash"
                      alt="calendar Five"
                    />
                    <Text className="confirmation" as="h3" variant="h3">
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
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
