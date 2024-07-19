package com.trip.taosnew.service;

import com.trip.taosnew.model.TripCategory;
import com.trip.taosnew.repository.TripCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripCategoryServiceImpl implements TripCategoryService {

    @Autowired
    private TripCategoryRepository categoryRepository;

    @Override
    public TripCategory addCategory(TripCategory category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<TripCategory> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public TripCategory getCategoryById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public TripCategory updateCategory(Long id, TripCategory category) {
        if (categoryRepository.existsById(id)) {
            category.setCategoryId(id);
            return categoryRepository.save(category);
        } else {
            throw new RuntimeException("Category not found");
        }
    }
}
