import SearchBar from "@/components/sharedComponent/searchBar/SearchBar";
import { client_url } from "@/constats/constant";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from 'axios'; 

function Profile() {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4"; // Replace "your_token_here" with your actual token

  // State to store the fetched lawyer data
  const [lawyerData, setLawyerData] = useState(null);

  const fetchData = async (id) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(`${client_url}lawyer/${id}`, { headers });
      setLawyerData(response.data);
    } catch (error) {
      console.error("Error fetching lawyer data:", error);
    }
  };

  const { isLoading, error } = useQuery('lawyerData', () => fetchData(id), {
    enabled: false, // Disabled by default, fetch manually when needed
  });

  return (
    <>
      <div className="flex justify-center items-center pb-10">
        <SearchBar />
      </div>
      {isLoading ? (
        <div>Loading lawyer data...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : lawyerData ? (
        <div className="p-3">
          {/* Display fetched lawyer data here */}
          <h2>{lawyerData.name}</h2>
          <p>{lawyerData.description}</p>
          {/* Add more fields as needed */}
        </div>
      ) : null}
    </>
  );
}

export default Profile;
