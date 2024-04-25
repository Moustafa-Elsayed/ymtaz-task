import SearchBar from "@/components/sharedComponent/searchBar/SearchBar";
import React from "react";
import axios from "axios";
import { client_url } from "@/constats/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import CustmomId from "@/components/CustmomId";

const DynamicData = () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4"; // Replace "your_token_here" with your actual token

  async function fetchData() {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const requestData = {
      // Provide any data you need to send in the request body
    };

    try {
      const response = await axios.post(
        `${client_url}digital-guide/search`,
        requestData,
        { headers: headers }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      throw new Error("Failed to fetch data");
    }
  }

  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["lawyer"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <SearchBar />
      <CustmomId data={data} />
    </>
  );
};

export default DynamicData;
