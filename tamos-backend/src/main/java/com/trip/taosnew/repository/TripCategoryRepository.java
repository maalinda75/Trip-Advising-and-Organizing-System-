package com.trip.taosnew.repository;

import com.trip.taosnew.model.TripCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripCategoryRepository extends JpaRepository<TripCategory, Long> {
}
