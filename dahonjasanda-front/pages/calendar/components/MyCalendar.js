import React, { useState, useEffect } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import koLocale from "@fullcalendar/core/locales/ko";
import styles from "./MyCalendar.module.css";
import MyCalendarDesign from "./MyCalendarDesign";
import axios from "axios";

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost/calendar/list", {
        withCredentials: true,
      });

      console.log(response.data); // 여기서 데이터 확인

      setEvents(
        response.data.map((item) => ({
          title: item.title,
          date: item.date,
        }))
      );
    } catch (error) {
      console.error("Error fetching calendar data:", error);
    }
  };

  return (
    <div>
      <MyCalendarDesign />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr",
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
          events={events}
          style={{ gridColumn: "2" }}
        />
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default MyCalendar;
