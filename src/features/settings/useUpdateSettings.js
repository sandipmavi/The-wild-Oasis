import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSettingApi } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isLoading: isEditing } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings Updated successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, updateSettings };
}
