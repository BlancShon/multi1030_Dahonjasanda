package com.multi.dahon.finance.repository;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;

import com.multi.dahon.finance.vo.AnnuitySaving;
import com.multi.dahon.finance.vo.AnnuitySavingOption;
import com.multi.dahon.finance.vo.DepositsParam;
import com.multi.dahon.finance.vo.Saving;
import com.multi.dahon.finance.vo.SavingOption;
import com.multi.dahon.finance.vo.TermDeposit;
import com.multi.dahon.finance.vo.TermDepositOption;

import jakarta.persistence.criteria.CriteriaBuilder.In;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DepositSpec {
	
	public static Specification<SavingOption> conditionalSavings(final DepositsParam param) {
	    String interestCalculationType = param.getInterestCalculationType();
	    String period = param.getPeriod();
	    String monthlyDepositAmount = param.getMonthlyDepositAmount();
	    String depositPeriod = param.getDepositPeriod();
	    String keyword = param.getKeyword();
	    List<String> companies = param.getCompanies();
	    
	    return (Specification<SavingOption>)(savingOption, query, builder) -> {
	        Join<SavingOption, Saving> saving = savingOption.join("saving", JoinType.LEFT);
	        
//	       mortgageOption.fetch("mortgageLoan", JoinType.LEFT);
	       
	        Predicate predicate = builder.conjunction();
	        
	        if (!StringUtils.isEmpty(keyword)) {
	            predicate = builder.or(
	                builder.like(saving.get("finPrdtCd"), "%"+keyword+"%"),
	                builder.like(saving.get("korCoNm"), "%"+keyword+"%"),
	                builder.like(saving.get("finPrdtNm"), "%"+keyword+"%"),
	                builder.like(saving.get("mtrtInt"), "%"+keyword+"%"),
	                builder.like(saving.get("spclCnd"), "%"+keyword+"%")
	                );
	        }
	        
	        if (!StringUtils.isEmpty(interestCalculationType)) {
	            predicate = builder.and(predicate, builder.equal(savingOption.get("interestCalculationType"), interestCalculationType));
	        }

	        if (!StringUtils.isEmpty(period)) {
	            predicate = builder.and(predicate, builder.equal(savingOption.get("period"), period));
	        }
	        
	        if (!StringUtils.isEmpty(monthlyDepositAmount)) {
	        	predicate = builder.and(predicate, builder.equal(savingOption.get("monthlyDepositAmount"), monthlyDepositAmount));
	        }
	        
	        if (!StringUtils.isEmpty(depositPeriod)) {
	        	predicate = builder.and(predicate, builder.equal(savingOption.get("depositPeriod"), depositPeriod));
	        }
	        
	        if(companies!=null && !companies.isEmpty()) {
	            In<String> companyCode = builder.in(saving.get("finCoNo"));
	            companies.forEach((company) -> companyCode.value(company));
	            predicate = builder.and(companyCode, predicate);
	        }
	        return predicate;
	        
	    };
	}

	
	
	public static Specification<TermDepositOption> conditionalTermDeposit(final DepositsParam param) {
		String interestCalculationType = param.getInterestCalculationType();
		String period = param.getPeriod();
		String keyword = param.getKeyword();
		List<String> companies = param.getCompanies();
		
		return (Specification<TermDepositOption>) (termDepositOption, query, builder) -> {
			Join<TermDepositOption, TermDeposit> termDeposit = termDepositOption.join("termDeposit", JoinType.LEFT);
			
			Predicate predicate = builder.conjunction();
			
			if (!StringUtils.isEmpty(keyword)) {
				predicate = builder.or(
						builder.like(termDeposit.get("finPrdtCd"), "%"+keyword+"%"),
		                builder.like(termDeposit.get("korCoNm"), "%"+keyword+"%"),
		                builder.like(termDeposit.get("finPrdtNm"), "%"+keyword+"%"),
		                builder.like(termDeposit.get("mtrtInt"), "%"+keyword+"%"),
		                builder.like(termDeposit.get("spclCnd"), "%"+keyword+"%")
						);
			}
			
			if (!StringUtils.isEmpty(interestCalculationType)) {
				predicate = builder.and(predicate, builder.equal(termDepositOption.get("interestCalculationType"), interestCalculationType));
			}
			
			if (!StringUtils.isEmpty(period)) {
				predicate = builder.and(predicate, builder.equal(termDepositOption.get("period"), period));
			}
			
			if(companies!=null && !companies.isEmpty()) {
				In<String> companyCode = builder.in(termDeposit.get("finCoNo"));
				companies.forEach((company) -> companyCode.value(company));
				predicate = builder.and(companyCode, predicate);
			}
			return predicate;
			
		};
	}
	
	public static Specification<AnnuitySavingOption> conditionalAnnuitySaving(final DepositsParam param) {
		String depositPeriod = param.getDepositPeriod();
		String subscriptionAge = param.getSubscriptionAge();
		String receivingCondition = param.getReceivingCondition();
		String keyword = param.getKeyword();
		List<String> companies = param.getCompanies();
		
		return (Specification<AnnuitySavingOption>) (annuitySavingOption, query, builder) -> {
			Join<AnnuitySavingOption, AnnuitySaving> annuitySaving = annuitySavingOption.join("annuitySaving", JoinType.LEFT);
			
			Predicate predicate = builder.conjunction();
			
			if (!StringUtils.isEmpty(keyword)) {
				predicate = builder.or(
						builder.like(annuitySaving.get("finPrdtCd"), "%"+keyword+"%"),
						builder.like(annuitySaving.get("finPrdtNm"), "%"+keyword+"%"),
						builder.like(annuitySaving.get("korCoNm"), "%"+keyword+"%"),
						builder.like(annuitySaving.get("prdtTypeNm"), "%"+keyword+"%"),
						builder.like(annuitySaving.get("pnsnKindNm"), "%"+keyword+"%")
						);
			}
			
			if (!StringUtils.isEmpty(depositPeriod)) {
				predicate = builder.and(predicate, builder.equal(annuitySavingOption.get("depositPeriod"), depositPeriod));
			}
			
			if (!StringUtils.isEmpty(subscriptionAge)) {
				predicate = builder.and(predicate, builder.equal(annuitySavingOption.get("subscriptionAge"), subscriptionAge));
			}
			
			if (!StringUtils.isEmpty(receivingCondition)) {
				predicate = builder.and(predicate, builder.equal(annuitySavingOption.get("receivingCondition"), receivingCondition));
			}
			
			if(companies!=null && !companies.isEmpty()) {
				In<String> companyCode = builder.in(annuitySaving.get("finCoNo"));
				companies.forEach((company) -> companyCode.value(company));
				predicate = builder.and(companyCode, predicate);
			}
			return predicate;
			
		};
	}

}
