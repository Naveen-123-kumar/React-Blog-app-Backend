import React from "react";
import { Box, Paper, Typography,Hidden } from "@mui/material";
// import LandingPage from "../Components/LandingPage/LandingPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import PaperComponent from "../Components/LatestComponent/PaperComponent";
// import LatestPaper from "../Components/LatestStoriesComponent/LatestPaper";
// import MainPage from "../Components/LatestArticleComponent/MainPage";
import { Link } from "react-router-dom";
import RightCom from "../Components/HomeRightComponent/RightCom";
import LatestArticle from "../Components/LatestArticleComponent/LatestArticle";
import LatestStories from "../Components/LatestStoriesComponent/LatestStories";
// import Card1 from "../Components/ReactAnimationComponent/Card1";
export default function HomePage() {
  return (
    <>
      <Paper elevation={0}>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"row"}
        width="90%"
        sx={{
          width: { md: "90%", xs: "98%" },
          paddingTop: { xs: "20px", md: "150px" },
          paddingBottom: { xs: "50px", md: "50px" },
        }}
        mx="auto"
      >
        <Box
          sx={{
            width: { md: "900px", xs: "450px" },
            height: { md: "70vh", xs: "50vh" },
            backgroundImage: `url(https://filmfare.wwmindia.com/thumb/content/2022/jun/toptensongsofjubinnautiyalyoumustlistentoonhisbirthday11655189119.jpg?width=1200&height=900)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          borderRadius="10px"
          textAlign="left"
        >
          <Typography
            variant="h5"
            py={"auto"}
            color="white"
            paddingTop={"250px"}
            paddingLeft="50px"
          >
           Jubin Nautiyal
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
        <Hidden smDown>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: { md: "400px" } }}
            paddingLeft="20px"
            justifyContent={"space-between"}
            borderRadius="10px"
          >
            {/* <Box
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
            </Box> */}
            <RightCom/>

            <RightCom/>
            {/* <Box
              borderRadius="10px"
              sx={{
                width: { md: "100%", xs: "450px" },
                height: { md: "210px", xs: "50vh" },
                backgroundImage: `url(https://c.ndtvimg.com/2019-07/2k7qj7u_kabir-singh-instagram_625x300_03_July_19.jpg)`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Typography
                variant="h6"
                py={"auto"}
                color="white"
                paddingTop={"120px"}
                paddingLeft="50px"
              >
                The film is about to complete its second week at the theatres
              </Typography>
              <Typography
                variant="subtitle1"
                color={"wheat"}
                py={"auto"}
                paddingLeft="50px"
              >
                Travel/ August 19 2022
              </Typography>
            </Box> */}
          </Box>
        </Hidden>
      </Box>
        {/* <LandingPage /> */}
        <Box
          mx="auto"
          paddingTop="20px"
          sx={{
            paddingBottom: { md: "80px", xs: "40px" },
            width: { md: "90%", xs: "98%" },
          }}
        >
          <Typography variant="h4">The Latest</Typography>
          {/* <PaperComponent /> */}
          <LatestArticle/>
        </Box>
        {/* <MainPage /> */}
        <Box
          mx="auto"
          width="90%"
          paddingTop="80px"
          sx={{ paddingBottom: { md: "80px", xs: "30px" } }}
        >
          <Typography variant="h4"> Latest Stories</Typography>
          <br />
          {/* <br /> */}
          <hr />
       <LatestStories/>
          {/* <Card1/> */}
        </Box>
        <Box
          display={"flex"}
          sx={{
            paddingLeft: { xs: "20px", md: "70px" },
            paddingBottom: { xs: "20px", md: "40px" },
          }}
        >
          <Link to="/technology">
            <Typography variant="caption text" paddingTop={"5px"}>
              LOAD MORE
            </Typography>
          </Link>
          <Link to="/bollywood">
            <ArrowForwardIcon fontSize="medium"/>
          </Link>
        </Box>
      </Paper>
    </>
  )
}


