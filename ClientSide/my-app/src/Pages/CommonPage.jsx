import { Box, Grid, Typography } from "@mui/material";
import React from 'react';
import { useParams } from 'react-router-dom';
import Commoncom1 from '../Components/CommonComponent/Commoncom1';
import Commoncom2 from '../Components/CommonComponent/Commoncom2';

export default function CommonPage() {

  const {category} = useParams();
  // console.log(category)
  // const url=useLocation();
  // const  currentPage=url.pathname;
  // var title=currentPage.split("/");
  // console.log(title)
  return (
    <>
    <Box
        bgcolor={"white"}
        px="auto"
        mx="auto"
        sx={{
          width: { md: "100%", xs: "100%" },
          paddingY: { md: "10%", xs: "15%" },
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item lg={6} xs={12}>
            <Box mx="auto" width={"100%"}>
              <Typography variant="h4" fontWeight={"bold"} padding="20px">
               {category}
              </Typography>
            </Box>
            <Commoncom1/>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box mx="auto" width={"100%"}>
              <Typography variant="h4" fontWeight={"bold"} padding="20px">
                Top Post
              </Typography>
            </Box>
            <Commoncom2/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
