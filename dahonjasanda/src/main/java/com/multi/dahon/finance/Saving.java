package com.multi.dahon.finance;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
public class Saving {
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
    private String korCoNm;
    
    @Column(nullable = false)
    private String finPrdtNm;
    
    @Column
    private String joinWay;
    
    @Column(nullable = false)
    private String mtrtInt; // Post-maturity interest conditions
    
    @Column(nullable = false)
    private String spclCnd; // Special conditions for preferential interest
    
    @Column(nullable = false)
    private String joinDeny;
    
    @Column(nullable = false)
    private String joinMember;
    
    @Column(nullable = false)
    private String etcNote;
    
    @Column(nullable = true)
    private Long maxLimit; // Can be null
    
    @Column(nullable = false)
    private LocalDate dclsStrtDay;
    
    @Column(nullable = true)
    private LocalDate dclsEndDay; // Can be null
    
    @Column(nullable = false)
    private LocalDateTime finCoSubmDay;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "financial_company_id")
    private FinancialCompany financialCompany;

    @OneToMany(mappedBy = "saving", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private Set<SavingOption> options = new HashSet<>();


    public String identifying() {
        return getFinCoNo() + "_" + getFinPrdtCd();
    }

    protected Saving() {
    }

    public Saving(String dclsMonth, String finCoNo, String finPrdtCd, String korCoNm, String finPrdtNm, String joinWay, String mtrtInt, String spclCnd, String joinDeny, String joinMember, String etcNote, Long maxLimit, LocalDate dclsStrtDay, LocalDate dclsEndDay, LocalDateTime finCoSubmDay) {
        this.dclsMonth = dclsMonth;
        this.finCoNo = finCoNo;
        this.finPrdtCd = finPrdtCd;
        this.korCoNm = korCoNm;
        this.finPrdtNm = finPrdtNm;
        this.joinWay = joinWay;
        this.mtrtInt = mtrtInt;
        this.spclCnd = spclCnd;
        this.joinDeny = joinDeny;
        this.joinMember = joinMember;
        this.etcNote = etcNote;
        this.maxLimit = maxLimit;
        this.dclsStrtDay = dclsStrtDay;
        this.dclsEndDay = dclsEndDay;
        this.finCoSubmDay = finCoSubmDay;
    }
}