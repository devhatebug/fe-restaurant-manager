import {useState} from "react";
import { axiosInstance } from "./api";
const getProById = () => {
    const [data, setData] = useState();
    const getProduct = async (id) => {
      try {
        const proSelect = await axiosInstance.get(`/api-menu/menu/${id}`);
        setData(proSelect.data);
      } catch (err) {
        console.log(err);
      }
    };

    return {
        getProduct, data
    }
}

export default getProById;