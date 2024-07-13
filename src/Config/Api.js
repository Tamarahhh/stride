import axios from "axios";

const API_KEY = "ab88e71eabfa4722a43f50110939644220240712191917113630";
const API_URL = "https://api.timbu.cloud/v1";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
