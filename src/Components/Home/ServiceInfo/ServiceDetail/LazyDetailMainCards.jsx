import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { ServiceDetailCard } from 'Components/Common/ServiceDetailCard';

const LazyDetailMainCards = () => {
  return (
    <Flex direction="column" p={'1rem 2rem'} gap="30px">
      <Box p={{ base: '30px', md: '50px' }} border="1px solid #ddd" bg="#fff" borderRadius={'10px'}>
        <Heading as="h2" size="md" borderBottom="1px solid #444" pb="10px">
          글을 써볼까 생각 중인 사람들
        </Heading>
        <SimpleGrid
          minChildWidth="220px"
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          spacing={14}
          pt="50px"
        >
          <ServiceDetailCard link={'mbti_loveletter'} image={'07'} title={'MBTI 연애편지'} />

          <ServiceDetailCard link={'firstsentence'} image={'04'} title={'첫문장 자판기'} />

          <ServiceDetailCard link={'material'} image={'09'} title={'글감찾기 질문카드'} />

          <ServiceDetailCard link={'storysrc'} image={'10'} title={'이야기 재료 찾기'} />

          <ServiceDetailCard link={'fantasy'} image={'15'} title={'판타지 세계관 생성'} />
        </SimpleGrid>
      </Box>

      <Box p={{ base: '30px', md: '50px' }} border="1px solid #ddd" bg="#fff" borderRadius={'10px'}>
        <Heading as="h2" size="md" borderBottom="1px solid #444" pb="10px">
          글을 쓰려고 마음 먹은 사람들
        </Heading>
        <SimpleGrid
          minChildWidth="180px"
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          spacing={14}
          pt="50px"
        >
          <ServiceDetailCard link={'discussion'} image={'08'} title={'찬반 논거'} />

          <ServiceDetailCard link={'lyrics'} image={'05'} title={'시(가사) 쓰기'} />
          {/* 이미지 교체 필요 */}
          <ServiceDetailCard link={'diary'} image={'19'} title={'일기 쓰기'} />
        </SimpleGrid>
      </Box>

      <Box p={{ base: '30px', md: '50px' }} border="1px solid #ddd" bg="#fff" borderRadius={'10px'}>
        <Heading as="h2" size="md" borderBottom="1px solid #444" pb="10px">
          글을 쓰기 시작한 사람들
        </Heading>
        <SimpleGrid
          minChildWidth="220px"
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          spacing={14}
          pt="50px"
        >
          <ServiceDetailCard link={'blog'} image={'02'} title={'블로그 글쓰기'} />
          <ServiceDetailCard link={'novel'} image={'01'} title={'소설 쓰기'} />
          <ServiceDetailCard link={'fairy'} image={'03'} title={'동화 쓰기'} />
          <ServiceDetailCard link={'nextsentence'} image={'16'} title={'뒷문장 자판기'} />
        </SimpleGrid>
      </Box>
      {/* 이미지 추가해야 */}
      <Box p={{ base: '30px', md: '50px' }} border="1px solid #ddd" bg="#fff" borderRadius={'10px'}>
        <Heading as="h2" size="md" borderBottom="1px solid #444" pb="10px">
          직장인 글쓰기
        </Heading>
        <SimpleGrid
          minChildWidth="220px"
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          spacing={14}
          pt="50px"
        >
          <ServiceDetailCard link={'email'} image={'17'} title={'이메일 작성'} />
          <ServiceDetailCard link={'business'} image={'06'} title={'비즈니스 아이디어'} />
          <ServiceDetailCard link={'coverletter'} image={'11'} title={'대입 자소서 자동 완성'} />
          <ServiceDetailCard link={'resume'} image={'18'} title={'취업 자소서 자동 완성'} />
          <ServiceDetailCard link={'letter_edit'} image={'13'} title={'뉴스레터 에디터'} />
          <ServiceDetailCard link={'product_writing'} image={'14'} title={'상품 소개문구 & 상품후기'} />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default LazyDetailMainCards;
