export interface BackendError {
  success: boolean;
  error: {
    code: string;
    message: string;
    details?: Record<string, string>;
  };
}
