package com.multi.dahon.plant.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.multi.dahon.plant.model.service.PlantService;
import com.multi.dahon.plant.model.vo.Plant;
import com.multi.dahon.plant.model.vo.PlantParam;

import jakarta.annotation.PostConstruct;
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
//		@GetMapping("/plant")
//		public String home(Locale locale, Model model, @RequestParam(required = false) String command) {
//			System.out.println(command);
////			if(command != null && command.contains("init")) {
////				System.out.println(command);
////				init();
////			}
//			if(plantService.count() == 0 ) {
//				init();
//			}
//			
//			return "home";
//		}
		@PostConstruct
		@GetMapping("/plantList")
		public void init() {
			plantService.saveParse();
		}
		

		
		@GetMapping(path = "/plant")
		public ResponseEntity<Map<String, Object>> plant(){
			List<Plant> list = plantService.findAllSortByPtnoDesc();
			int listCount = plantService.count();
			
			  // 반환할 맵 객체를 생성합니다.
	        Map<String, Object> response = new HashMap<>();
	        response.put("plantList", list); // Plant 데이터 목록을 맵에 추가합니다.
	        response.put("plantCount", listCount); // Plant 데이터 목록의 개수를 맵에 추가합니다.
	        
	        // 맵 객체와 HttpStatus.OK를 반환합니다.
	        return ResponseEntity.status(HttpStatus.OK).body(response);
		}
		
		@GetMapping(path = "/plantSearch")
		public ResponseEntity<Map<String, Object>> PlantSearList(		
				@RequestParam(required = false) String searchValue,
				@RequestParam(required = false) String growthType,
				@RequestParam(required = false) String floweringSeason,
				@RequestParam(required = false) String leafPattern,
				@RequestParam(required = false) String leafColor,
				@RequestParam(required = false) String growthflowerColorType,
				@RequestParam(required = false) String managementRequirement) {
			
			PlantParam param = new PlantParam();
			param.setSearchValue(searchValue);
			param.setGrowthType(growthType);
			param.setFloweringSeason(floweringSeason);
			param.setLeafPattern(leafPattern);
			param.setLeafColor(leafColor);
			param.setGrowthflowerColorType(growthflowerColorType);
			param.setManagementRequirement(managementRequirement);
			
			log.debug("@@ Plant list 요청 param : " + param);

			List<Plant> Searchlist = plantService.getPlantSearchList(param);
			int searchCount = plantService.getPlantSearchCount(param);
			Map<String, Object> map = new HashMap<>();
			
			map.put("list", Searchlist);
			map.put("listCount", searchCount);
			map.put("param", param);
			System.out.println("리스트 = " + Searchlist);
			System.out.println("검색 결과 개수 = " + searchCount);
			System.out.println("파라미터 = " + param);
			
			
			return ResponseEntity.status(HttpStatus.OK).body(map);
		}
		  

}
