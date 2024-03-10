package com.multi.dahon.finance.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.multi.dahon.finance.dto.MortgageOptionAndProdDTO;
import com.multi.dahon.finance.service.LoansService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/finance/loans")
public class LoansController {
	
	private final LoansService service;

	public LoansController(LoansService service) {
		super();
		this.service = service;
	}
    @GetMapping(value = "/mortgages")
    public ResponseEntity<List<MortgageOptionAndProdDTO>> mortgageLoanList(){
    	List<MortgageOptionAndProdDTO> findAllMortgage = service.findAllMortgage();
        return ResponseEntity.ok(findAllMortgage);
    }
    
    @GetMapping("/")
    public ResponseEntity<String> response(){
        return ResponseEntity.ok("아아아아");
    }
   

	

}
