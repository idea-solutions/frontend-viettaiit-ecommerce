import { useEffect, useState } from "react";
import httpRequest from "../services/httpRequest";
function useDataDetail(url) {
  const [data, setDataDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getDataDetailAsync = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await httpRequest.get(url);
      setDataDetail(data.data);
      setIsLoading(true);
      setIsError(false);
    } catch (error) {
      console.log("my error : ", error);
      setIsError(true);
    }
  };
  useEffect(() => {
    getDataDetailAsync(url);
  }, [url]);
  return { data, isLoading, isError };
}
export default useDataDetail;
