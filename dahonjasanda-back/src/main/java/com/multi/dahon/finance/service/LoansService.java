package com.multi.dahon.finance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.multi.dahon.finance.dto.MortgageOptionAndProdDTO;
import com.multi.dahon.finance.repository.MortgageRepository;

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
//	private final CreditRepository creditRepository;
//    private final RentHouseRepository rentHouseRepository;

	@Autowired
	public LoansService(MortgageRepository mortgageRepository) {
		super();
		this.mortgageRepository = mortgageRepository;
	}
	
//	@Autowired
//    public LoansService(MortgageRepository mortgageRepository, CreditRepository creditRepository, RentHouseRepository rentHouseRepository) {
//        this.mortgageRepository = mortgageRepository;
//        this.creditRepository = creditRepository;
//        this.rentHouseRepository = rentHouseRepository;
//    }
	
	public List<MortgageOptionAndProdDTO> findAllMortgage(){
		return mortgageRepository.findAllforList();
	}
	
	

}
