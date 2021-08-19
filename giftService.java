package com.gift.api.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gift.api.doa.UserRepo;
import com.gift.api.model.GiftUser;

@Service
public class giftService {
	@Autowired
	UserRepo repo;
			
	public GiftUser storeUser(GiftUser user) {
		repo.save(user);
		return user;
	}
		
	public List<GiftUser> getUser() {
		List<GiftUser> user = repo.findAll(); 
		return user;
	}
	
	public GiftUser getUserId(int id) {
		GiftUser user=repo.findById(id).orElse(new GiftUser());
		return user;
	}
	public GiftUser getUserPw(String password) {
		GiftUser user=repo.findByPassword(password);
		return user;
	}
}
