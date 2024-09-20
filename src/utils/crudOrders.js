import { axiosInstance } from "./api";

export const getAllOrders = async () => {
  let data;
  const res = await axiosInstance.get("/api-orders/orders");
  data = res.data;
  return data;
};

export const getOrderById = async (id) => {
  let data;
  const res = await axiosInstance.get(`/api-orders/order/${id}`);
  data = res.data[0];
  return data;
};

export const editOrder = async (dataUpdate) => {
  await axiosInstance.put("/api-orders/update-order", dataUpdate);
};

export const deleteOrder = async (id) => {
  await axiosInstance.delete(`/api-orders/delete-order/${id}`);
};
