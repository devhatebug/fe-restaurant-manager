import { axiosInstance } from "./api";

const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get("/api-users/users");
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default getAllUsers;
