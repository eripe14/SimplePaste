package com.eripe14.pasteservice.controller;

import com.eripe14.pasteservice.paste.Paste;
import com.eripe14.pasteservice.service.PasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/pastes")
public class PasteApiController {

    private final PasteService pasteService;

    @Autowired
    public PasteApiController(PasteService pasteService) {
        this.pasteService = pasteService;
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<Paste>> showAllResponses() {
        List<Paste> pastes = this.pasteService.findAll();

        if (pastes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(pastes, HttpStatus.OK);
    }

}