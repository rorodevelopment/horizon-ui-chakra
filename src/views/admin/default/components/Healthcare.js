import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";

export default function Healthcare({ data, ...rest }) {
  // Perform null check for data object
  if (!data || !data.DailySpendingAllocation || !data.DailySpendingAllocation.Healthcare) {
    return null; // Return null or placeholder content if data is not available
  }

  const healthcareData = data.DailySpendingAllocation.Healthcare;

  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Text fontSize='lg' fontWeight='700'>
          Healthcare
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Medication: {healthcareData.Medication}
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='700'>
          Total Healthcare: {healthcareData.TotalHealthcare}
        </Text>
      </Flex>
    </Card>
  );
}
