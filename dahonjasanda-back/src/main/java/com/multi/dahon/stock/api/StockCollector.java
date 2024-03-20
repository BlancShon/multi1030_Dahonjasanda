package com.multi.dahon.stock.api;

public class StockCollector {
	
	public static void main(String[] args) {
		StockIndexApi stockindexapi = new StockIndexApi();
		StockInfoApi stockinfoapi = new StockInfoApi();
		StockUpdater stockupdater = new StockUpdater();
		
		stockindexapi.Index();
		stockinfoapi.Info();
		stockupdater.Timer();
		
	}
}