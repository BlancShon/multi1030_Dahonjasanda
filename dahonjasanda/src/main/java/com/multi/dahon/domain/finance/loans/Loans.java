package com.multi.dahon.domain.finance.loans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public abstract class Loans {
    @Id
    @Column(name = "loan_id")
    private String id;
    private String dclsMonth;  // 공시 제출월 30
    private String companyCode; // 금융회사 코드 30
    private String companyName; // 금융회사 명 30
    private String productCode; // 금융상품 코드 50
    private String productName;  //금융상품명 50
    private String joinWay; // 가입 방법  50
    private String inciExpn; // 대출 부대 비용 255
    private String erlyRpayFee; // 중도 상환 수수료 255
    private String dlyRate; // 연체 이자율 255
    private String loanLimit; //대출 한도 255
    private String dclsStartDay; // 공시 시작일 30
    private String dclsEndDay;  // 공시 종료일 30
    private String submissionDay; // 금융회사 제출일 30

}
