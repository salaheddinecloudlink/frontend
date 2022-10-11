import React from "react";

import { Column, Text, Row, Line, SelectBox, Img } from "components";
import Header from "components/Header/Header";

const Profilesetuplicensescertifications1Page = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-end lg:p-[105px] xl:p-[131px] 2xl:p-[148px] 3xl:p-[177px] rounded-radius8 w-[100%]">
          <Column className="items-center justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[49%]">
            <Text className="wrapper4" as="h1" variant="h1">
              Licensing & Certification Requirements
            </Text>
            <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Line className="bg-bluegray_100 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] w-[4px]" />
                <Column className="w-[97%]">
                  <Text className="InputOutline" as="h3" variant="h3">
                    License/Certification Name
                  </Text>
                  <SelectBox
                    className="font-normal lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_500 w-[100%]"
                    placeholderClassName="text-gray_500"
                    name="inputarea"
                    placeholder="What is the name of the license or certification needed?"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </Column>
              </Row>
              <Row className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[39%]">
                <Img src="images/img_plus.svg" className="plus" alt="plus" />
                <Text className="addwrapper" as="h3" variant="h3">
                  <span className="text-bluegray_500 font-metropolis lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                    Add New License/
                  </span>
                  <span className="text-bluegray_500 font-metropolis lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                    Certification
                  </span>
                </Text>
              </Row>
            </Column>
          </Column>
          <Row className="items-center justify-center lg:mt-[141px] xl:mt-[177px] 2xl:mt-[199px] 3xl:mt-[238px] w-[49%]">
            <Row className="border border-bluegray_400 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]">
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft"
                alt="arrowleft"
              />
              <Text className="buttoncontents2" as="h3" variant="h3">
                Back
              </Text>
            </Row>
            <Row className="bg-bluegray_500 items-center justify-center lg:ml-[260px] xl:ml-[326px] 2xl:ml-[367px] 3xl:ml-[440px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]">
              <Text className="buttoncontents1" as="h3" variant="h3">
                Next
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="arrowright1"
                alt="arrowright"
              />
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Profilesetuplicensescertifications1Page;
