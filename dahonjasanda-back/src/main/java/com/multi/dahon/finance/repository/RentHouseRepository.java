package com.multi.dahon.finance.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.multi.dahon.finance.dto.RentHouseOptionAndProdDTO;
import com.multi.dahon.finance.vo.RentHouseLoanOption;

public interface RentHouseRepository extends JpaRepository<RentHouseLoanOption, Long>{

	@Query("select new com.multi.dahon.finance.dto.RentHouseOptionAndProdDTO(rho, rh) from RentHouseLoanOption rho join fetch rho.rentHouseLoan rh")
	Page<RentHouseOptionAndProdDTO> findRentHouseList(Pageable pageable);
}
