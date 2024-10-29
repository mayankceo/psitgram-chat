import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <>
      {/* Top Bar */}
      <Box 
        position={"fixed"} 
        top={0} 
        left={0} 
        width={"full"} 
        py={4} 
        px={4} 
        backgroundColor={"#000"} 
        color={"white"}
        borderStyle={"solid"} 
        borderWidth={"1px"} 
        borderColor={"gray.700"}
      >
        <Flex 
          direction={"row"} 
          gap={5} 
          cursor={"pointer"} 
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box 
            fontSize={20} 
            fontWeight={"bold"} 
            color={"white"}
          >
            PSITHUB
          </Box>
          <Tooltip 
            hasArrow 
            label={"Logout"} 
            placement='right' 
            ml={1} 
            color={"white"}
          >
            <Button 
              variant={"ghost"} 
              _hover={{ bg: "#333" }} 
              isLoading={isLoggingOut}
              color={"white"}
              onClick={handleLogout}
            >
              <BiLogOut size={25} color={"white"} />
            </Button>
          </Tooltip>
        </Flex>
      </Box>
      
      {/* Main Content */}
      <Box 
        minHeight={"100vh"} 
        width={"100%"} 
        p={0} 
        pt={16}
      >
        {/* Your main content goes here */}
      </Box>
      
      {/* Bottom Bar */}
      <Box 
        position={"fixed"} 
        bottom={0} 
        left={0} 
        width={"full"} 
        py={4} 
        px={4} 
        backgroundColor={"#000"} 
        color={"white"}
      >
        <Flex 
          direction={"row"} 
          gap={5} 
          cursor={"pointer"} 
          justifyContent={"space-between"}
          backgroundColor={"#000"}
          overflowX={"auto"}
        >
          <SidebarItems color={"white"} />
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar






