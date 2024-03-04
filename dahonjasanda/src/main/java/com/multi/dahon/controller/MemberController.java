package com.multi.dahon.controller;

import com.multi.dahon.domain.Address;
import com.multi.dahon.domain.Member;
import com.multi.dahon.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/members/new")
    public String createForm(Model model) {
        model.addAttribute("memberForm", new MemberForm());
        return "members/createMemberForm";
    }

    // 어드레스와 서비스 수정 필요
    @PostMapping("members/new")
    public String create(@Valid MemberForm form, BindingResult result) {

        if (result.hasErrors()) {
            return "members/createMemberForm";
        }

        Member member = new Member();
        Address address = Address.createAddress("집 주소", form.getCity(), form.getStreet(), form.getZipcode());

        member.setName(form.getName());

        return "redirect:/";
    }
}
