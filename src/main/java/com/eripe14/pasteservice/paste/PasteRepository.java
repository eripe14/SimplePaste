package com.eripe14.pasteservice.paste;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PasteRepository extends JpaRepository<Paste, Long> {

    Paste findById(long id);

    Paste findByUuid(String uuid);

}