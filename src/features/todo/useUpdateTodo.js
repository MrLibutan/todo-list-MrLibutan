import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo as updateTodoAPI } from "../../services/api";

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const { isPending, mutate: updateTodo } = useMutation({
    mutationFn: updateTodoAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { isPending, updateTodo };
}
