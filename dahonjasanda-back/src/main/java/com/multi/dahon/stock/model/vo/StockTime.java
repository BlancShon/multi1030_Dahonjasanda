package com.multi.dahon.stock.model.vo;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.multi.dahon.member.model.vo.Member;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Transactional
@DynamicInsert
@DynamicUpdate
public class StockTime {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public  int stno;
	
	@ManyToOne
	@JoinColumn(name = "sno")
	public  Stock stock;
	
	@ManyToOne
	public  Member member;
	
	@Column(length = 30)
	public  String sdate;
	
	@Column
	public  int price;
	
	@Column(length = 30)
	public  String scode;
	
	@Column(length = 30)
	public  String sname;
	
	@Column
	public  int quantity;
	
	@Column(length = 30)
	public  String createDate;

}
