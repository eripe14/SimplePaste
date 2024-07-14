package com.eripe14.pasteauthorization;

import com.eripe14.pasteauthorization.controller.UserController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@WebMvcTest(UserController.class)
class PasteAuthorizationApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testUsers() {

    }

}