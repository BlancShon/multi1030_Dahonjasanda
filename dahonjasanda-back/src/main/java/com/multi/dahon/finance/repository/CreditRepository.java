package com.multi.dahon.finance.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.multi.dahon.finance.vo.CreditLoanOption;

public interface CreditRepository extends JpaRepository<CreditLoanOption, Long>{

	// TODO 쿼리 바꿔야한다.
	@Query("select new com.multi.dahon.finance.dto.MortgageOptionAndProdDTO(mo, m) from MortgageLoanOption mo join fetch mo.mortgageLoan m")
	Page<CreditLoanOption> findAllforList(Pageable pageable);
}
