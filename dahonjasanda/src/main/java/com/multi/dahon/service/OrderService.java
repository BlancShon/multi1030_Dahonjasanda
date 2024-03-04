package com.multi.dahon.service;

import com.multi.dahon.domain.Item;
import com.multi.dahon.domain.Member;
import com.multi.dahon.domain.Order;
import com.multi.dahon.domain.OrderItem;
import com.multi.dahon.repository.ItemRepository;
import com.multi.dahon.repository.MemberRepository;
import com.multi.dahon.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    // 오더아이템 쪽 수정이 필요할듯??????
    @Transactional
    public Long order(Long memberId, Long itemId, int count) {

        // 엔티티 조회
        Member member = memberRepository.findOne(memberId);
        Item item = itemRepository.findOne(itemId);
        OrderItem orderItem = OrderItem.createOrderItem(item, item.getPrice(), count);

        Order order = Order.creeateOrder(member, orderItem);

        orderRepository.save(order);

        return order.getId();
    }

    /**
     *  주문 취소
     */
    @Transactional
    public void cancelOrder(Long orderId) {
        Order order = orderRepository.findOne(orderId);
        order.cancel();
    }

    // 검색
//    public List<Order> findOrders(OrderSearch orderSearch) {
//        return orderRepository.findOrder(orderSearch);
//    }
}
