// import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com";

// export default async function MyTopic(query, currentPage) {
//   const response = await axios.get(`/search/photos`, {
//     params: {
//       client_id: "qm2FJcEw2XiQlqKPIJXTe4Mos7AfCrVC1RB7jgLHqF4",
//       query: query,
//       page: currentPage,
//       per_page: 9,
//     },
//   });
//   return response.data.results;
// }

import axios from "axios";
import { Image } from "./components/App/App.types";

const API_KEY = "qm2FJcEw2XiQlqKPIJXTe4Mos7AfCrVC1RB7jgLHqF4";
const BASE_URL = "https://api.unsplash.com";

interface ApiResponse {
  results: Image[];
}

export default async function MyTopic(
  query: string,
  page: number
): Promise<Image[]> {
  const response = (await axios.get)<ApiResponse>(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      client_id: API_KEY,
    },
  });

  return response.data.results.map((img) => ({
    id: img.id,
    url: img.urls.small,
    alt: img.alt_description,
    likes: img.likes,
    description: img.description,
    author: img.user.name,
  }));
}
