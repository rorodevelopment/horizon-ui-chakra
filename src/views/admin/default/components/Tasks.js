// Chakra imports
import {
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Checkbox,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import Menu from "components/menu/MainMenu";
import IconBox from "components/icons/IconBox";
import { Input } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

// Assets
import { MdCheckBox, MdDragIndicator } from "react-icons/md";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Text fontSize='lg' fontWeight='700'>
          Meals
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Breakfast: SGD 3
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Lunch: SGD 4
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Dinner: SGD 2
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Snacks: SGD 2
        </Text>
      </Flex>

      <Flex>
        <Image></Image>
      </Flex>

    </Card>
  );
}
