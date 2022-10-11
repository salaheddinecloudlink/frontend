import React from "react";

import { Column, Text, Row, Img, Stack } from "components";
import Header3 from "components/Header/Header3";

const ProfilesetupmapPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-metropolis items-center justify-start mx-[auto] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start 3xl:p-[112px] lg:p-[66px] xl:p-[83px] 2xl:p-[94px] rounded-radius8 w-[100%]">
          <Column className="items-center justify-start pt-[3px] px-[3px] w-[45%]">
            <Text
              className="font-normal text-gray_600 w-[auto]"
              as="h1"
              variant="h1"
            >
              Areas of Operation
            </Text>
            <Text
              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rowmultipledeploy"
              as="h3"
              variant="h3"
            >
              Please select the states your firm operates within.
            </Text>
          </Column>
          <Row
            className="bg-cover bg-gray_50 bg-repeat items-center lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:p-[55px] xl:p-[69px] 2xl:p-[78px] 3xl:p-[93px] w-[46%]"
            style={{ backgroundImage: "url('images/img_map.png')" }}
          >
            <Img
              src="images/img_computer.svg"
              className="computer"
              alt="computer"
            />
            <Stack className="lg:h-[114px] xl:h-[142px] 2xl:h-[160px] 3xl:h-[191px] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[4px] w-[18%]">
              <Stack className="absolute 2xl:h-[100px] 3xl:h-[119px] lg:h-[71px] xl:h-[89px] top-[0] w-[100%]">
                <Img
                  src="images/img_folder.svg"
                  className="folder"
                  alt="folder"
                />
                <Img
                  src="images/img_folder_50X65.svg"
                  className="folder_One"
                  alt="folder One"
                />
              </Stack>
              <Img
                src="images/img_megaphone.svg"
                className="megaphone"
                alt="megaphone"
              />
            </Stack>
          </Row>
          <Row className="items-center justify-center lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[45%]">
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

export default ProfilesetupmapPage;
