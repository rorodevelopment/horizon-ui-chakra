// meals.js
import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";

export default function Response({ data, ...rest }) {
  // Perform null check for data object
  if (!data || !data.DailySpendingAllocation || !data.DailySpendingAllocation.Meals) {
    return null; // Return null or placeholder content if data is not available
  }

  const meals = data.DailySpendingAllocation.Meals;
  //const textColor = useColorModeValue("secondaryGray.900", "white");

  return(
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Text fontSize='lg' fontWeight='700'>
          Meals
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Breakfast: {meals.Breakfast}
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Lunch: {meals.Lunch}
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Dinner: {meals.Dinner}
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='100'>
          Snacks: {meals.Snacks}
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='20px'>
        <Text fontSize='lg' fontWeight='700'>
          Total for Meals: {meals.TotalForMeals}
        </Text>
      </Flex>
    </Card>
  );
}