import { Environment, Network, RecordSource, Store } from "relay-runtime";

const apiUrl =
  "https://fmbw6ojamjhnnbjpot332pyelu.appsync-api.us-east-2.amazonaws.com/graphql";
const apiKey = "da2-pdyhgu7edndonbkpb57tflcj5y"; // Or JWT token for Cognito

// Custom fetch function to handle GraphQL requests
const fetchQuery = async (operation, variables) => {
  const query = operation.text; // GraphQL query or mutation text
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": apiKey, // Or use JWT for Cognito-based authentication
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log(responseData.data);

    return responseData;
  } catch (error) {
    console.error("Error executing GraphQL query:", error);
    throw new Error("Network error");
  }
};

// Setup Relay environment with custom network layer
const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;
