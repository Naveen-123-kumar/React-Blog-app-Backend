import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Commoncom1() {
  return (
    <>
      <Cards/>
    </>
  );
}

const Cards = (props) => {
  const [movie_Data, setMovie] = useState([]);
  const {category} = useParams();

//   const url =useLocation();
// const currentPage = url.pathname;
const getData1 = async () => {
  const data = await axios.get(`http://localhost:4005/${category}`).then((res)=>res.data).then((data)=>setMovie(data));

};

console.log(movie_Data)
  useEffect(() => {
    getData1();
  }, [category]);

  const listitems = movie_Data?.map((card, index) => (
    <Grid item lg="12" xs={12}>
      <Link to={`/${category}/${card.id}`} style={{ textDecoration: "none" }}>
        <Paper elevation={1}>
          <Box
            sx={{
              width: { xs: "100%", md: "100%" },
              display: { xs: "flex", md: "flex" },
              paddingY: { xs: "15px", md: "15px" },
            }}
          >
            <Box
              sx={{
                width: { md: "255px", xs: "150px" },
                height: { md: "22vh", xs: "17vh" },
                backgroundImage: `url(${card?.img1})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              borderRadius="10px"
              textAlign="left"
            />
            <Box
              sx={{ width: { md: "450px", xs: "200px" } }}
              paddingLeft="20px"
            >
              <Typography variant="h6" py={"auto"}>
                <b>{card.Heading1}</b>
              </Typography>

              <Typography variant="caption text" py={"auto"}>
                {card.sub1}
              </Typography>
              <Box paddingTop={"10px"} paddingBottom="5px">
                <Typography variant="caption text" py={"auto"}>
                  <b>{card.subh1}</b> {card.date1}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        spacing={1}
        display={"flex"}
        flexDirection="column"
        width={"100%"}
        paddingRight="10px"
      >
        {listitems}
      </Grid>
    </>
  );
};
