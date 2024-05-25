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
  if (!data || !data.DailySpendingAllocation) {
    return null; // Return null or placeholder content if data is not available
  }

  const {
    Meals,
    Healthcare,
    Transportation,
    LeisureOther,
    ReserveEmergency,
    Supermarket,
    Summary,
    Note,
  } = data.DailySpendingAllocation;

  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      {/* Meals Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Meals
        </Text>
      </Flex>
      {Object.entries(Meals).map(([mealName, meal]) => (
        <Flex key={mealName} alignItems="center" w="100%" flexDirection="column" mb="20px">
          <Text fontSize="lg" fontWeight="700" mb="10px">
            {mealName}
          </Text>
          {meal.items &&
            Object.entries(meal.items).map(([itemName, itemPrice]) => (
              <Text key={itemName} fontSize="lg" fontWeight="100">
                {itemName}: {itemPrice}
              </Text>
            ))}
          {meal.Total && (
            <Text fontSize="lg" fontWeight="700">
              Total: {meal.Total}
            </Text>
          )}
        </Flex>
      ))}

      {/* Healthcare Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Healthcare
        </Text>
      </Flex>
      {Object.entries(Healthcare).map(([category, cost]) => (
        <Flex key={category} alignItems="center" w="100%" flexDirection="column" mb="20px">
          <Text fontSize="lg" fontWeight="700" mb="10px">
            {category}
          </Text>
          <Text fontSize="lg" fontWeight="100">
            {cost}
          </Text>
        </Flex>
      ))}

      {/* Transportation Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Transportation
        </Text>
      </Flex>
      <Flex alignItems="center" w="100%" flexDirection="column" mb="20px">
        <Text fontSize="lg" fontWeight="100">
          {Transportation.DailyTransportation}
        </Text>
      </Flex>

      {/* Leisure Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Leisure
        </Text>
      </Flex>
      <Flex alignItems="center" w="100%" flexDirection="column" mb="20px">
        <Text fontSize="lg" fontWeight="100">
          {LeisureOther.LeisureOther}
        </Text>
      </Flex>

      {/* Reserve Emergency Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Reserve Emergency
        </Text>
      </Flex>
      <Flex alignItems="center" w="100%" flexDirection="column" mb="20px">
        <Text fontSize="lg" fontWeight="100">
          {ReserveEmergency.ReserveEmergency}
        </Text>
      </Flex>

      {/* Supermarket Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Supermarket
        </Text>
      </Flex>
      {Object.entries(Supermarket.items).map(([itemName, itemPrice]) => (
        <Flex key={itemName} alignItems="center" w="100%" flexDirection="column" mb="20px">
          <Text fontSize="lg" fontWeight="700" mb="10px">
            {itemName}
          </Text>
          <Text fontSize="lg" fontWeight="100">
            {itemPrice}
          </Text>
        </Flex>
      ))}

      <Flex alignItems="center" w="100%" mb="20px">
        <Text fontSize="lg" fontWeight="700">
          Total for Supermarket: {Supermarket.Total}
        </Text>
      </Flex>

      {/* Summary Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Summary
        </Text>
      </Flex>
      <Flex alignItems="center" w="100%" flexDirection="column" mb="20px">
        <Text fontSize="lg" fontWeight="100">
          Daily Spending Limit: {Summary.DailySpendingLimit}
        </Text>
      </Flex>

      {/* Note Section */}
      <Flex alignItems="center" w="100%" mb="30px">
        <Text fontSize="lg" fontWeight="700">
          Note
        </Text>
      </Flex>
      <Flex alignItems="center" w="100%" flexDirection="column" mb="20px">
        <Text fontSize="lg" fontWeight="100">
          {Note.Notes}
        </Text>
      </Flex>
    </Card>
  );
}
