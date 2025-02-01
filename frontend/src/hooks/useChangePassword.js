import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const changePassword = async (data) => {
    const { current_password, new_password, confirm_password } = data;

    try {
      if (!validataPassword(data)) return;

      let url = null;

      const role = localStorage.getItem("role");

      if (role === "user") {
        url = "/api/users/update-password";
      }

      if (role === "admin") {
        url = "/api/admin/update-password";
      }

      setLoading(true);
      const res = await axios.post(url, {
        current_password,
        new_password,
        confirm_password,
      });

      if (!res.data.success) {
        return toast.error(res.data.message);
      }

      toast.success(res.data.message);
    } catch (e) {
      return toast.error(
        "Opps something get wrong while updating password" + e
      );
    } finally {
      setLoading(false);
    }
  };

  return { changePassword, loading };
};

const validataPassword = (data) => {
  const { current_password, new_password, confirm_password } = data;
  if (!current_password || !new_password || !confirm_password) {
    toast.error("All fields are required");
    return false;
  }

  if (new_password !== confirm_password) {
    toast.error("password did not matched");
    return false;
  }

  return true;
};
