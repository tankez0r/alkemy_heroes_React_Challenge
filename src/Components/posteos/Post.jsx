import React, { useEffect, useState } from "react";
import { getPOST } from "../Service/service";

const Post = () => {
  const [data, setData] = useState({})
  const urlPost = new URLSearchParams(window.location.search);
const postId = urlPost.get("id");
  useEffect(() => {
    getPOST(setData,postId)
    
  }, [])
console.log(data)
  return (
    <div className="mt-3 shadow-box border">
      <h3 className="offset-1 col-10 h4"> {data.title} </h3>
      <p className="offset-2 col-10"> {data.body} </p>
    </div>
  );
};

export default Post;
