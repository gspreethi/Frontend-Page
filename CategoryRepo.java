package com.gift.api.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.gift.api.model.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category,String> {
	
	@Query("select a.type from Category a where a.category=?1")
	public List getByCategory(String cat);
	
	@Query("select distinct a.type from Category a")
	public List getdressType();
	

}
