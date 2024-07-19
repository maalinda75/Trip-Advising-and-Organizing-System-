package com.trip.taosnew.service;

import com.trip.taosnew.model.TripCategory;

import java.util.List;

public interface TripCategoryService {
    TripCategory addCategory(TripCategory category);
    List<TripCategory> getAllCategories();
    TripCategory getCategoryById(Long id);
    void deleteCategory(Long id);
    TripCategory updateCategory(Long id, TripCategory category);
}
