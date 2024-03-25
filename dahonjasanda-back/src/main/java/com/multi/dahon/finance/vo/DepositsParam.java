package com.multi.dahon.finance.vo;

import java.util.List;

import lombok.Data;

@Data
public class DepositsParam {
    private List<String> intrRateType; // 단복리 (예금, 적금)
    private List<String> saveTrm; // 만기 (예금, 적금) 
    private List<String> rsrvType; // 적립유형 (적금) 
    private List<String> pnsnKind; // 연금종류 (연금) 
    private List<String> prdtType; // 상품유형 (연금) 
    private String keyword; // 키워드 검색에 사용될 수 있는 일반 필드
    private List<String> companies; // 은행별(에금, 적금, 연금)
    private String sortField;
    private String sortOrder;

	public boolean isEmpty() {
		if((intrRateType == null || intrRateType.isEmpty()) && (saveTrm == null ||saveTrm.isEmpty()) 
				&& (rsrvType == null || rsrvType.isEmpty()) && (pnsnKind == null || pnsnKind.isEmpty()) 
				&& (prdtType == null || prdtType.isEmpty())
				&& (keyword == null || keyword.isBlank()) && (companies == null || companies.isEmpty())) {
			return true; 
		}
		return false;
	}
}
