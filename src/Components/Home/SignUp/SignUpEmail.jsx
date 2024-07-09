import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from '../../Common/Loading';
import RegistHookForm from '../../../Hook/RegistHookForm';

const SignUpTitle = styled(Flex)`
  > h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
  }

  > div > p {
    font-size: 15px;
    font-weight: 600;
  }
`;

const SignUpEmail = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loading />}
      <Box
        maxW="480px"
        m="0 auto"
        p="40px"
        bg="#fff"
        border="1px solid #dedede"
        borderRadius={'10px'}
      >
        <SignUpTitle direction="column" gap="10px" mb="20px">
          <h3>이메일로 회원가입</h3>
          <Box>
            <p>
              <span style={{ color: 'red' }}>*</span> 회원가입과 동시에 인증용
              메일이 전송됩니다.
            </p>
            <p>
              <span style={{ color: 'red' }}>*</span> 반드시 유효한 메일 주소로
              가입해주세요!
            </p>
          </Box>
        </SignUpTitle>
        <Box>
          <RegistHookForm setLoading={setLoading} />
          <div className="isChecked">
            <p>
              <a
                href="https://appplatform.notion.site/8be8232fff0341799cf8c13728610b6b"
                target="_blank"
                rel="noreferrer"
              >
                이용약관
              </a>
              과&nbsp;
              <a
                href="https://www.notion.so/appplatform/d99f247a66d141bbbdf227739861a0a2"
                target="_blank"
                rel="noreferrer"
              >
                개인정보처리방침
              </a>
              을 확인하였고&nbsp;동의합니다.
            </p>
          </div>
          <Box textAlign="center" m="35px 0">
            <Flex justify={'center'} align="center">
              <div className="line"></div>
              <p className="orLink">or</p>
              <div className="line"></div>
            </Flex>
          </Box>
          <Box className="sign-link">
            이미 라이팅젤 회원이신가요? <Link to="/sign/login">로그인</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUpEmail;
