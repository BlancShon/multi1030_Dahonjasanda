package com.multi.dahon.repository.finance;

import com.multi.dahon.finance.MortgageLoan;
import com.multi.dahon.finance.RentHouseLoan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentHouseRepository extends JpaRepository<RentHouseLoan, Long> {
}
