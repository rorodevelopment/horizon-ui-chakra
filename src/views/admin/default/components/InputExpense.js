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
          "Breakfast": {
            "items": {
              "FairPrice White Bread - Enriched": "0.20 SGD (1 slice)",
              "Yakult Cultured Milk Bottle Drink - Original": "0.71 SGD (1 bottle)"
            }
          },
          "Lunch": {
            "items": {
              "Assorted Mui Fan": "3.00 SGD",
              "Kopi O": "1.00 SGD"
            }
          },
          "Dinner": {
            "items": {
              "Economy Rice (2 Veg & 1 Meat)": "3.40 SGD",
              "Teh O": "1.00 SGD"
            }
          },
          "Snacks": {
            "items": {
              "Pasar Fresh Blueberries": "0.78 SGD (20g)"
            }
          },
          "TotalForMeals": "10.09 SGD"
        },
        "Healthcare": {
          "Medication": "Optional based on specific health needs"
        },
        "Transportation": {
          "DailyTransportation": "0.46 SGD (taking public transport into account)"
        },
        "LeisureOther": {
          "LeisureOther": "0.98 SGD"
        },
        "ReserveEmergency": {
          "ReserveEmergency": "0.98 SGD"
        },
        "Supermarket": {
          "items": {
            "Toilet Paper (FairPrice Facial Tissues - Soft Pack (2ply))": "0.13 SGD",
            "Hand Soap (FairPrice Moisturising Hand Soap Refill - Violet & Jasmine)": "0.09 SGD",
            "Eggs (Pasar Fresh Eggs - 1 piece)": "0.12 SGD"
          },
          "Total": "0.34 SGD"
        },
        "Summary": {
          "DailySpendingLimit": "12.85 SGD"
        },
        "Note": {
          "Notes": "All prices are averaged based on the provided supermarket data and nearby cheap food options. Recommendations include items rich in nutrition while being budget-conscious. Consider potential medication needs not included in daily spending and adjust accordingly. Ensure that the sum of daily and monthly expenses does not exceed 500 SGD."
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
