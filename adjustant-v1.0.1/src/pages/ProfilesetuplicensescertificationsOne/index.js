import React from "react";

import { Column, Text, Row, Line, SelectBox, Img, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const ProfilesetuplicensescertificationsOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/profilesetupintroone");
  }
  function handleNavigate21() {
    navigate("/profilesetuppreferencesone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-end lg:p-[105px] xl:p-[131px] 2xl:p-[148px] 3xl:p-[177px] rounded-radius8 w-[100%]">
          <Column className="items-center justify-start mt-[1px] w-[49%]">
            <Text
              className="font-normal text-gray_600 w-[auto]"
              as="h1"
              variant="h1"
            >
              Licenses & Certifications
            </Text>
            <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Line className="bg-bluegray_100 2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] w-[4px]" />
                <Column className="w-[97%]">
                  <Column className="justify-start w-[100%]">
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
                  <Button
                    className="2xl:mt-[12px] 3xl:mt-[14px] flex items-center justify-center lg:mt-[8px] text-center w-[28%] xl:mt-[10px]"
                    rightIcon={
                      <Img
                        src="images/img_file.svg"
                        className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[5px] xl:w-[14px] xl:h-[15px] xl:ml-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[9px]"
                        alt="file"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBluegray500"
                  >
                    <div className="bg-transparent font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Upload PDF
                    </div>
                  </Button>
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
          <Row className="items-center justify-center lg:mt-[134px] xl:mt-[168px] 2xl:mt-[189px] 3xl:mt-[226px] w-[49%]">
            <Row
              className="common-pointer border border-bluegray_400 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]"
              onClick={handleNavigate20}
            >
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft"
                alt="arrowleft"
              />
              <Text className="buttoncontents2" as="h3" variant="h3">
                Back
              </Text>
            </Row>
            <Row
              className="common-pointer bg-bluegray_500 items-center justify-center lg:ml-[260px] xl:ml-[326px] 2xl:ml-[367px] 3xl:ml-[440px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[17%]"
              onClick={handleNavigate21}
            >
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

export default ProfilesetuplicensescertificationsOnePage;
