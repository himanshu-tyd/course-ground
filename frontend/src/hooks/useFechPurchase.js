import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useFetchPurchase = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);

        const context = res.data;

        if (!context.success) {
          return toast.error(context.message);
        }

         setData(context);


      } catch (error) {
        setError(error.message);
        return toast.error("!oops something get wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { loading, error, data };
};
