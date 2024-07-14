package com.eripe14.pasteservice.paste;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PasteRepository extends JpaRepository<Paste, Long> {

    Paste findById(long id);

    Paste findByUuid(String uuid);

    List<Paste> findAll();

}