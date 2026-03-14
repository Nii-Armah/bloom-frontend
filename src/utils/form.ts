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

export function setManualServerErrors(
  error: ApiError,
  setErrorsState: (errors: Record<string, string>) => void,
) {
  if (error.code === "VALIDATION_ERROR" && error.details) {
    const newErrors: Record<string, string> = {};

    Object.entries(error.details).forEach(([key, message]) => {
      newErrors[key] = message as string;
    });

    setErrorsState(newErrors);
  } else if (error.message) {
    setErrorsState({ nonFieldErrors: error.message });
  }
}
