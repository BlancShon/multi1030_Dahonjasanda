package com.multi.dahon.domain.finance.loans;

public class MortgageLoan {

    private Long id;
    private String dclsMonth;  // 공시 제출월 30
    private String companyCode; // 금융회사 코드 30
    private String productCode; // 금융상품 코드 50
    private String mrtgType;    // 담보 유형 코드 30
    private String mrtgTypeName;    // 담보 유형 30
    private String rpayType;        // 대출 상환 유형 코드 30
    private String rpayTypeName;    // 대출 상환 유형 30
    private String lendRateType;    // 대출 금리 유형 30
    private String lendRateTypeName;    // 대출 금리 30
    private Double lendRatMin;         // 대출 금리 최저 30
    private Double lendRatMax;      // 대출 금리 최고 30
    private Double lendRatAvg;      // 전월 취급 평균 금리 30


}
