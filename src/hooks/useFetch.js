import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results)) // since all api data have a results property,which is an array of objects,we are accessing it and storing it onto our state.
      .catch((err) => console.log(err.message));
  }, [url]); // the url passed into the dependency array means that if our url changes, the hook needs to execute again to fetch new data.
  return data;
};
export default useFetch;
