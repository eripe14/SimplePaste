package com.eripe14.pasteauthorization.controller;

import com.eripe14.pasteauthorization.user.User;
import com.eripe14.pasteauthorization.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/test")
    public String test() {
        return "user-input";
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<User>> getAllUsers() {
        System.out.println("Getting all users");
        return ResponseEntity.ok(this.userService.findAllUsers());
    }

    @GetMapping(value = "/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        UserDetails userDetails = this.userService.loadUserByUsername(username);

        if (userDetails instanceof User) {
            return ResponseEntity.ok((User) userDetails);
        }

        System.out.println("User not found");
        return ResponseEntity.notFound().build();
    }


}