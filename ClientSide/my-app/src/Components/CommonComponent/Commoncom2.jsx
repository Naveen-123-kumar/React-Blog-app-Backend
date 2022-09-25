import React from 'react'
import { Box, Hidden, Paper, Typography } from "@mui/material";
import Commoncom3 from './Commoncom3';
import { useContext } from 'react';
export default function Commoncom2() {
  return (
    <>
    <Box>
        <Paper elevation={1}>
          <Box paddingLeft={"15px"}>
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "33vh", xs: "25vh" },
                backgroundImage: `url(https://media.newstrack.in/amp/uploads/entertainment-news/hollywood-news/Jan/01/big_thumb/ddss_5e0c882d3d550.jpg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
            />

            <Box
              sx={{
                width: { md: "450px", xs: "350px" },
                paddingTop: { md: "15px", xs: "30px" },
              }}
              // paddingBottom="20px"
            >
              <Typography variant="h6" py={"auto"}>
              This Hollywood actress shares hot picture on social media, fans go amazed
              </Typography>
              {/* <Typography variant="h4" py={"auto"}>
                an Adventure Guide
              </Typography> */}

              <Box paddingTop={"5px"} paddingBottom="20px">
                <Typography variant="caption text" py={"auto"}>
                  <b>Travel</b> / August 19 2017
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Commoncom3/>
      <Hidden mdDown>
        <Box sx={{ paddingTop: { md: "20px" } }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            justifyContent={"space-between"}
            border="1px solid blue"
            borderRadius="5px"
            height={"82vh"}
          >
            <Box
              sx={{
                width: { md: "100%", xs: "330px" },
                height: { md: "100vh", xs: "100vh" },
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhB4-RctkGuYcJasxOEEIZDOMm2xmfuoZpQ&usqp=CAU)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
            />
            {/* <Typography align="center" py="auto" my="auto">
              Advertistement
            </Typography> */}
          </Box>
        </Box>
      </Hidden>
    </>
  )
}
