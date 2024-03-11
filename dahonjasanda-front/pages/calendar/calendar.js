import React from "react";
import Box from "@mui/material/Box";

import Main from "layouts/Main";
import Container from "components/Container";

import MyCalendar from "./components/MyCalendar";
import "./components/MyCalendar.module.css";

const calendar = () => {
  return (
    <Main>
      <Container>
        <MyCalendar />
      </Container>
    </Main>
  );
};

export default calendar;
