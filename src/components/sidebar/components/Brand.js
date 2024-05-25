import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Image  } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import pablo from "./esco.jpg";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Image src={pablo} alt="Logo" h='200px' w='255px' my='32px' />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
