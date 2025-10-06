import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "sonner";

const BASE_URL = "http://localhost:4001/api";

export const useFetch = (baseUrl = BASE_URL) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async ({ url, method = "GET", data, headers = {}, showToast = true }) => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios({
          url: `${baseUrl}${url}`,
          method,
          ...(data ? { data } : {}),
          headers: { "Content-Type": "application/json" },
          ...headers,
          withCredentials: true,
        });

        if (showToast) toast.success(res.data?.msg || "Success");
        return { success: true, data: res.data };
      } catch (error) {
        if (showToast) toast.error(error.message || "Failed");
        return { success: false };
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  return { request, loading, error };
};
