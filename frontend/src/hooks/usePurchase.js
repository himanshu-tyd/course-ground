import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "sonner";

const usePurchase = () => {
  const [loading, setLoading] = useState(false);

  const purchaseCourse = async (creatorId) => {
    try {
      setLoading(true);

      const res = await axios.post(`/api/users/buy/${creatorId}`);

      const context = res.data;

      if (!context.success) {
        toast.error(context.message);
        return false;
      }

      return context.data;
    } catch (e) {
      toast.error(e.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, purchaseCourse };
};

export default usePurchase;
