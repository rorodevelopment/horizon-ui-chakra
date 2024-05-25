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
import React, { useState, useEffect } from "react";

export default function InputExpense({ updateResponses }) {
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [healthcare, setHealthcare] = useState('');

  const [response, setResponse] = useState(''); // Define the setResponse state here
  const [loading, setLoading] = useState(false);
  const [test1, setTest1] = useState(null);
  const [test2, setTest2] = useState(null);

  const textColor = useColorModeValue("secondaryGray.900", "white");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('http://localhost:6969/temp.json'); // Adjust the URL to match your server's address and endpoint
        const data1 = await response1.json();
        setTest1(data1);
        const response2 = await fetch('http://localhost:6969/budget_meals.json'); // Adjust the URL to match your server's address and endpoint
        const data2 = await response2.json();
        setTest2(data2);
      } catch (error) {
        console.error("Failed to fetch JSON data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchChatCompletion = async () => {
    setLoading(true);

    const apiKey = "sk-proj-SNb71jtuaPZ3AX5KOwXcT3BlbkFJL1VIRmf1FX8rTAjqp2Wh"; // Replace with your OpenAI API key

    const promptText = `Based on the following details: Age: ${age}, Income: ${income}, Monthly Expenses: ${expenses}, Healthcare: ${healthcare}`;

    const data = {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `I want you to act as a Financial planner. 
            You are a financial planner for elderlies in Singapore,
            for the dataset used whatever information you have,
            and based on the inputs by elderlies like the age,
            monthly spending. Accounting for their age and diseases they are prone to at their age, 
            for example if given the age 80 he might be prone to certain diseases based on the statistics in your database and account for them during budgeting, 
            generate a spending limit per day, 
            make it as precise as possible up to their meals in the day.
            For the output for the Notes field please adhere strictly to the format of JSON not using special symbols.
            Minimize the expenses, but maximizes the nutrition value.
            Please account for this percentage
            {
              "FoodAndNonAlcoholicBeverages": 15.5,
              "FoodServingServices": 14.25,
              "ClothingAndFootwear": 3.75,
              "Transport": 9.25,
              "HousingAndUtilities": 15,
              "FurnishingsEquipmentMaintenance": 7,
              "Health": 7.75,
              "Communication": 2.25,
              "RecreationAndCulture": 16.50,
              "MiscellaneousGoodsAndServices": 8.50,
              "Others": 0.25
            } for spendings. 
            You are not to exceed the monthly expenses after adding up the daily expenses plus the monthly expenses.
            Please be as precise as possible, for example giving them choices between chicken rice, wanton noodles, etc., giving them choices.
            You will be given these inputs, their Age, their Income, their current monthly expenses, and Healthcare. 
            You should output the spending limit per day strictly in this format after the quotation mark:
            "
            ----------
            {
              "DailySpendingAllocation": {
                "Meals": {
                  "Breakfast": {
                    "items": {
                      "item1": "SGD",
                      "item2": "SGD"
                    },
                  },
                  "Lunch": {
                    "items": {
                      "item1": "SGD",
                      "item2": "SGD"
                    },
                  },
                  "Dinner": {
                    "items": {
                      "item1": "SGD",
                      "item2": "SGD"
                    },
                  },
                  "Snacks": {
                    "items": {
                      "item1": "SGD",
                      "item2": "SGD"
                    },
                  },
                  "TotalForMeals": "SGD"
                },
                "Healthcare": {
                  "Medication": "SGD"
                },
                "Transportation": {
                  "DailyTransportation": "SGD"
                },
                "LeisureOther": {
                  "LeisureOther": "SGD"
                },
                "ReserveEmergency": {
                  "ReserveEmergency": "SGD"
                },
                "Supermarket": {
                  "items": {
                    "item1": "SGD",
                    "item2": "SGD"
                  },
                  "Total": "SGD"
                },
                "Summary": {
                  "DailySpendingLimit": "SGD"
                },
                "Note": {
                  "Notes": ""
                }
              }
            }
            ----------
            " 
          `,
        },
        {
          role: "user",
          content: promptText,
        },
        {
          role: "user",
          content: "Here's data for the supermarket: " + JSON.stringify(test1),
        },
        {
          role: "user",
          content: "Here's data for cheap food around us: " + JSON.stringify(test2),
        },
        {
          role: "user",
          content: "Generate in-depth stating the supermarket's in-depth items based on the information I provided, put the extra information in notes",
        },
      ],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const result = await response.json();
      const messageContent = result.choices[0].message.content;
      const dailySpendingAllocationPart = messageContent.split('----------')[1];
      if (dailySpendingAllocationPart) {
        try {
          const parsedData = JSON.parse(dailySpendingAllocationPart);
          setResponse(parsedData);
          console.log(parsedData);
          updateResponses(parsedData);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          setResponse("Error parsing data");
        }
      } else {
        console.error("Invalid response format");
        setResponse("Error fetching data");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching data");
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchChatCompletion();
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p></p>
      )}
    </Card>
  );
}
