package com.multi.dahon.finance.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.multi.dahon.finance.dto.MortgageOptionAndProdDTO;
import com.multi.dahon.finance.vo.MortgageLoanOption;

public interface MortgageRepository extends JpaRepository<MortgageLoanOption, Long>{

	@Query("select new com.multi.dahon.finance.dto.MortgageOptionAndProdDTO(mo, m) from MortgageLoanOption mo join fetch mo.mortgageLoan m")
	Page<MortgageOptionAndProdDTO> findMortgageList(Pageable pageable);
	
	
	@Query("select new com.multi.dahon.finance.dto.MortgageOptionAndProdDTO(mo, m, fc) "
			+ "from MortgageLoanOption mo join fetch mo.mortgageLoan m join fetch m.financialCompany fc "
			+ "where mo.id = :id")
	Optional<MortgageOptionAndProdDTO> findMortgageForDetail(@Param("id") Long id);
}
