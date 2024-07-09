import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { EbookPara, GoShopBtn, BookInfo } from 'Styles/CommonStyled';

const EbookFantasy = () => {
  return (
    <Box>
      <Heading as="h1" size={'lg'} textAlign="center" m="70px 0">
        팅젤문고 시리즈
      </Heading>
      <Flex justify={'center'} direction="column" maxW="1200px" m="0 auto" p="100px 30px" gap="50px">
        <Box>
          <Flex align="center" gap="5px" mb="30px" direction={{ base: 'column', md: 'row' }}>
            <Heading as="h2" size="lg">
              [E-Book] 팅젤문고 판타지 세계관
            </Heading>
            <Text fontSize="md">- 인공지능이 생성한 세계관 100여개로 맛보기</Text>
          </Flex>
          <Flex direction={{ base: 'column', md: 'row' }} gap="50px" align="center">
            <picture>
              <source
                className="ebook-detail-image"
                srcSet="/images/tingel_series_ebook_1_fantasy.webp"
                type="image/webp"
              />
              <img
                className="ebook-detail-image"
                src="/images/tingel_series_ebook_1_fantasy.jpeg"
                alt="tingel_series_ebook_1_fantasy"
              />
            </picture>

            <Flex w="100%" direction="column" align={{ base: 'center', md: 'baseline' }} gap="20px">
              <Box p={{ base: '0 10px', mod: '0' }}>
                <EbookPara>
                  <span>
                    당신의 손 안에서 판타지 세계를 탄생시키는
                    <br />
                    좋은 재료로 활용해보세요!
                  </span>
                </EbookPara>
                <EbookPara>팅젤문고 100+ 모음집 시리즈의 첫 번째 주제는 &lt;판타지 세계관&gt;입니다.</EbookPara>
                <EbookPara>
                  드라마, 영화, 게임, 소설, 만화 부터 노래 가사, 캐릭터, 브랜드에 이르기까지 성공하는 콘텐츠 뒤에는
                  탄탄한 세계관이 있습니다. 특히, 판타지 장르에서 이야기의 탄탄한 배경이 되는 세계관이 중요하다는 건
                  알지만, 처음부터 혼자 힘으로 거대한 세계를 새롭게 창조하는 게 쉽지만은 않죠.
                </EbookPara>
                <EbookPara>
                  어떻게 하면, 콘텐츠를 소비하는 사용자들의 흥미를 유발하고 적극적인 참여까지도 유도할 수 있는 세계관의
                  창시자가 될 수 있을까요? 라이팅젤이 사용자들을 사로잡을 판타지 세계관을 창조하는 데 기본적인 뼈대가 될
                  수 있는 영감을 무한 제공합니다.
                </EbookPara>
              </Box>
              <Flex gap="10px" direction={{ base: 'column', md: 'row' }} w="100%">
                <a
                  href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=298319160"
                  target={'_blank'}
                  rel="noreferrer noopener"
                >
                  <GoShopBtn color="#df307f" hover="#bf1d66">
                    알라딘
                  </GoShopBtn>
                </a>
                <a href="http://www.yes24.com/Product/Goods/110832481" target={'_blank'} rel="noreferrer noopener">
                  <GoShopBtn color="#1869b3" hover="#155c9d">
                    Yes24
                  </GoShopBtn>{' '}
                </a>
                <a
                  href="https://ridibooks.com/books/805039254?_s=search&_q=%EB%9D%BC%EC%9D%B4%ED%8C%85%EC%A0%A4&_rdt_sid=search&_rdt_idx=0"
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
              &lt;팅젤문고 100+ 판타지 세계관 모음집&gt;은 판타지 장르의 스토리(웹툰, 웹소설, 드라마, 영화 등)를 새로
              시작하는 창작자들, 판타지 게임 기획자, 혹은 이제 막 이야기를 쓰기 시작하는 작가 지망생들이 영감을 얻을 수
              있도록 인공지능 글쓰기 서비스 라이팅젤이 생성하는 세계관들을 담은 책입니다.
            </div>
          </BookInfo>
          <BookInfo>
            <div>어떻게 활용할 수 있을까요?</div>
            <div>
              라이팅젤이 제공하는 판타지 세계관 뼈대에 살을 붙여 보세요. 멋진 신세계를 당신의 손 안에서 탄생시킬 수 있는
              좋은 기회입니다. 새로운 세계관을 세우고 싶지만 어떻게 해야 할지 몰라서 막막하기만 한 창작자를 위해
              라이팅젤이 구체적인 상상력을 자극하는 세계관을 100여개로 압축해서 담았습니다.
            </div>
          </BookInfo>
          <BookInfo>
            <div>어떤 도움을 받을 수 있나요?</div>
            <div>
              인공지능이 수천억 개의 자연어 데이터를 학습한 결과를 바탕으로 생성한 각 세계관에서 이름, 지명, 종족, 특성,
              정치 형태, 갈등 양상 등 세부적인 사항에 대한 힌트를 얻을 수 있을 뿐 아니라, 반복적으로 나타나는 패턴을
              발견하여 판타지 장르 스토리의 기본적인 구조를 쉽고 빠르게 파악하실 수 있습니다.
            </div>
          </BookInfo>
        </Box>
      </Flex>
    </Box>
  );
};

export default EbookFantasy;
