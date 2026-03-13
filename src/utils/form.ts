import { UseFormSetError, FieldValues, Path } from "react-hook-form";
import { ApiError } from "@/api/apiClient";

export function setServerErrors<T extends FieldValues>(
  error: ApiError,
  setError: UseFormSetError<T>,
) {
  if (error.code === "VALIDATION_ERROR" && error.details) {
    Object.entries(error.details).forEach(([key, message]) => {
      setError(key as Path<T>, {
        type: "server",
        message: message as string,
      });
    });
  }
}
