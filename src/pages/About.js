import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "2rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        We are a tight-knit, fun-loving, devoted team of local cooks spreading the gospel of good times and good food in (CN).  We offer limited capacity onsite events in our restaurant kitchen space. And worry not, our krewe will travel to your destination of choice – from hotel ballrooms to private kitchens – to entertain groups of all sizes. We cook, we tell stories, we deliver informative culinary demonstrations and lectures, but most of all … we treat every event like you’re a guest at our dinner table. Join us!
        </p>
        <br />
        <p>
        The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert! 


        </p>
      </Box>
    </Layout>
  );
};

export default About;