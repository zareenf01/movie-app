import axios from "axios";
import { apiKey } from "@/constants/movie";

const baseUrl = "https://api.themoviedb.org/3";
const trendingURL = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingURL = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;

const apiCall = async (endpoint: string, params?: string) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getTrending = () => {
  return apiCall(trendingURL);
};
export const getUpcoming = () => {
  return apiCall(upcomingURL);
};
