package com.p1.p1.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.p1.p1.models.pOneModel;

@Repository
public interface pOne extends JpaRepository<pOneModel, Integer>{

    pOneModel findBymail(String mail);
}
