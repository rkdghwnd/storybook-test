import React from "react";
import { Box, Heading, List, ListItem,ListIcon,Text } from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/md";


const MembershipInfo = () => {
  return (
    <Box maxW={"960px"} m='0 auto' p={{base:'30px 15px', md:'30px'}} border={{base: 'none', md:'1px solid #ddd'}} borderRadius='15px' wordBreak={'keep-all'} >
      <Heading as='h4' size='md' textAlign={"center"} marginBottom='2em'>
        멤버십에 가입 하시면 인공지능 기반 글쓰기 지원 서비스를 무제한 이용하실
        수 있습니다.
      </Heading>
      <List spacing={5}>
        <ListItem display={'flex'}>
          <ListIcon w={6} h={6} as={MdCheckCircle} color='purple.500' />
          <Box>
              <Heading as='h5' size='sm' mb='5px' fontWeight='900'>
                100% 인공지능 창작, 표절 &amp; 저작권 걱정 NO
              </Heading>
              <Text>
                모든 결과물은 기존 창작물에서 가져오는 것이 아니라,
                인공지능이 완전히 새롭게 창작하는 것이므로 표절 문제에서
                자유롭습니다. 저작권 역시 해당 사용자에게
                귀속됩니다.
              </Text>
            </Box>
        </ListItem>
        <ListItem display={'flex'}>
          <ListIcon w={6} h={6} as={MdCheckCircle} color='purple.500' />
          <Box>
              <Heading as='h5' size='sm' mb='5px' fontWeight='900'>
              계속 새로운 서비스 출시, 무제한 사용
              </Heading>
              <Text>
              앞으로 새로운 서비스를 새롭게 개발/출시할
                예정입니다. 멤버십에 가입하시면, 사용 기간 내 출시되는
                서비스는 모두 무제한으로 사용하실 수 있습니다.
              </Text>
            </Box>
        </ListItem>
        <ListItem display={'flex'}>
          <ListIcon w={6} h={6} as={MdCheckCircle} color='purple.500' />
          <Box>
              <Heading as='h5' size='sm' mb='5px' fontWeight='900'>
              교육(인공지능 글쓰기, 콘텐츠 만들기 등) &amp; 커뮤니티 활동
              </Heading>
              <Text>
              인공지능을 활용한 글쓰기, 전자책, 개인 콘텐츠 만들기 등 관련 교육을 받을 수 있고, 그 외 온·오프라인에서 함께
                창작활동을 할 수 있습니다.
              </Text>
            </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default MembershipInfo;
