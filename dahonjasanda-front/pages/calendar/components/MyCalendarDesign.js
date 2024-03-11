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
        <Button backgroundColor="#008CBA" label="특별공급" />
        <Button backgroundColor="#f44336" label="1순위" />
        <Button backgroundColor="#555555" label="2순위" />
        <Button backgroundColor="blue" label="무순위" />
        <Button backgroundColor="indigo" label="오피스텔" />
        <Button backgroundColor="purple" label="공공민간임대" />
      </div>
    </div>
  );
};

export default MyCalendarDesign;
