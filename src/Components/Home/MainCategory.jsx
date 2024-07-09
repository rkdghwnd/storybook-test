import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import pen from '../../image/pen.png';

export const MainCategory = ({ isLogin }) => {
  // 모바일 화면과 데스크탑 화면을 위한 이미지 크기 설정
  const imageSize = useBreakpointValue({ base: '70px', sm: '95px' });
  // 모바일 화면과 데스크탑 화면을 위한 텍스트 크기 설정
  const textSize = useBreakpointValue({ base: '15px', sm: '19px' });
  return (
    <Link to={isLogin ? '/service' : '/sign/login'}>
      <Box
        className="landing-grid-card"
        minW={{ base: '130px', sm: '190px' }}
        minH={{ base: '0px', sm: '270px' }}
        boxShadow={'2px 2px 2px 2px #d5d5d5'}
        borderRadius={'10px'}
        _hover={{
          boxShadow: '3px 3px 3px 3px #ededed',
          transform: 'translateY(-20px)',
        }}
        flex={'display'}
        justifyContent={'center'}
      >
        <Flex justify={'center'} mt="45px" fontSize={'4xl'}>
          <img
            src={pen}
            alt="pen Icon"
            style={{
              width: imageSize,
              height: imageSize,
            }}
          />
        </Flex>
        <Box fontWeight={600} fontSize={textSize} textAlign={'center'} color={'gray'}>
          <Text>AI 글쓰기 {'>'} </Text>
          {/* <Text>서비스</Text> */}
        </Box>
      </Box>
    </Link>
  );
};
