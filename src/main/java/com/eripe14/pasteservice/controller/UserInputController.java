package com.eripe14.pasteservice.controller;

import com.eripe14.pasteservice.paste.Paste;
import com.eripe14.pasteservice.service.PasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.Instant;
import java.util.UUID;

@Controller
public class UserInputController {

    private final PasteService pasteService;

    @Autowired
    public UserInputController(PasteService pasteService) {
        this.pasteService = pasteService;
    }

    @GetMapping("/")
    public String showForm() {
        return "user-input";
    }

    @PostMapping(value = "/submit")
    public String getUserResponse(Model model, String content) {
        UUID uuid = UUID.randomUUID();
        String uniqueId = uuid.toString();
        Paste paste = new Paste(uniqueId, Instant.now(), content);

        this.pasteService.save(paste);
        model.addAttribute("content", content);
        model.addAttribute("uniqueId", uniqueId);

        return "redirect:/response/" + uniqueId;
    }

    @GetMapping(value = "/response/{uniqueId}")
    public String showResponse(Model model, @PathVariable String uniqueId) {
        Paste paste = this.pasteService.findByUuid(uniqueId);
        String content = paste.getContent();

        model.addAttribute("content", content);
        model.addAttribute("uniqueId", uniqueId);

        return "user-response";
    }

}