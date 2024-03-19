package com.multi.dahon.housing.model.vo;

public class HouseCalendarParam {
    private String title;
    private String category;
    private String date;

    public HouseCalendarParam() {
    }

    public HouseCalendarParam(String title, String category, String date) {
        this.title = title;
        this.category = category;
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "HouseCalendar{" +
                "title='" + title + '\'' +
                ", category='" + category + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
