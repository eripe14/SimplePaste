package com.eripe14.pasteservice.paste;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PasteService {

    private final PasteRepository pasteRepository;

    @Autowired
    public PasteService(PasteRepository pasteRepository) {
        this.pasteRepository = pasteRepository;
    }

    @Transactional
    public Paste save(Paste paste) {
        return this.pasteRepository.save(paste);
    }

    @Transactional
    public Paste findById(long id) {
        return this.pasteRepository.findById(id);
    }

    @Transactional
    public Paste findByUuid(String uuid) {
        return this.pasteRepository.findByUuid(uuid);
    }

    @Transactional
    public List<Paste> findAll() {
        return this.pasteRepository.findAll();
    }

}