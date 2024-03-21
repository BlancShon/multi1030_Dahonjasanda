package com.multi.dahon.stock.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.multi.dahon.stock.model.vo.Stock;
import com.multi.dahon.stock.model.vo.StockParam;
import com.multi.dahon.stock.service.StockService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/stock")
@CrossOrigin(origins = { "http://localhost:3000" }, maxAge = 5000)
public class StockController {
	
	@Autowired
	private StockService stockService;
	
	@GetMapping(path = "/List")
	public ResponseEntity<Map<String, Object>> stockList(		
			@RequestParam(required = false) String searchValue)
	 {
		StockParam param = new StockParam();
		if(searchValue == null || searchValue.isEmpty()) {
			param.setSearchValue("");
		} else {
			param.setSearchValue(searchValue);
		}
		log.debug("@#@# stock list 요청 param : " + param);

		List<Stock> list = stockService.getStockList(param);
		int listCount = stockService.getStockListCount(param);
		Map<String, Object> map = new HashMap<>();
		
		map.put("list", list);
		map.put("listCount", listCount);
		map.put("param", param);
		System.out.println("리스트 = " + list);
		System.out.println("검색 결과 개수 = " + listCount);
		System.out.println("파라미터 = " + param);
		
		return ResponseEntity.status(HttpStatus.OK).body(map);
	}
	
	@GetMapping(value = {"/Info"})
	public ResponseEntity<Map<String, Object>> getStockInfo() {
		List<Stock> list = stockService.findInfo();
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		return ResponseEntity.status(HttpStatus.OK).body(map);
	}
	
}
