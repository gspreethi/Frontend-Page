package com.gift.api.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gift.api.dao.CategoryRepo;
import com.gifr.api.model.Category;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepo categoryrepo;
	
	public Category setCat(Category cat) {
		categoryrepo.save(cat);
		return cat;
	}
	
	public List<Category> getCat(){
		List<Category> cat=categoryrepo.findAll();
		return cat;
	}
	
	public List getByCategories(String cat)
	{
	
		List cat=categoryrepo.getByCategory(cat);
		return cat; 
	}
	
	public List getType()
	{
		List cat=categoryrepo.getType();
		return cat;
	}

}
