package com.eripe14.pasteservice.configuration;

import org.springframework.context.annotation.Configuration;

@Configuration
//@EnableWebSecurity
public class WebSecurityConfig {

    //@Bean
    //    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    //        http.csrf(AbstractHttpConfigurer::disable)
    //                .authorizeHttpRequests(authorize -> authorize
    //                        .requestMatchers("/api/**")
    //                        .authenticated()
    //                        .anyRequest().permitAll()
    //                )
    //                .httpBasic(Customizer.withDefaults())
    //                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    //
    //        return http.build();
    //    }

}