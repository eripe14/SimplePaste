package com.eripe14.pasteservice.paste;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.Instant;

@Entity
public class Paste {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Instant createdAt;

    @Column(columnDefinition = "LONGTEXT")
    private String content;
    private String uuid;

    public Paste(String uuid, Instant createdAt, String content) {
        this.uuid = uuid;
        this.createdAt = createdAt;
        this.content = content;
    }

    public Paste() {

    }

    public Long getId() {
        return this.id;
    }

    public Instant getCreatedAt() {
        return this.createdAt;
    }

    public String getContent() {
        return this.content;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUniqueId() {
        return this.uuid;
    }

    public void setUniqueId(String uniqueId) {
        this.uuid = uniqueId;
    }
}