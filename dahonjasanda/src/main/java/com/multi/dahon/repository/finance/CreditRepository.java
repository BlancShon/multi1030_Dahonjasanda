package com.multi.dahon.repository.finance;

import com.multi.dahon.finance.CreditLoan;
import com.multi.dahon.finance.MortgageLoan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditRepository  extends JpaRepository<CreditLoan, Long> {
}
