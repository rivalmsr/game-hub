// import { AxiosRequestConfig, CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiHttp from "../services/api-http";
//
// interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }
//
// function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
//   const [data, setData] = useState<T[]>([])
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState<boolean>(false);
//
//   useEffect(() => {
//     const controller = new AbortController();
//
//     setLoading(true);
//
//     apiHttp.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
//       .then(res => {
//         setData(res.data.results);
//         setLoading(false);
//       })
//       .catch(err => {
//         if (err instanceof CanceledError) return;
//
//         setError(err.message);
//         setLoading(false);
//       });
//
//     return () => controller.abort();
//   }, deps ? [...deps] : [])
//
//   return { data, error, loading };
// }
//
// export default useData;
//

const useData = () => { }

export default useData;
