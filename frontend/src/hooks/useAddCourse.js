import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import useStore from "../zustand/useStore";

const useAddUpload = () => {
  const [loading, setLoading] = useState(false);
  const { setAdminCourse } = useStore();

  const uploadCours = async (data) => {
    const success = isvalid(data);

    if (!success) return;

    try {
      setLoading(true);
      const res = await axios.post("/api/admin/create", data);

      const context = res.data;

      if (!context.success) {
        return toast.error(context.message);
      }

      setAdminCourse(context.data);
      toast.success(context.message);

      return true

    } catch (e) {
      console.log(e.message);
      toast.error(e.message);
      return false
    } finally {
      setLoading(false);
    }
  };

  return { loading, uploadCours };
};

export default useAddUpload;

const isvalid = ({ title, desc, imageUrl, price }) => {
  if (!title || !desc || !imageUrl || !price) {
    toast.error("All field are required");

    return false;
  }

  return true;
};

