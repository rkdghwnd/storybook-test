import { Flex, Box } from "@chakra-ui/react";

export const Card = ({ selected, children }) => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      p='30px 20px'
      className={selected ? "MembershipCard selected" : "MembershipCard"}
    >
        {children}
    </Flex>
  );
};

export const CardHeader = ({children}) => {
    return(
        <Flex direction='column' align='center'>
            {children}
        </Flex>
    )
}

export const CardBody = ({ children }) => {
    return (
      <Box mt='30px'>
        <Flex direction={"column"} align='center' gap='50px'>
          {children}
        </Flex>
      </Box>
    );
  };
  