package com.multi.dahon.domain;

import com.multi.dahon.exception.NotEnoughStockException;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Item {

    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private int price;
    private int stockQuantity;
    private boolean onSale;
    private String reasonsForNotSale;

    public int addStock(int quantity) {
        return stockQuantity += quantity;
    }

    public int removeStock(int quantity) {
        int restStock = stockQuantity - quantity;
        if (restStock < 0) {
            throw new NotEnoughStockException("재고가 부족합니다");
        } else if (restStock == 0) {
           setOnSale(false);
           setReasonsForNotSale("재고부족");
        }

        return stockQuantity = restStock;

    }
}
