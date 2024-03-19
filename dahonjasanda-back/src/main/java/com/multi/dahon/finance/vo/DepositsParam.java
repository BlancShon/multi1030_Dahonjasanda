package com.multi.dahon.finance.vo;

import java.util.List;

import lombok.Data;

@Data
public class DepositsParam {
    private List<String> companies; // 은행별
    private String interestCalculationType; // 단복리
    private String period; // 기간
    private String monthlyDepositAmount; // 월납입금액 (적금의 경우 사용될 수 있음)
    private String depositPeriod; // 납입기간 (연금의 경우 사용될 수 있음)
    private String subscriptionAge; // 가입나이 (연금의 경우 사용될 수 있음)
    private String receivingCondition; // 수령조건 (연금의 경우 사용될 수 있음)
    private String keyword; // 키워드 검색에 사용될 수 있는 일반 필드

	public boolean isEmpty() {
		if((interestCalculationType == null || interestCalculationType.isBlank()) && (period == null ||period.isBlank()) 
				&& (monthlyDepositAmount == null || monthlyDepositAmount.isBlank()) && (depositPeriod == null || depositPeriod.isBlank()) 
				&& (depositPeriod == null || depositPeriod.isBlank()) && (subscriptionAge == null || subscriptionAge.isBlank()) 
				&& (receivingCondition == null || receivingCondition.isBlank()) 
				&& (keyword == null || keyword.isBlank()) && (companies == null || companies.isEmpty())) {
			return true; 
		}
		return false;
	}
}
