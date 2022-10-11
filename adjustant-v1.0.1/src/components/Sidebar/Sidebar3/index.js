import React from "react";

import { Column, Row, Text, Button, Img } from "components";

const Sidebar3 = (props) => {
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
                className="2xl:ml-[12px] 3xl:ml-[14px] flex items-center justify-center lg:ml-[8px] my-[4px] text-center w-[29%] xl:ml-[10px]"
                rightIcon={
                  <Img
                    src="images/img_plus.svg"
                    className="ml-[4px] text-center lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    alt="plus"
                  />
                }
                shape="RoundedBorder8"
                size="sm"
                variant="FillBluegray5001e"
              >
                <div className="bg-transparent font-medium font-metropolis xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_500">
                  Wind & Hail
                </div>
              </Button>
            </Row>
            <Column className="items-center justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
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
                <Button
                  className="font-medium font-metropolis lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_500 text-center w-[24%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBluegray5001e"
                >
                  Wind & Hail
                </Button>
              </Column>
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar3;
