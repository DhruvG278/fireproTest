import axios from "axios";

export const fetchAllBlogsAPI = async () => {
  return await axios.get("/api/public/blogs");
};
