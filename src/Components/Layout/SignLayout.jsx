import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SignHeader from './SignHeader';

const SignLayout = () => {
    return(
        <Box minH='100vh' h='100%' bg='#edf2f6'>
            <SignHeader/>
            <Box p='120px 30px'>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default SignLayout;