import { useState } from "react";
import { signInValidation } from "../utils/helper";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getContextData } from "../context/AuthContexProvider";

const useSignIn = () => {
  const [loadig, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setRole } = getContextData();

  const signIn = async (formData) => {
    const isValid = signInValidation(formData);

    if (!isValid) return;

    const { email, password, role } = formData;

    let url = null;

    if (role === "admin") {
      url = "/api/admin/signin";
    }

    if (role === "user") {
      url = "/api/users/signin";
    }

    try {
      setLoading(true);
      const res = await axios.post(url, {
        email,
        password,
        role,
      });

      if (!res.data.success) {
        return toast.error(res.data.message);
      }

      toast.success(res.data.message);
      navigate("/");

      localStorage.setItem("user", JSON.stringify(res.data.data));
      localStorage.setItem("role", role);
      setRole(role)
      setUser(res.data.data);
      //here we set data in localStorage

      toast.success(res.data.message);
    } catch (e) {
      return toast.error("Internal server error", e.error);
    } finally {
      setLoading(false);
    }
  };

  return { loadig, signIn };
};

export default useSignIn;
