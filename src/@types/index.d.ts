export type MainProcessResponse<T> = {
  status: "ok" | "error";
  data?: T;
};
