import axios from "axios";
import { Box } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { category, id } = useParams();
  console.log(category, id);

  const [postData, setPostData] = useState({});
  const getPost = async (postId) => {
    await axios
      .get(`http://localhost:4005/${category}/${id}`)
      .then((res) => res.data)
      .then((data) => setPostData(data));
  };
  console.log(postData);

  useEffect(() => {
    getPost();
  }, [id]);
  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "98vw" }, paddingTop: "60px" }}>
        <Box
          sx={{
            width: { md: "1000px", xs: "340px" },
            height: { md: "70vh", xs: "30vh" },
            backgroundImage: `url(${postData?.img1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            mx: "auto",
            marginTop: "10vh",
          }}
          borderRadius="10px"
          //   textAlign="left"
        />
        <Box
          style={{
            height: "10vh",
            width: "80vw",
            margin: "auto",
            marginTop: "10vh",
            paddingBottom: "5vh",
          }}
        >
          <h1>{postData?.Heading1}</h1>
          <p>{postData?.blog}</p>
        </Box>
      </Box>
    </>
  );
};

export default Post;
