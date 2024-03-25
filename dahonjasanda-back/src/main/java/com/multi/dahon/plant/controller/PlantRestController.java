package com.multi.dahon.plant.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.multi.dahon.api.apiParsing;
import com.multi.dahon.api.apiParsingPlant;
import com.multi.dahon.housing.model.repository.HousingInfoRespository;
import com.multi.dahon.housing.model.service.HousingInfoByTypeServiceJPA;
import com.multi.dahon.housing.model.service.HousingInfoServiceJPA;
import com.multi.dahon.housing.model.vo.HouseCalendarParam;
import com.multi.dahon.housing.model.vo.HousingInfoByTypeJPA;
import com.multi.dahon.housing.model.vo.HousingInfoJPA;
import com.multi.dahon.housing.model.vo.HousingMapPram;
import com.multi.dahon.plant.model.service.PlantService;
import com.multi.dahon.plant.model.vo.Plant;

import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import jakarta.websocket.server.PathParam;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin(origins = { "http://localhost:3000" }, maxAge = 5000)
public class PlantRestController {


		@Autowired
		private PlantService plantService;
		
//		@Autowired
//	    private HousingInfoRespository housingInfoRepository;
	
		
//		List<HousingInfoByTypeJPA> typeList = apiParsing.allOfInfoByType();
		
//		@Transactional
//		@GetMapping("/housing")
//		public String home(Locale locale, Model model, @RequestParam(required = false) String command) {
//			System.out.println(command);
////			if(command != null && command.contains("init")) {
////				System.out.println(command);
////				init();
////			}
//			if(infoService.count() == 0 && typeService.count() == 0) {
//				init();
//			}
//			
//			return "home";
//		}
		@PostConstruct
		public void init() {
			plantService.save();
		}
		
		  



}
