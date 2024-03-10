package com.multi.dahon.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue
    @Column(name = "order_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();

    private LocalDateTime orderDate;

    private OrderStatus status; // 주문 상태 order, cancel

    // 연관관계 메서드
    public void setMemeber(Member member) {
        this.member = member;
        member.getOrders().add(this);
    }
    public void addOrderItem(OrderItem orderItem) {
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    // 생성 메서드
    public static Order creeateOrder(Member member, OrderItem... orderItems) {
        Order order = new Order();
        order.setMember(member);
        Arrays.stream(orderItems).forEach(order::addOrderItem);
        order.setStatus(OrderStatus.ORDER);
        order.setOrderDate(LocalDateTime.now());
        return order;
    }

    // 주문 취소 로직
    public void cancel() {
        setStatus(OrderStatus.CANCEL);
        orderItems.forEach(OrderItem::cancel);
    }

    // 조회 로직
    public int getTotalPrice() {
        return orderItems.stream().mapToInt(OrderItem::getTotalPrice).sum();
    }

}
