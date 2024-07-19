package com.trip.taosnew.controller;

import com.trip.taosnew.model.TripCategory;
import com.trip.taosnew.service.TripCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class TripCategoryController {

    @Autowired
    private TripCategoryService categoryService;

    @PostMapping
    public ResponseEntity<TripCategory> addCategory(@RequestBody TripCategory category) {
        TripCategory addedCategory = categoryService.addCategory(category);
        return new ResponseEntity<>(addedCategory, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TripCategory>> getAllCategories() {
        List<TripCategory> categories = categoryService.getAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TripCategory> getCategoryById(@PathVariable Long id) {
        TripCategory category = categoryService.getCategoryById(id);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TripCategory> updateCategory(@PathVariable Long id, @RequestBody TripCategory category) {
        TripCategory updatedCategory = categoryService.updateCategory(id, category);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
    }
}