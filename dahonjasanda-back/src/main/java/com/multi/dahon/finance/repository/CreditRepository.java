package com.multi.dahon.finance.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.multi.dahon.finance.dto.CreditOptionAndProdDTO;
import com.multi.dahon.finance.vo.CreditLoanOption;

public interface CreditRepository extends JpaRepository<CreditLoanOption, Long>{

	@Query("select new com.multi.dahon.finance.dto.CreditOptionAndProdDTO(co, c) from CreditLoanOption co join fetch co.creditLoan c")
	Page<CreditOptionAndProdDTO> findCreditList(Pageable pageable);
}
