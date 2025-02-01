import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const cloud_preset = import.meta.env.VITE_CLOUD_PRISET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const useCloudnaryUpload = () => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    if (!file) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("cloud_name", cloud_name);
      formData.append("upload_preset", cloud_preset);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );

      return res.data.url;
    } catch (e) {
      console.log(e);
      toast.error("opps something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  return { loading, uploadImage };
};

export default useCloudnaryUpload;
