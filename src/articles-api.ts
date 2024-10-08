import axios, { AxiosResponse } from "axios";

const key = "qm2FJcEw2XiQlqKPIJXTe4Mos7AfCrVC1RB7jgLHqF4";
axios.defaults.baseURL = "https://api.unsplash.com";

type FetchImagesParams = {
  topic: string;
  page?: number;
};

export interface Image {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  description: string;
  likes: number;
}

interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async ({
  topic,
  page = 1,
}: FetchImagesParams): Promise<FetchImagesResponse> => {
  const res: AxiosResponse<FetchImagesResponse> = await axios.get(
    "/search/photos",
    {
      params: {
        query: topic,
        page: page,
        per_page: 20,
        client_id: key,
      },
    }
  );
  return res.data;
};
