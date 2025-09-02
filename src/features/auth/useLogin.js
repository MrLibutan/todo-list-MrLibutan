import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../services/api";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isLoggingin, mutate: login } = useMutation({
    mutationFn: loginAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/home", { replace: true });
    },
    onError: (err) => alert(err.message),
  });

  return { isLoggingin, login };
}
