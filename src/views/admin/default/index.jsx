// index.jsx (UserReports Component)
import React, { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import InputExpense from "views/admin/default/components/InputExpense";
import Response from "views/admin/default/components/Response";
import responsesData from "views/admin/default/variables/responsesData.json";

export default function UserReports() {
  const [responses, setResponses] = useState(responsesData);

  const updateResponses = (newResponsesData) => {
    setResponses(newResponsesData);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
        <InputExpense updateResponses={updateResponses} />
      </SimpleGrid>
      
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
        <Response data={responses} />
      </SimpleGrid>
    </Box>
  );
}