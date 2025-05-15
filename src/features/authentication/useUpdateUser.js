import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      if (!data || !data.user) {
        toast.success("User account updated (no user data returned)");
        return;
      }

      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], data.user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
