package com.multi.dahon.stock.model.vo;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DynamicInsert
@DynamicUpdate
public class StockPrice {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public  int spno;
	
	@ManyToOne
	@JoinColumn(name = "sno")
	public  Stock stock;
	
	@Column
	public  int sdate;
	
	@Column(length = 30)
	public  String scode;
	
	@Column(length = 30)
	public  String sname;
	
	@Column
	public  int clpr;
	
	@Column
	public int mkp;

	@Column
	public int hipr;

	@Column
	public int lopr;

	@Override
	public String toString() {
		return "StockPrice [spno=" + spno + ", stock=" + stock + ", sdate=" + sdate + ", scode=" + scode + ", sname="
				+ sname + ", clpr=" + clpr + ", mkp=" + mkp + ", hipr=" + hipr + ", lopr=" + lopr + "]";
	}

}
