import { Box, Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"

const StepStatus = styled(Flex)`
width:40px;
height: 40px;
background-color : #805AD5;
///border: 2px solid #444;
color: #fff;
border-radius:50%;
justify-content: center;
align-items: center;
`

export const ChatStepper = ({statusNumber , stepDescription}) => {
    return(
            <Flex
            direction={'column'}
            maxW='300px'
            gap='20px'
            align={'center'}
            >
                <Box>
                    <StepStatus>{statusNumber}</StepStatus>
                </Box>
                <Box>
                    <Text>{stepDescription}</Text>
                </Box>
            </Flex>
    )
}