import React, { useState } from "react";
import CustomCard from "../sharedComponent/customCard/CustomCard";
import SearchBar from "../sharedComponent/searchBar/SearchBar";
import axios from "axios";
import { client_url } from "@/constats/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";



function HeroSection() {
  // Access the client
  const queryClient = useQueryClient();
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4"; // Replace "your_token_here" with your actual token

  async function fetchData(token) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(
        `${client_url}digital-guide/categories`,
        { headers }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["catogeries"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex justify-center items-center pb-10">
        <SearchBar title="الدليل الرقمي"/>
      </div>
      <div className="p-3 grid grid-cols-3 gap-4 px-40">
        {data.data.categories.map((person) => (
          <CustomCard
            key={person.id}
            src={person.image}
            title={person.title}
            header={person.lawyers_count}
            href={`lawyers`}
          />
        ))}
      </div>
    </>
  );
}

export default HeroSection;
