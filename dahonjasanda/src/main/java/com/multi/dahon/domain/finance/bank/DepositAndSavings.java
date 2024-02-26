package com.multi.dahon.domain.finance.bank;

import java.time.LocalDate;
import java.util.Date;

public class DepositAndSavings {
    private  Long id;
    private String dclsMonth;   // 공시제출월 30
    private String companyCode; // 회사 코드 30
    private String companyName; // 회사 이름 30
    private String productCode; // 금융상품코드 50
    private String productName; // 금융상품이름 50
    private String joinWay;     // 가입방법 50
    private String mtrtInt;     // 만기후이자율 255
    private String spclCnd;     // 우대조건 500
    private String joinDeny;    // 가입제한 10
    private String joinMember;  // 가입대상 255
    private String etcNote;     // 기타유의사항 500
    private Long maxLimit;      // 최고 한도 bigint
    private Date dclsStartDay;   // 공시 시작일 date
    private Date dclsEndDay;   // 공시 종료일 date
    private String submissionDay;   // 금융회사 제출일 30
}
