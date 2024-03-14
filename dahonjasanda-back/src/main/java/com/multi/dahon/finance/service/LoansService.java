package com.multi.dahon.finance.service;

import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.multi.dahon.finance.dto.FinanceCompanyDTO;
import com.multi.dahon.finance.dto.MortgageOptionAndProdDTO;
import com.multi.dahon.finance.dto.RentHouseOptionAndProdDTO;
import com.multi.dahon.finance.repository.CreditRepository;
import com.multi.dahon.finance.repository.FinancialCompanyRepository;
import com.multi.dahon.finance.repository.MortgageRepository;
import com.multi.dahon.finance.repository.RentHouseRepository;

/**
 * JPA 에서 엔티티에 뭔가 변경하거나 할떄는
 * 무조건 @Transactional  안에서 해야합니다.
 * 그래야 영속성 컨텍스트에서 변경감지를 해서 업데이트된걸
 * 자동으로 쿼리쳐서 날려줍니다.
 * 예) @Transactional 밖 Controller 쪽에서 엔티티에 값을 바꿔도
 * 아무 일도 일어나지 않습니다.
 */
@Service
@Transactional(readOnly=true)
public class LoansService {
	
	private final MortgageRepository mortgageRepository;
	private final CreditRepository creditRepository;
    private final RentHouseRepository rentHouseRepository;
    private final FinancialCompanyRepository financialCompanyRepository;

    @Autowired
	public LoansService(MortgageRepository mortgageRepository, CreditRepository creditRepository,
			RentHouseRepository rentHouseRepository, FinancialCompanyRepository financialCompanyRepository) {
		super();
		this.mortgageRepository = mortgageRepository;
		this.creditRepository = creditRepository;
		this.rentHouseRepository = rentHouseRepository;
		this.financialCompanyRepository = financialCompanyRepository;
	}

	public Page<MortgageOptionAndProdDTO> findMortgageList(Pageable pageable){
		return mortgageRepository.findMortgageList(pageable);
	}
	
	public Page<RentHouseOptionAndProdDTO> findRentHouseList(Pageable pageable){
		return rentHouseRepository.findRentHouseList(pageable);
	}
	
	public Vector<FinanceCompanyDTO> getFinanceCompanyList(String companyType){
		return financialCompanyRepository.findByType(companyType);
	}
	
	

}
