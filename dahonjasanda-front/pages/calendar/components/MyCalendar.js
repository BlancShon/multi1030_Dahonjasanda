import React, { useState, useEffect } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import koLocale from "@fullcalendar/core/locales/ko";
import styles from "./MyCalendar.module.css";
import MyCalendarDesign from "./MyCalendarDesign";
import axios from "axios";

const MyCalendar = () => {
  return (
    <div>
      <MyCalendarDesign />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2.5fr 1fr",
        }}
      >
        <div></div>
        <FullCalendar
          headerToolbar={{
            start: "prev",
            center: "title",
            end: "next",
          }}
          height={"120vh"}
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          locales={[koLocale]}
          locale="ko"
          className={styles.fullCalendar}
          style={{ gridColumn: "2" }}
        />
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default MyCalendar;
