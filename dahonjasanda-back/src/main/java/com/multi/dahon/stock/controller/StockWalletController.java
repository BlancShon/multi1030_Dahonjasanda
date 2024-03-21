package com.multi.dahon.stock.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.multi.dahon.member.model.vo.Member;
import com.multi.dahon.stock.model.vo.StockWallet;
import com.multi.dahon.stock.service.StockWalletService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/stock/wallet")
public class StockWalletController {
	
	@Autowired
	private StockWalletService service;
	
	@PostMapping(value  = "/write")
	public ResponseEntity<Map<String, Object>> wright(
			@SessionAttribute(name = "loginMember", required = false) Member loginMember,
			@ModelAttribute StockWallet stockwallet,
			@RequestParam("quantity") String quantity,
			@RequestParam("price") String price,
			@RequestParam("sname") String sname) {
		
		stockwallet.setMember(loginMember);
		stockwallet.setQuantity(Integer.parseInt(quantity));
		stockwallet.setPrice(Integer.parseInt(price));
		stockwallet.setSname(sname);
		
		StockWallet result = service.saveStockWallet(stockwallet);
		Map<String, Object> map = new HashMap<>();
		if(result != null) {
			map.put("result", true);
			map.put("stockwallet", result);
		} else {
			map.put("result", false);
		}
		return ResponseEntity.status(HttpStatus.OK).body(map);
	}
	@PostMapping(value = "/update")
	public ResponseEntity<Map<String, Object>> update(Model model, HttpSession session,
			@SessionAttribute(name = "loginMember", required = false) Member loginMember,
			@ModelAttribute StockWallet stockwallet,
			@RequestParam("quantity") String quantity,
			@RequestParam("price") String price,
			@RequestParam("sname") String sname) {
		log.info("## 지갑 수정 요청 : quantity " + quantity);
		log.info("$$ 지갑 수정 요청 : price " + price);
		log.info("@@ 지갑 수정 요청 : sname " + sname);
		
		stockwallet.setMember(loginMember);
		StockWallet prevStockWallet = service.findByNo(stockwallet.getWno());
		StockWallet result = service.saveStockWallet(stockwallet);
		
		Map<String, Object> map = new HashMap<>();
		if(result != null) {
			map.put("result", true);
			map.put("stockwallet", result);
		} else {
			map.put("result", false);
		}
		return ResponseEntity.status(HttpStatus.OK).body(map);
		
	}
	@GetMapping(value = "/delete")
	public ResponseEntity<Map<String, Object>> delete(Model model,
			@SessionAttribute(name="loginMember", required=false) Member loginMember, int wno) throws Exception {
		System.out.println("삭제 요청 : " + wno);
		service.delete(wno);
		Map<String, Object> map = new HashMap<>();
		map.put("result", true);
		return ResponseEntity.status(HttpStatus.OK).body(map);
	}
			


}
