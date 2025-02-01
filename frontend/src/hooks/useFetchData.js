import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useFetch = (url, setData, data) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
    let mounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);

        const context = res.data;

        if (!context.success) {
          return toast.error(context.message);
        }
        console.log(context.data);

        if (mounted) {
          await setData(context.data);
        }

        console.log(context.data)

      } catch (error) {
        setError(error.message);
        return toast.error("!oops something get wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };

    


     fetchData();

     return ()=>mounted=false

  }, []);

  return { loading, error, data };
};
