package com.multi.dahon.repository.finance;

import com.multi.dahon.finance.FinancialCompany;
import com.multi.dahon.finance.MortgageLoan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinancialCompanyRepository extends JpaRepository<FinancialCompany, Long> {
}
