import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, Button } from "components";

const ProfilesetupphotomodalOneModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_a3 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:p-[113px] xl:p-[141px] 2xl:p-[159px] 3xl:p-[190px] rounded-radius8 w-[100%]">
            <Column className="bg-white_A700 items-center justify-end lg:pt-[14px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] w-[35%]">
              <Row className="items-center justify-between w-[88%]">
                <Text
                  className="font-medium text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Crop & Upload
                </Text>
                <Img src="images/img_plus.svg" className="plus1" alt="plus" />
              </Row>
              <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            </Column>
            <Column className="items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[35%]">
              <Column className="items-center justify-start w-[67%]">
                <Column
                  className="bg-cover bg-repeat lg:h-[167px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] items-center justify-start w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_photocropprev.png')",
                  }}
                >
                  <div className="bg-black_900_a3 lg:h-[167px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[281px] lg:w-[166px] xl:w-[208px] 2xl:w-[234px] 3xl:w-[280px]"></div>
                </Column>
                <Img
                  src="images/img_slider.svg"
                  className="slider"
                  alt="slider"
                />
              </Column>
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Line className="bg-gray_200 h-[1px] w-[100%]" />
                <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[51px] xl:px-[64px] 2xl:px-[72px] 3xl:px-[86px] w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[100%]"
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
                      Upload Profile Photo
                    </div>
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { ProfilesetupphotomodalOneModal };
