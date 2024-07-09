import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { EbookPara, GoShopBtn, BookInfo } from 'Styles/CommonStyled';

const EbookFirstsentece = () => {
  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0">
        팅젤문고 시리즈
      </Heading>
      <Flex justify={'center'} direction="column" maxW="1200px" m="0 auto" p="100px 30px" gap="50px">
        <Box>
          <Flex align="center" gap="5px" mb="30px" direction={{ base: 'column', md: 'row' }}>
            <Heading as="h2" size="lg">
              [E-Book] 팅젤문고 첫문장 모음집
            </Heading>
            <Text fontSize="md">- 인공지능이 생성한 첫문장 100여개로 맛보기</Text>
          </Flex>
          <Flex direction={{ base: 'column', md: 'row' }} gap="50px" align="center">
            <picture>
              <source
                className="ebook-detail-image"
                srcSet="/images/tingel_series_ebook_3_firstsentence.webp"
                type="image/webp"
              />
              <img
                className="ebook-detail-image"
                src="/images/tingel_series_ebook_3_firstsentence.jpeg"
                alt="tingel_series_ebook_3_firstsentence"
              />
            </picture>

            <Flex w="100%" direction="column" align={{ base: 'center', md: 'baseline' }} gap="20px">
              <Box p={{ base: '0 10px', mod: '0' }}>
                <EbookPara>
                  <span>당신의 이야기는 어떤 문장으로 시작하나요?</span>
                </EbookPara>
                <EbookPara>
                  팅젤문고 100+ 모음집 시리즈의 두 번째 주제는 &lt;첫문장&gt;입니다. <br />
                  첫문장은 이야기의 첫인상입니다. 매력적인 첫문장은 독자가 계속 다음 문장에도 마음을 열 수 있게 하는
                  힘을 가지고 있습니다. 수천억개의 데이터를 학습한 인공지능이 제안하는 첫문장은 이야기를 매력적으로
                  이끌어줄 것입니다.
                </EbookPara>
                <EbookPara>
                  이야기의 첫 단추를 잘 꿰면 이야기가 술술 풀리기도 합니다. 훌륭한 첫 문장은 앞으로 전개할 이야기를
                  상상하게 합니다. 상상력을 자극하는 첫문장 뒤 이어지는 당신만의 이야기를 덧붙여보세요.
                </EbookPara>
                <EbookPara>
                  웹 페이지 하나에 소비하는 시간은 딱 10초. 독자들을 더 오랫동안 머물게 하기 위해서는 시선을 사로잡는
                  첫인상이 필요합니다.
                </EbookPara>
              </Box>
              <Flex gap="10px" direction={{ base: 'column', md: 'row' }} w="100%">
                <a
                  href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298319159"
                  target={'_blank'}
                  rel="noreferrer noopener"
                >
                  <GoShopBtn color="#df307f" hover="#bf1d66">
                    알라딘
                  </GoShopBtn>
                </a>
                <a href="http://www.yes24.com/Product/Goods/110832482" target={'_blank'} rel="noreferrer noopener">
                  <GoShopBtn color="#1869b3" hover="#155c9d">
                    Yes24
                  </GoShopBtn>{' '}
                </a>
                <a
                  href="https://ridibooks.com/books/805039255?_s=search&_q=%EC%B2%AB%EB%AC%B8%EC%9E%A5+%EB%AA%A8%EC%9D%8C%EC%A7%91&_rdt_sid=search&_rdt_idx=0"
                  target={'_blank'}
                  rel="noreferrer noopener"
                >
                  <GoShopBtn color="#1f8ce6" hover="#187fd4">
                    리디북스
                  </GoShopBtn>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <BookInfo>
            <div>누가 활용할 수 있을까요?</div>
            <div>
              &lt;팅젤문고 100+ 첫문장 모음집&gt;은 글 쓰려고 앉으면 첫문장에서 막히는 사람, 새로운 이야기에 상상력이
              필요한 사람, 글쓰기 모임을 이끌거나 참여하는 사람, 독자들을 더 오랫동안 머무르게 하고 싶은 콘텐츠
              크리에이터가 영감을 얻을 수 있도록 인공지능 글쓰기 서비스 라이팅젤이 생성하는 첫문장들을 담은 책입니다.
            </div>
          </BookInfo>
          <BookInfo>
            <div>어떻게 활용할 수 있을까요?</div>
            <div>
              미스터리, 판타지, 에세이 등 장르에 상관 없이 유용한 첫문장 모음집의 한 페이지를 무작위로 펴서 이야기를
              바로 이어보세요. 인공지능이 수천억 개의 자연어 데이터를 학습한 결과를 바탕으로 생성한 첫문장이 자극하는
              새로운 이야기를 시작할 수 있을 뿐 아니라, 매력적인 첫문장의 특징과 요소를 파악하는 데도 도움이 될
              것입니다.
            </div>
          </BookInfo>
          <BookInfo>
            <div>어떤 도움을 받을 수 있나요?</div>
            <div>
              인공지능이 수천억 개의 자연어 데이터를 학습한 결과를 바탕으로 생성한 첫문장 100여개를 선별해서 담은
              &lt;팅젤문고 100+ 첫문장 모음집&gt;에서 새로운 이야기를 당신의 손으로 열 수 있는 열쇠를 찾아보세요.
            </div>
          </BookInfo>
        </Box>
      </Flex>
    </Box>
  );
};

export default EbookFirstsentece;
