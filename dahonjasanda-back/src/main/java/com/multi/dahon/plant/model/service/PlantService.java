package com.multi.dahon.plant.model.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multi.dahon.api.apiParsingPlant;
import com.multi.dahon.plant.model.repository.PlantRespository;
import com.multi.dahon.plant.model.vo.Plant;

import jakarta.transaction.Transactional;

@Service
public class PlantService {
	
	@Autowired
	private PlantRespository repo;
	
	@Transactional
	public int save() {
		int result = 0;
		
		// 디테일 파싱 데이터 삽입
		List<Plant> list = apiParsingPlant.parse();
		for(int i = 0; i< list.size(); i++) {						
			Plant plant = apiParsingPlant.DetailParse(list.get(i));
																	
			
			list.set(i, plant); 										
		}
		
		System.out.println(list.toString().replace("],","],\n"));
		repo.saveAll(list);
		return result;
		
	}
	
	public int count() {
		return (int) repo.count();
		
	}
	
	
	
	

}
