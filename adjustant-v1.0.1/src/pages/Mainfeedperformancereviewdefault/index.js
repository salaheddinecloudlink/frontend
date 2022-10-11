import React from "react";

import { Column, Row, Text, Line, Img, List, Stack, Button } from "components";
import Header3 from "components/Header/Header3";

const MainfeedperformancereviewdefaultPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-metropolis items-center justify-end mx-[auto] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="items-center justify-start shadow-bs w-[100%]">
          <Row className="bg-white_A700 items-center lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] w-[100%]">
            <Text
              className="font-normal text-gray_600 w-[auto]"
              as="h2"
              variant="h2"
            >
              Performance Review
            </Text>
            <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[1px]" />
            <Row className="items-start justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[14%]">
              <Text className="Acceptable" as="h3" variant="h3">
                Acceptable
              </Text>
              <Text className="One15" as="h3" variant="h3">
                /
              </Text>
              <Text className="Unacceptable" as="h3" variant="h3">
                Unacceptable
              </Text>
            </Row>
            <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[1px]" />
            <Row className="items-center justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[33%]">
              <Text
                className="font-normal text-gray_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Exceeded Expectations
              </Text>
              <Text className="Two2" as="h3" variant="h3">
                /
              </Text>
              <Text className="MetExpectation" as="h3" variant="h3">
                Met Expectations
              </Text>
              <Text className="Two2" as="h3" variant="h3">
                /
              </Text>
              <Text className="MetExpectation" as="h3" variant="h3">
                Below Expectations
              </Text>
            </Row>
            <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[1px]" />
            <Row className="items-center justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[14%]">
              <Text
                className="font-normal text-gray_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Eligible for Rehire?
              </Text>
              <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[29%]">
                <Text
                  className="font-normal text-gray_600 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Y
                </Text>
                <Text
                  className="font-normal text-bluegray_100 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  /
                </Text>
                <Text
                  className="font-normal text-gray_600 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  N
                </Text>
              </Row>
            </Row>
          </Row>
          <Row className="bg-white_A700 items-start lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] w-[100%]">
            <Text
              className="font-medium text-gray_600 w-[auto]"
              as="h3"
              variant="h3"
            >
              Select for All
            </Text>
            <Line className="bg-gray_200 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[120px] xl:ml-[151px] 2xl:ml-[170px] 3xl:ml-[204px] w-[1px]" />
            <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
              <Img
                src="images/img_arrowup.svg"
                className="rounded-radius50 plus1"
                alt="arrowup"
              />
              <Img
                src="images/img_clickablearea.svg"
                className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                alt="clickablearea"
              />
            </Row>
            <Line className="bg-gray_200 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
            <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
              <Img
                src="images/img_arrowup.svg"
                className="rounded-radius50 plus1"
                alt="arrowup One"
              />
              <Img
                src="images/img_clickablearea.svg"
                className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                alt="clickablearea One"
              />
              <Img
                src="images/img_clickablearea.svg"
                className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                alt="clickablearea Two"
              />
            </Row>
            <Line className="bg-gray_200 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
            <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
              <Img
                src="images/img_arrowup.svg"
                className="arrowup_Two"
                alt="arrowup Two"
              />
              <Img
                src="images/img_clickablearea.svg"
                className="Radio"
                alt="Radio"
              />
            </Row>
          </Row>
        </Column>
        <Column className="items-center justify-end w-[100%]">
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="listprofilephoto">
              <Row className="items-end w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Three"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Three"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio One"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-end w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Four"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Four"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One One"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One One"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two One"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two One"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Two"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto">
              <Row className="items-end w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Five"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Five"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Two"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Two"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Two"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Two"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio Three"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-end w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Six"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Six"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Three"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Three"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Three"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Three"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Four"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto">
              <Row className="items-end w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Seven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Seven"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Four"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Four"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Four"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Four"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio Five"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-end w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Eight"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Eight"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Five"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Five"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Five"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Five"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Six"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto">
              <Row className="items-end w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Nine"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Nine"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Six"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Six"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Six"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Six"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio Seven"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-end w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Ten"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Ten"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Seven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Seven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Seven"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Seven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Eight"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto">
              <Row className="items-end w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Eleven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Eleven"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Eight"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Eight"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Eight"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Eight"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio Nine"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-end w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Twelve"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Twelve"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Nine"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Nine"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Nine"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Nine"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Ten"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto">
              <Row className="items-end w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Thirteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Thirteen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Ten"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Ten"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Ten"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Ten"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio Eleven"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-end w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Fourteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Fourteen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Eleven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Eleven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Eleven"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Eleven"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Twelve"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto">
              <Row className="items-end w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Fifteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Fifteen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Twelve"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Twelve"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Twelve"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Twelve"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio Thirteen"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-end w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name1" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup Sixteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea Sixteen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="rounded-radius50 plus1"
                  alt="arrowup One Thirteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea One Thirteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Two Thirteen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="arrowup_Two"
                  alt="arrowup Two Thirteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Fourteen"
                />
              </Row>
            </Row>
          </List>
          <Stack className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] w-[100%]">
            <List
              className="absolute gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="listprofilephoto">
                <Row className="items-end w-[11%]">
                  <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                  <Text className="name1" as="h3" variant="h3">
                    Johnny Appleseed
                  </Text>
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
                <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="rounded-radius50 plus1"
                    alt="arrowup Seventeen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                    alt="clickablearea Seventeen"
                  />
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
                <Row className="items-center justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[25%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="rounded-radius50 plus1"
                    alt="arrowup One Fourteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                    alt="clickablearea One Fourteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                    alt="clickablearea Two Fourteen"
                  />
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[1px]" />
                <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup_Two"
                    alt="arrowup Two Fourteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="Radio"
                    alt="Radio Fifteen"
                  />
                </Row>
              </Row>
              <Row className="listprofilephoto_seventeen">
                <Row className="items-end w-[12%]">
                  <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                  <Text className="name1" as="h3" variant="h3">
                    Johnny Appleseed
                  </Text>
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
                <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="rounded-radius50 plus1"
                    alt="arrowup Eighteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                    alt="clickablearea Eighteen"
                  />
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
                <Row className="items-center justify-center 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[26%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="rounded-radius50 plus1"
                    alt="arrowup One Fifteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                    alt="clickablearea One Fifteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                    alt="clickablearea Two Fifteen"
                  />
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[1px]" />
                <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup_Two"
                    alt="arrowup Two Fifteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="arrowup_Two"
                    alt="Radio Sixteen"
                  />
                </Row>
              </Row>
              <Row className="listprofilephoto">
                <Row className="items-end w-[11%]">
                  <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                  <Text className="name1" as="h3" variant="h3">
                    Johnny Appleseed
                  </Text>
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
                <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="rounded-radius50 plus1"
                    alt="arrowup Nineteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                    alt="clickablearea Nineteen"
                  />
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
                <Row className="items-center justify-center 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[25%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="rounded-radius50 plus1"
                    alt="arrowup One Sixteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                    alt="clickablearea One Sixteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                    alt="clickablearea Two Sixteen"
                  />
                </Row>
                <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[1px]" />
                <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup_Two"
                    alt="arrowup Two Sixteen"
                  />
                  <Img
                    src="images/img_clickablearea.svg"
                    className="Radio"
                    alt="Radio Seventeen"
                  />
                </Row>
              </Row>
            </List>
            <Column className="absolute bg-white_A700 bottom-[7%] items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
              <Column className="bg-white_A700 items-center justify-start w-[8%]">
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
                    Submit
                  </div>
                </Button>
              </Column>
            </Column>
          </Stack>
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="listprofilephoto_seventeen">
              <Row className="items-center w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name2" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="rounded-radius50 plus1"
                  alt="clickablearea Twenty"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea One Seventeen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="rounded-radius50 plus1"
                  alt="clickablearea Two Seventeen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Three"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea Four"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Eighteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio One"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto">
              <Row className="items-center w-[11%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name2" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[10%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="rounded-radius50 plus1"
                  alt="clickablearea TwentyOne"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea One Eighteen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[25%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="rounded-radius50 plus1"
                  alt="clickablearea Two Eighteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Three One"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea Four One"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Nineteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="Radio"
                  alt="Radio One One"
                />
              </Row>
            </Row>
            <Row className="listprofilephoto_seventeen">
              <Row className="items-center w-[12%]">
                <div className="bg-bluegray_400 rounded-radius50 plus1"></div>
                <Text className="name2" as="h3" variant="h3">
                  Johnny Appleseed
                </Text>
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] w-[1px]" />
              <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[11%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="rounded-radius50 plus1"
                  alt="clickablearea TwentyTwo"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] rounded-radius50 plus1"
                  alt="clickablearea One Nineteen"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] w-[1px]" />
              <Row className="items-center justify-center 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] w-[26%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="rounded-radius50 plus1"
                  alt="clickablearea Two Nineteen"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] rounded-radius50 plus1"
                  alt="clickablearea Three Two"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] rounded-radius50 plus1"
                  alt="clickablearea Four Two"
                />
              </Row>
              <Line className="bg-gray_200 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] w-[1px]" />
              <Row className="items-center justify-between lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] w-[4%]">
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio Twenty"
                />
                <Img
                  src="images/img_clickablearea.svg"
                  className="arrowup_Two"
                  alt="Radio One Two"
                />
              </Row>
            </Row>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default MainfeedperformancereviewdefaultPage;
