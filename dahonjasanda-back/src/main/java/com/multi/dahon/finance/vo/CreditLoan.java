package com.multi.dahon.finance.vo;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;

@Entity
@Getter
public class CreditLoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String dclsMonth;
    
    @Column(nullable = false)
    private String finCoNo;
    
    @Column(nullable = false)
    private String finPrdtCd;
    
    @Column(nullable = false)
    private String crdtPrdtType;
    
    @Column(nullable = false)
    private String korCoNm;
    
    @Column(nullable = false)
    private String finPrdtNm;
    
    @Column(nullable = false)
    private String joinWay;
    
    @Column(nullable = false)
    private String cbName;
    
    @Column(nullable = false)
    private String crdtPrdtTypeNm;
    
    @Column(nullable = false)
    private LocalDate dclsStrtDay;
    
    @Column(nullable = true)
    private LocalDate dclsEndDay; // Can be null
    
    @Column(nullable = false)
    private LocalDateTime finCoSubmDay;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "financial_company_id")
    private FinancialCompany financialCompany;

    @OneToMany(mappedBy = "creditLoan", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private Set<CreditLoanOption> options = new HashSet<>();

    
    protected CreditLoan() {
    }

    public CreditLoan(String dclsMonth, String finCoNo, String finPrdtCd, String crdtPrdtType, String korCoNm, String finPrdtNm, String joinWay, String cbName, String crdtPrdtTypeNm, LocalDate dclsStrtDay, LocalDate dclsEndDay, LocalDateTime finCoSubmDay) {
        this.dclsMonth = dclsMonth;
        this.finCoNo = finCoNo;
        this.finPrdtCd = finPrdtCd;
        this.crdtPrdtType = crdtPrdtType;
        this.korCoNm = korCoNm;
        this.finPrdtNm = finPrdtNm;
        this.joinWay = joinWay;
        this.cbName = cbName;
        this.crdtPrdtTypeNm = crdtPrdtTypeNm;
        this.dclsStrtDay = dclsStrtDay;
        this.dclsEndDay = dclsEndDay;
        this.finCoSubmDay = finCoSubmDay;
    }

}