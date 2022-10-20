import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errState, setErrState] = useState(false);

  useEffect(() => {
    setLoadStatus(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results)) // since all api data have a results property,which is an array of objects,we are accessing it and storing it onto our state.
      .then(() => setLoadStatus(false))
      .catch((err) => setErrorMessage(err.message))
      .catch(() => setErrState(true));
  }, [url]); // the url passed into the dependency array means that if our url changes, the hook needs to execute again to fetch new data.
  return {
    info: data,
    loadingStatus: loadStatus,
    errorMessage: errorMessage,
    errorState: errState,
  };
  /* this hook returns an object with two properties 'info' which stores an array of data 
  and 'loadingStatus' which stores the loading status */
};
export default useFetch;
