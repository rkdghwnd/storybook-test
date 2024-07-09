import { Flex, Skeleton } from "@chakra-ui/react";

const SkeletonLoading = () => {
    return(
        <Flex direction={'column'} gap='10px'>
            <Skeleton height='200px' borderRadius={'10px'}/>
            <Skeleton height='200px' borderRadius={'10px'}/>
            <Skeleton height='200px' borderRadius={'10px'}/>
            <Skeleton height='200px' borderRadius={'10px'}/>
        </Flex>
    )
}

export default SkeletonLoading;