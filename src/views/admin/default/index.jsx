// index.jsx (UserReports Component)
import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import InputExpense from "views/admin/default/components/InputExpense";
import Response from "views/admin/default/components/Response";

export default function UserReports() {
  const [responses, setResponses] = useState({});

  const updateResponses = (newResponsesData) => {
    console.log("Set has been received");
    setResponses(newResponsesData);
    console.log(newResponsesData);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
        <InputExpense updateResponses={updateResponses} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
        <Response data={responses} />
      </SimpleGrid>
    </Box>
  );
}
