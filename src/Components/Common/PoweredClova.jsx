import {ReactComponent as Clova} from 'Components/Common/Badge_Powered by CLOVA_Black_screen.svg';
import { Box } from "@chakra-ui/react";

const PoweredClova = () => {
    return(
        <Box
        w='100%'
        mb='30px'
        display='flex'
        justifyContent={'flex-end'}
        ><Clova width='150px'/></Box>
    )
}
export default PoweredClova;