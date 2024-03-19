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
          color: getCategoryColor(item.category), // 카테고리에 따른 색상 설정
        }))
      );
    } catch (error) {
      console.error("Error fetching calendar data:", error);
    }
  };

  // 카테고리에 따라 색상 반환하는 함수
  const getCategoryColor = (category) => {
    switch (category) {
      case "APT":
        return "#008CBA";
      case "신혼희망타운":
        return "#f44336";
      case "공공지원민간임대":
        return "#555555";
      case "도시형/오피스텔/생활숙박시설/민간임대":
        return "blue";
      case "계약취소주택":
        return "indigo";
      case "무순위/잔여세대":
        return "purple";
      case "임의공급":
        return "green";
      default:
        return "black"; // 기본값
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
          style={{ gridColumn: "2", width: "100%" }} // 전체 너비로 설정
        />
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default MyCalendar;
