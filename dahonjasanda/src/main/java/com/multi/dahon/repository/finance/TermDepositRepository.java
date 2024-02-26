package com.multi.dahon.repository.finance;

import com.multi.dahon.finance.RentHouseLoan;
import com.multi.dahon.finance.TermDeposit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TermDepositRepository extends JpaRepository<TermDeposit, Long> {
}
