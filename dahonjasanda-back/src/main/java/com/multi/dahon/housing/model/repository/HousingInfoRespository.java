package com.multi.dahon.housing.model.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.multi.dahon.housing.model.vo.HousingInfoJPA;




@Repository
public interface HousingInfoRespository extends JpaRepository<HousingInfoJPA, Integer> {
    
	@Query(value = "SELECT * "
	        + "FROM HOUSING h WHERE "
	        + "(h.rent_Secd_Nm LIKE %:transactionType%) and "
	        + "(h.house_Secd_Nm LIKE %:propertyType%) and "
	        + "(h.hssply_Adres LIKE %:location%) and "
	        + "(h.hssply_Adres LIKE %:searchValue% or "
	        + "h.house_Nm LIKE %:searchValue%) "
	        , nativeQuery = true)
	    List<HousingInfoJPA> housingSearch(
	            @Param("transactionType") String transactionType,
	            @Param("propertyType") String propertyType,
	            @Param("location") String location,
	            @Param("searchValue") String searchValue);



	@Query(value = "SELECT count(*) "
	        + "FROM HOUSING h WHERE "
	        + "(h.rent_Secd_Nm LIKE %:transactionType%) and "
	        + "(h.house_Secd_Nm LIKE %:propertyType%) and "
	        + "(h.hssply_Adres LIKE %:location%) and "
	        + "(h.hssply_Adres LIKE %:searchValue% or "
	        + "h.house_Nm LIKE %:searchValue%) "
	        , nativeQuery = true)
	    int housingSearchCount(
	            @Param("transactionType") String transactionType,
	            @Param("propertyType") String propertyType,
	            @Param("location") String location,
	            @Param("searchValue") String searchValue);
}




