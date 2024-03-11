package com.multi.dahon.finance.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.multi.dahon.finance.dto.MortgageOptionAndProdDTO;
import com.multi.dahon.finance.vo.MortgageLoanOption;

public interface MortgageRepository extends JpaRepository<MortgageLoanOption, Long>{

	@Query("select new com.multi.dahon.finance.dto.MortgageOptionAndProdDTO(mo, m) from MortgageLoanOption mo join fetch mo.mortgageLoan m")
	Page<MortgageOptionAndProdDTO> findAllforList(Pageable pageable);
}
