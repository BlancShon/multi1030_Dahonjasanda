package com.multi.dahon.controller;

import com.multi.dahon.service.finance.MortgageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoanController {

    @Autowired
    private MortgageService service;

    @GetMapping("inject")
    public void injectionDB(){
        service.parsingAndSaving();
    }


}
