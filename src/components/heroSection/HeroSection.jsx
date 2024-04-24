import React from "react";
import CustomCard from "../sharedComponent/customCard/CustomCard";
import Union from "../../images/Union.svg";
import SearchBar from "../sharedComponent/searchBar/SearchBar";
import { useQuery } from 'react-query';
import axios from 'axios'; 
import { client_url } from "@/constats/constant";

function fetchData(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.get(`${client_url}digital-guide/categories`, { headers }); 
}

function HeroSection() {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4"; // Replace "your_token_here" with your actual token
  const { isLoading, error, data } = useQuery('myData', () => fetchData(token));
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex justify-center items-center pb-10">
        <SearchBar />
      </div>
      <div className="p-3 grid grid-cols-3 gap-4 px-40">
      {data.data.data.categories.map((person)=>(<CustomCard key={person.id} src={person.image} title={person.title} header={person.lawyers_count} href={"/search"} />)) }     
      </div>
    </>
  );
}

export default HeroSection;