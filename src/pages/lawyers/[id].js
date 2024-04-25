import { useRouter } from "next/router";
import React from "react";
import { client_url } from "@/constats/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PersonCard from "@/components/profile/PersonCard";
import Define from "@/components/profile/Define";
import Rating from "@/components/profile/Rating";
import Review from "@/components/profile/Review";
import InfoCard from "@/components/profile/InfoCard";

const DynamicData = () => {
  const router = useRouter();
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4"; // Replace "your_token_here" with your actual token
  async function fetchData() {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(
        `${client_url}lawyer/${router.query.id}`,
        { headers }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-row justify-center items-start gap-5 px-10">
      <div>
        <InfoCard />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <PersonCard data={data} />
        <Define />
        <Rating />
        <Review />
      </div>
    </div>
  );
};

export default DynamicData;
