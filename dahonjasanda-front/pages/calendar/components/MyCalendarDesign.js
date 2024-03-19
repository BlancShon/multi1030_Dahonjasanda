import React from "react";
import Button from "./Button"; // Button 컴포넌트 import

const MyCalendarDesign = () => {
  const calendarStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const titleStyle = {
    color: "white",
    fontSize: "36px",
    padding: "18px",
    margin: "0 auto", // 가운데 정렬을 위해 margin 수정함.=
    marginTop: "0px",
    backgroundColor: "#2980b9", // 배경 색상 값
    borderRadius: "10px",
    width: "50%", // 배경 색상의 크기 조절
  };

  const paragraphStyle = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    marginTop: "3px",
  };

  return (
    <div style={calendarStyle}>
      <h1 style={titleStyle}>청약캘린더</h1>
      <p style={paragraphStyle}>
        *원하시는 공급유형을 선택해서 청약일정을 확인해보세요
      </p>
      <br />
      <div style={buttonContainerStyle}>
        <Button backgroundColor="#04AA6D" label="전체보기" />
        <Button backgroundColor="#008CBA" label="아파트(분양)" />
        <Button backgroundColor="#f44336" label="신혼희망타운(임대)" />
        <Button backgroundColor="#555555" label="공공지원민간임대" />
        <Button
          backgroundColor="blue"
          label="도시형/오피스텔/생활숙박시설/민간임대"
        />
        <Button backgroundColor="indigo" label="계약취소주택" />
        <Button backgroundColor="purple" label="무순위, 잔여세대" />
        <Button backgroundColor="green" label="임의공급(임대)" />
      </div>
    </div>
  );
};

export default MyCalendarDesign;
