package com.eripe14.pasteservice.paste.controller;

import com.eripe14.pasteservice.paste.Paste;
import com.eripe14.pasteservice.paste.PasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PasteInputController {

    private final PasteService pasteService;

    @Autowired
    public PasteInputController(PasteService pasteService) {
        this.pasteService = pasteService;
    }

    @GetMapping("/")
    public String showForm() {
        return "user-input";
    }

    @GetMapping("/response")
    public String emptyResponse() {
        return "not-found";
    }

    @PostMapping(value = "/submit")
    @ResponseBody
    public Map<String, String> getUserResponse(@RequestBody Map<String, String> payload) {
        String content = payload.get("content");
        String uniqueId = UUID.randomUUID().toString();
        Paste paste = new Paste(uniqueId, Instant.now(), content);
        this.pasteService.save(paste);

        Map<String, String> response = new HashMap<>();
        response.put("uniqueId", uniqueId);
        return response;
    }

    @RequestMapping(value = "/submit", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity
                .ok()
                .allow(HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.OPTIONS)
                .build();
    }

    @GetMapping(value = "/response/{uniqueId}")
    public String showResponse(Model model, @PathVariable String uniqueId) {
        Paste paste = this.pasteService.findByUuid(uniqueId);

        if (paste == null) {
            return "not-found";
        }

        String content = paste.getContent();

        model.addAttribute("content", content);
        model.addAttribute("uniqueId", uniqueId);

        return "user-response";
    }

}