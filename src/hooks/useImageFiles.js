import { useState, useEffect } from "react";

const useImageFiles = () => {
  const [imageUrl, setImageUrl] = useState("");

  //fetching configuration files containing base image URLs
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/configuration?api_key=73585424b9d1198974dbb05a54c359df"
    )
      .then((response) => response.json())
      .then((data) => setImageUrl(data.images.secure_base_url))
      .catch((error) => console.log(error.message));
  }, []);
  return imageUrl;
};

export default useImageFiles;
