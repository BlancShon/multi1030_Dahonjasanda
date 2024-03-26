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
        return "orange";
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
      <style>
        {`
          /* 전체 캘린더 컨테이너 스타일 조정 */
          .my-calendar-container {
            margin-top: 10px;
          }

          /* 전체 캘린더 컨테이너 스타일 조정 */
          .my-calendar-container {
            margin-top: 10px;
            width: 100%; /* 전체 너비 설정 */
            height: 100%; /* 전체 높이 설정 */
          }

          /* 요일과 날짜 색상 조정 */
          .fc th, .fc-daygrid-day {
            color: black;
          }

          /* 스크롤 비활성화 */
          .full-calendar {
            overflow: hidden;
          }
          /* 헤더 스타일 */
          .fc-toolbar.fc-header-toolbar {
            margin: 0;
            padding: 0 40px;
            background-color: skyblue;
            height: 63px;
            font-weight: 600;
            font-size: 15px;
            line-height: 29px;
            color: white;
            border-radius: 20px 20px 0 0;
          }

          /* 캘린더 양 옆 넘기는 버튼 스타일 */
          .fc-button, .fc-button-primary {
            background-color: transparent;
            border: none;
            color: white;
            transition: background-color 0.3s ease;
          }

          .fc-button-primary span {
            font-weight: 500;
            font-size: 28px;
          }

          .fc-button-primary:hover {
            background-color: transparent;
          }

          /* 날짜 텍스트 스타일 조정 */
          .fc-toolbar-title {
            color: white;
            font-size: 10px;
          }

          /* 테이블 헤더 스타일 조정 */
          .fc th {
            height: 32px;
            padding-top: 3.5px;
            background: #e5edff;
            border: 1px solid #dddee0;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #7b7b7b;
          }

          /* 오늘 날짜 스타일 조정 */
          .fc-daygrid-day.fc-day-today {
            background-color: #fdf8c7;
            color: #e0693a;
          }

          /* 이벤트 스타일 조정 */
          .fc-event {
            cursor: pointer;
            padding: 5px 8px;
            margin-bottom: 5px;
            border-radius: 4px;
            font-weight: 500;
            font-size: 14px;
          }

          /* 그리드 셀 스타일 조정 */
          .fc-daygrid-day-frame {
            padding: 10px;
          }

          .fc-daygrid-day-top {
            flex-direction: row;
            margin-bottom: 3px;
          }
          /* 캘린더 크기 조정 */
          .fc {
            width: 100%;
          }
        `}
      </style>

      <MyCalendarDesign />
      <div className="my-calendar-container">
        <FullCalendar
          headerToolbar={{
            start: "prev",
            center: "title",
            end: "next",
          }}
          height={"150vh"}
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          locales={[koLocale]}
          locale="ko"
          className="full-calendar"
          events={events}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
