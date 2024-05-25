// inputexpense.js
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React, { useState } from "react";

export default function InputExpense({ updateResponses }) {
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [healthcare, setHealthcare] = useState('');

  const textColor = useColorModeValue("secondaryGray.900", "white");

  const handleSubmit = () => {
    const newResponsesData = {
      "DailySpendingAllocation": {
        "Meals": {
          "Breakfast": "5 SGD",
          "Lunch": "10 SGD",
          "Dinner": "10 SGD",
          "Snacks": "3 SGD",
          "TotalForMeals": "50 SGD"
        },
        "Healthcare": {
          "Medication": "2 SGD",
          "TotalHealthcare": "2 SGD"
        },
        "Transportation": {
          "DailyTransportation": "5 SGD"
        },
        "LeisureOther": {
          "LeisureOther": "7 SGD"
        },
        "ReserveEmergency": {
          "ReserveEmergency": "3 SGD"
        },
        "Summary": {
          "DailySpendingLimit": "45 SGD"
        },
        "Note": {
          "Notes": "This budget assumes a relatively healthy lifestyle with moderate healthcare needs given the age of 50. Choices for meals include chicken rice, wanton noodles, or similar options within the budget."
        }
      }
    };

    // Update the responses data in the parent component
    updateResponses(newResponsesData);
  };

  return (
    <Card p='20px' align='center' direction='column' w='100%'>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Text color={textColor} fontSize='lg' fontWeight='700'>
          Input financial status
        </Text>
      </Flex>

      <Flex alignItems='center' w='100%' mb='30px'>
        <Input
          placeholder="Age"
          borderRadius="16px"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Flex>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Input
          placeholder="Income"
          borderRadius="16px"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </Flex>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Input
          placeholder="Expenses"
          borderRadius="16px"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
      </Flex>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Input
          placeholder="Healthcare"
          borderRadius="16px"
          value={healthcare}
          onChange={(e) => setHealthcare(e.target.value)}
        />
      </Flex>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Button variant="brand" onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Card>
  );
}
