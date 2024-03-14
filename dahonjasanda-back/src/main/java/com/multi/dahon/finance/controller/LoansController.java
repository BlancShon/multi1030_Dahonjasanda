package com.multi.dahon.finance.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Vector;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.multi.dahon.finance.dto.FinanceCompanyDTO;
import com.multi.dahon.finance.dto.MortgageOptionAndProdDTO;
import com.multi.dahon.finance.dto.RentHouseOptionAndProdDTO;
import com.multi.dahon.finance.service.LoansService;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/finance/loans")
public class LoansController {
	
	private ConcurrentHashMap<String, Vector<FinanceCompanyDTO>> financeCompanies = new ConcurrentHashMap<>();
	
	private final LoansService service;

	public LoansController(LoansService service) {
		super();
		this.service = service;
	}
	
	@PostConstruct
	public void initFinanceCompanies() {
		List<String> list = Arrays.asList("020000", "030200","030300","050000","060000");
		list.forEach((code) -> financeCompanies.put(code, service.getFinanceCompanyList(code)));
	}
	
	@GetMapping(value = "/companies")
	public ResponseEntity<ConcurrentHashMap<String, Vector<FinanceCompanyDTO>>> getCompanyList() {
		return ResponseEntity.status(HttpStatus.OK).body(financeCompanies);
	}
	
    @GetMapping(value = "/mortgages")
    public ResponseEntity<Page<MortgageOptionAndProdDTO>> mortgageLoanList(Pageable pageable){
    	Page<MortgageOptionAndProdDTO> findMortgages = service.findMortgageList(pageable);
        return ResponseEntity.ok(findMortgages);
    }
    
//    @GetMapping(value = "/credits")
//    public ResponseEntity<Page<MortgageOptionAndProdDTO>> creditLoanList(Pageable pageable){
//    	Page<MortgageOptionAndProdDTO> findAllMortgage = service.findAllMortgage(pageable);
//    	return ResponseEntity.ok(findAllMortgage);
//    }
    
    @GetMapping(value = "/rent-houses")
    public ResponseEntity<Page<RentHouseOptionAndProdDTO>> rentHouseLoanList(Pageable pageable){
    	Page<RentHouseOptionAndProdDTO> findRentHouses = service.findRentHouseList(pageable);
    	return ResponseEntity.ok(findRentHouses);
    }
    
    @GetMapping("/")
    public ResponseEntity<String> response(){
        return ResponseEntity.ok("아아아아");
    }
   

	

}
