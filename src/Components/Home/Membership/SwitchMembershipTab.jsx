import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllProductMembership from "./AllProductMembership";
import WritingProduct from "./WritingProuductMembership";
import DrawingProductMembership from "./DrawingProductMembership";
import ChattingelMembership from "./ChattingelMembership";


export  const SwitchMembershipTab = ({setMembershipName, SetPrice, setServiceToken}) => {
    return(
        <Tabs size={{base:'md', md:'lg'}} colorScheme="purple" variant={'soft-rounded'}> 
          <TabList overflowX={'auto'}>
            <Tab minW={'100px'}>통합</Tab>
            <Tab minW={'100px'}>라이팅젤</Tab>
            <Tab minW={'100px'}>드로잉젤</Tab>
            <Tab minW={'100px'}>채팅젤</Tab>
          </TabList> 

                
        <TabPanels p='2rem 0'>
          <TabPanel>
          <AllProductMembership
            setMembershipName={setMembershipName}
            SetPrice={SetPrice}
          />
          </TabPanel>
          <TabPanel>
          <WritingProduct
            setMembershipName={setMembershipName}
            SetPrice={SetPrice}
          />
          </TabPanel>
          <TabPanel>
          <DrawingProductMembership
            setMembershipName={setMembershipName}
            setServiceToken={setServiceToken}
            SetPrice={SetPrice}
          />
          </TabPanel>
          <TabPanel>
          <ChattingelMembership
            setMembershipName={setMembershipName}
            setServiceToken={setServiceToken}
            SetPrice={SetPrice}
          />
          </TabPanel>
        </TabPanels>
        </Tabs>
    
    )
}