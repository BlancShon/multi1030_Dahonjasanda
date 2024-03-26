package com.multi.dahon.plant.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
			plantService.saveParse();
		}
		
		  
		  

		
//		@GetMapping(path = "/plant")
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
		
		@GetMapping(path = "/plant")
		public ResponseEntity<Map<String, Object>> PlantSearList(		
				@RequestParam(required = false) String searchValue,
				@RequestParam(required = false) List<String> growthType,
				@RequestParam(required = false) List<String> floweringSeason,
				@RequestParam(required = false) List<String> leafPattern,
				@RequestParam(required = false) List<String> leafColor,
				@RequestParam(required = false) List<String> flowerColorType,
				@RequestParam(required = false) List<String> managementRequirement,
				Pageable pageable){
			
			PlantParam param = new PlantParam();
			param.setSearchValue(searchValue);
			param.setGrowthType(growthType);
			param.setFloweringSeason(floweringSeason);
			param.setLeafPattern(leafPattern);
			param.setLeafColor(leafColor);
			param.setFlowerColorType(flowerColorType);
			param.setManagementRequirement(managementRequirement);
			 // findAll 메서드로 데이터를 가져오고, 없으면 findAllSortByPtnoDesc 메서드로 가져옴
		    Page<Plant> searchAll = plantService.searchAll(param, pageable);
//			List<Plant> Searchlist = plantService.getPlantSearchList(param);
//			int searchCount = plantService.getPlantSearchCount(param);
		    
		    log.info("파람 정보 확인 { }", growthType);
		    
			Map<String, Object> map = new HashMap<>();
			
			map.put("list2", searchAll.getContent());
			map.put("listsearchAll", searchAll);
			map.put("listCount", searchAll.getTotalElements());
//			map.put("pageable", pageable);
			map.put("param2", param);
			System.out.println("리스트 = " + searchAll);
//			System.out.println("검색 결과 개수 = " +));
			System.out.println("파라미터 = " + param);
			System.out.println("파라미터2 = " + map.get("list2"));
			
			
			return ResponseEntity.status(HttpStatus.OK).body(map);
		}
		


}
