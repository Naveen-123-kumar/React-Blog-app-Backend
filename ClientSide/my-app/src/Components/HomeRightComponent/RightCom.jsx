import React from "react";
import { Box,Typography } from "@mui/material";

export default function RightCom() {
  return (
    <>
      <Box
        borderRadius="10px"
        sx={{
          width: { md: "100%", xs: "450px" },
          height: { md: "210px", xs: "50vh" },
          backgroundImage: `url(https://assets.thehansindia.com/h-upload/feeds/2019/07/08/193862-kiara.jpg)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Typography
          variant="h5"
          py={"auto"}
          color="white"
          paddingTop={"100px"}
          paddingLeft="50px"
        >
          When Kabir Singh opened up a can of worms
        </Typography>
        <Typography
          variant="subtitle1"
          color={"wheat"}
          py={"auto"}
          paddingLeft="50px"
        >
          Travel/ August 19 2022
        </Typography>
      </Box>
    </>
  );
}
