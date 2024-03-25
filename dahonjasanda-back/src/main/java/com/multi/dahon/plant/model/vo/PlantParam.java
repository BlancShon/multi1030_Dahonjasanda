package com.multi.dahon.plant.model.vo;

import java.util.List;

public class PlantParam {

	private String searchValue;
	private String growthTypeC;
	private String floweringSeasonC;
	private String leafPatternC;
	private String leafColorC;
	private String flowerColorC;
	private String managementRequirementC;
	private List<String> searchData;
	
	private String growthType;
	private String floweringSeason;
	private String leafPattern;
	private String leafColor;
	private String flowerColorType;
	private String managementRequirement;
	// 페이징 인자
	private int page;
	private int limit;
	private int offset;
	
	public PlantParam() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PlantParam(String searchValue, String growthTypeC, String floweringSeasonC, String leafPatternC,
			String leafColorC, String flowerColorC, String managementRequirementC, List<String> searchData,
			String growthType, String floweringSeason, String leafPattern, String leafColor,
			String flowerColorType, String managementRequirement, int page, int limit, int offset) {
		super();
		this.searchValue = searchValue;
		this.growthTypeC = growthTypeC;
		this.floweringSeasonC = floweringSeasonC;
		this.leafPatternC = leafPatternC;
		this.leafColorC = leafColorC;
		this.flowerColorC = flowerColorC;
		this.managementRequirementC = managementRequirementC;
		this.searchData = searchData;
		this.growthType = growthType;
		this.floweringSeason = floweringSeason;
		this.leafPattern = leafPattern;
		this.leafColor = leafColor;
		this.flowerColorType = flowerColorType;
		this.managementRequirement = managementRequirement;
		this.page = page;
		this.limit = limit;
		this.offset = offset;
	}
	@Override
	public String toString() {
		return "PlantParam [searchValue=" + searchValue + ", growthTypeC=" + growthTypeC + ", floweringSeasonC="
				+ floweringSeasonC + ", leafPatternC=" + leafPatternC + ", leafColorC=" + leafColorC + ", flowerColorC="
				+ flowerColorC + ", managementRequirementC=" + managementRequirementC + ", searchData=" + searchData
				+ ", growthType=" + growthType + ", floweringSeason=" + floweringSeason + ", leafPattern=" + leafPattern
				+ ", leafColor=" + leafColor + ", growthflowerColorType=" + flowerColorType
				+ ", managementRequirement=" + managementRequirement + ", page=" + page + ", limit=" + limit
				+ ", offset=" + offset + "]";
	}
	public String getSearchValue() {
		return searchValue;
	}
	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}
	public String getGrowthTypeC() {
		return growthTypeC;
	}
	public void setGrowthTypeC(String growthTypeC) {
		this.growthTypeC = growthTypeC;
	}
	public String getFloweringSeasonC() {
		return floweringSeasonC;
	}
	public void setFloweringSeasonC(String floweringSeasonC) {
		this.floweringSeasonC = floweringSeasonC;
	}
	public String getLeafPatternC() {
		return leafPatternC;
	}
	public void setLeafPatternC(String leafPatternC) {
		this.leafPatternC = leafPatternC;
	}
	public String getLeafColorC() {
		return leafColorC;
	}
	public void setLeafColorC(String leafColorC) {
		this.leafColorC = leafColorC;
	}
	public String getFlowerColorC() {
		return flowerColorC;
	}
	public void setFlowerColorC(String flowerColorC) {
		this.flowerColorC = flowerColorC;
	}
	public String getManagementRequirementC() {
		return managementRequirementC;
	}
	public void setManagementRequirementC(String managementRequirementC) {
		this.managementRequirementC = managementRequirementC;
	}
	public List<String> getSearchData() {
		return searchData;
	}
	public void setSearchData(List<String> searchData) {
		this.searchData = searchData;
	}
	public String getGrowthType() {
		return growthType;
	}
	public void setGrowthType(String growthType) {
		this.growthType = growthType;
	}
	public String getFloweringSeason() {
		return floweringSeason;
	}
	public void setFloweringSeason(String floweringSeason) {
		this.floweringSeason = floweringSeason;
	}
	public String getLeafPattern() {
		return leafPattern;
	}
	public void setLeafPattern(String leafPattern) {
		this.leafPattern = leafPattern;
	}
	public String getLeafColor() {
		return leafColor;
	}
	public void setLeafColor(String leafColor) {
		this.leafColor = leafColor;
	}
	public String getGrowthflowerColorType() {
		return flowerColorType;
	}
	public void setGrowthflowerColorType(String growthflowerColorType) {
		this.flowerColorType = growthflowerColorType;
	}
	public String getManagementRequirement() {
		return managementRequirement;
	}
	public void setManagementRequirement(String managementRequirement) {
		this.managementRequirement = managementRequirement;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	
	
}
