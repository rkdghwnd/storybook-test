import React from 'react';
import {Box, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {ChevronLeftIcon} from '@chakra-ui/icons';
import styled from 'styled-components';

const HeaderBox = styled(Box)`
    border-radius: 10px;
    padding: 10px 15px;
`

const ServiceDetailLayout = ({children}) => {
    const isLogin = localStorage.getItem('isLogin');
    return(
        <Box  maxW='1024px' m='0 auto' p={{base:"70px 10px", md:'70px 30px'}}>
            <Link to='/detail'><HeaderBox w='100%' bg='#000' color='#fff'><ChevronLeftIcon w={6} h={6} color='#fff'/>메인으로</HeaderBox></Link>
            {children}
            <Link to={isLogin ? '/service' :'/sign/login' }><Box w='100%'><Button  w='100%' bg='#F8FFA0'>서비스 이용하기</Button></Box></Link>
        </Box>
    )
} 

export default ServiceDetailLayout;