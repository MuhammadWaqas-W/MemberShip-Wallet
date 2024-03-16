import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dotimg from "../../assets/home/dots.svg";

const Careers = () => {
  return (
    <>
      <Container maxWidth="xxl">
        <Box
          sx={{
            display: { lg: "flex", xs: "none" },
            pr: "50px",
            position: "relative",
          }}
        >
          <img
            src={dotimg}
            alt="img"
            style={{
              marginLeft: "auto",
              position: "absolute",
              right: 70,
              top: 170,
            }}
          ></img>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sx={{ mt: "180px" }}>
            <Typography
              className="text-font"
              sx={{
                color: "#8155FF",
                textAlign: "center",
                // fontFamily: "Outfit sans-serif !important",
                fontSize: "60px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "72px",
                letterSpacing: "-1.2px",
              }}
            >
              Careers
            </Typography>
            <Typography
              className="text-font"
              sx={{
                color: "var(--gray-scale-gray-500, #667085)",
                textAlign: "center",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "32px",
                letterSpacing: "0.2px",
                mt: "24px",
              }}
            >
              A career in membership wallet involves managing and enhancing
              digital platforms and applications that offer membership <br />
              services, often focusing on customer engagement, retention, and
              improving user experiences.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Careers;
