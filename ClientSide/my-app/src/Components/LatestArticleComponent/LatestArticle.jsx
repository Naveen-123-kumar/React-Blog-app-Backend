import { Box, Grid, Paper, Typography } from "@mui/material";
import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function LatestArticle() {
  return (
    <>
    <Cards />
    </>
  )
}
const Cards = (props) => {
    const [movie_Data, setMovie] = useState([]);
  const { hollywood } = useParams();

//   const url =useLocation();
// const currentPage = url.pathname;
const getData1 = async () => {
  const data = await axios.get(`http://localhost:4005/hollywood`).then((res)=>res.data).then((data)=>setMovie(data));

};

console.log(movie_Data)
  useEffect(() => {
    getData1();
  }, [hollywood]);
  const listitems =movie_Data?.slice(0,3).map((card,index) => (
    <Grid item lg={4} xs={12} >
        <Link to={`/hollywood/${card.id}`} style={{ textDecoration: "none" }}>
  
      <Box sx={{ width: { xs: "100%", md: "100%" }, paddingTop: {md:'30px',xs:'30px'}}}>
        <Paper elevation={1}>
          <Box
            sx={{
              width: { md: "390px", xs: "350px" },
              height: { md: "30vh", xs: "30vh" },
              backgroundImage: `url(${card.img1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            borderRadius="10px"
            textAlign="left"
          />
          <Box paddingLeft={"50px"}>
            <Typography variant="h5" py={"auto"}>
              {card.Heading1}
            </Typography>
            <Typography variant="h5" py={"auto"}>
              {card.Heading2}
            </Typography>
            <Typography variant="subtitle2" py={"auto"}>
              {card.sub1}
            </Typography>
            <Box paddingTop={"20px"} paddingBottom="15px">
              <Typography variant="subtitle1" py={"auto"}>
                <b>{card.subh1}</b> {card.date1}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
      </Link>
    </Grid>
  ));
  return (
    <>
      <Grid container spacing={3}>
        {listitems}
      </Grid>
    </>
  );
};