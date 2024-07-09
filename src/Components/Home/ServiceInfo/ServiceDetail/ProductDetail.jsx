import ServiceDetailLayout from "Components/Layout/ServiceDetailLayout";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FcAddRow, FcDocument, FcNews } from "react-icons/fc";
import {
  DetailExplainCard,
  DetailContetTargetCardBox,
  DetailContetUseCardBox,
} from "Components/Common/DetailCommon";

const ProductDetail = () => {
  return (
    <Box>
      <Flex direction='column' align='center' p='70px 10px 0'>
        <Heading as='h1' size={"lg"} textAlign='center' mb='15px'>
        상품 소개문구 &amp; 상품후기
        </Heading>
        <Heading as='h3' size='sm' textAlign='center'>
        인공지능이 학습한 노하우로<br/>짧지만 임팩트 있는 상품 소개 문구와 상품 후기
        </Heading>
      </Flex>
      <ServiceDetailLayout>
        <Box
          m='10px 0'
          p={{ base: "60px 20px", md: "100px 30px" }}
          bg='#fff'
          //boxShadow='3px 3px 5px rgba(175, 175, 175, 0.5)'
          border='1px solid #ededed'
          borderRadius='10px'
          wordBreak='keep-all'
        >
          <Flex direction={"column"} justify='center' align='center' gap='60px'>
 
            <DetailExplainCard
              title={
                "제품의 핵심을 담은 짧은 문장을 완성해보세요."
              }
              text={
                "간단한 문장으로 정의할 줄 아는 능력을 성공적인 브랜드의 공통적인 비결로 꼽습니다. 라이팅젤이 홍보하려는 브랜드나 상품의 핵심을 짧은 문장으로 압축해서 표현해드립니다."
              }
            />

            <DetailExplainCard
              title={
                "좋아하는 브랜드나 상품을 다른 사람들에게 홍보할 수 있습니다"
              }
              text={
                "좋아하는 브랜드나 상품이 있나요? 찐팬으로서 다른 사람들에게 임팩트있게 알리고 싶은 진심을 라이팅젤이 인공지능으로 학습한 노하우를 담은 문장으로 완성시켜드리겠습니다."
              }
            />

               <DetailExplainCard
              title={
                "상품 소개를 짧고 굵게, SNS에 올려 보세요!"
              }
              text={
                " 상품 소개 문구와 상품 후기가 숏폼 형태로 완성됩니다. 곧바로 인스타그램, 트위터, 페이스북 등 SNS에 활용해보세요."
              }
            />

            
          </Flex>
          <Box textAlign='center'>
            <Heading
              display='inline-block'
              bg='#fbf3da'
              color='#444'
              as='h3'
              size={"md"}
              m='100px 0'
            >
              누가 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify='center'
              align={{ base: "center", md: "flex-start" }}
              gap={10}
              flexWrap={"wrap"}
            >
              <DetailContetTargetCardBox
                color='#3b2478'
                text='판매하는 상품의 종류가 많아 일일이 소개문구를 작성하기 어려운 '
                boldText='소규모 브랜드 상품 판매자, 소상공인'
              /> 

              <DetailContetTargetCardBox
                color='#ffcc00'
                text='SNS에 상품을 소개하는'
                boldText='홍보/마케팅 담당자'
              />

              <DetailContetTargetCardBox
                color='#7d4cdb'
                text='구매 후 상품 후기를'
                boldText='임팩트 있게 작성하고 싶은 소비자'
              />

            </Flex>
          </Box>
          <Box textAlign='center'>
            <Heading
              display='inline-block'
              bg='#fbf3da'
              color='#444'
              as='h3'
              size={"md"}
              m='100px 0'
            >
              어떻게 활용할 수 있을까요?
            </Heading>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify='center'
              align={{ base: "center", md: "flex-start" }}
              gap={10}
              flexWrap={"wrap"}
            >
              <DetailContetUseCardBox
                icon={<FcAddRow />}
                text={
                  " 작성하고자 하는 제품의 기본 사항(제품 종류, 제품명, 제품의 특징)을 간단하게 입력해주세요."
                }
              />

              <DetailContetUseCardBox
                icon={<FcNews/>}
                text={
                  "자동완성되는 상품 소개 문구와 후기를 다듬어서 사용해보세요."
                }
              />

               <DetailContetUseCardBox
                icon={<FcDocument/>}
                text={
                  "상세페이지, 상품평, SNS 등에 활용할 수 있습니다."
                }
              />

            </Flex>
          </Box>
        </Box>
      </ServiceDetailLayout>
    </Box>
  );
};

export default ProductDetail;
