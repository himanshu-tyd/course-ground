import { useState } from "react";
import { signUpValidation } from "../utils/helper";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (formData) => {
    const isValid = signUpValidation(formData);

    if (!isValid) return;

    try {
      setLoading(true);
      if (formData.role == "admin") {
        const res = await axios.post("/api/admin/signup", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });

        if(!res.data.success){
          return toast.error(res.data.message)
        }

        toast.success(res.data.message);
        navigate("/signin");
        setLoading(false);
      }

      if (formData.role == "user") {
        const res = await axios.post("/api/users/signup", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });
        
        if(!res.data.success){
          return toast.error(res.data.message)
        }

        toast.success(res.data.message);
        navigate("/signin");
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      return toast.error(`Opps something went wrong try again ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

export default useSignUp;
