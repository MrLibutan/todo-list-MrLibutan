import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutAPI } from "../../services/api";

export function useLogout() {
  const navigate = useNavigate();
  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });

  return { isPending, logout };
}
