package com.gift.api.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gift.api.model.GiftUser;
import com.gift.api.service.giftService;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

	@Autowired
	giftService service;
	
	@PostMapping(path = "/user", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<GiftUser> storeUser(@RequestBody GiftUser user) {
		service.storeUser(user);
		return new ResponseEntity<GiftUser>(user, HttpStatus.OK);
	}

	@GetMapping(path = "/users/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<GiftUser>> getUsers() {
		List<GiftUser> user = service.getUser();
		return new ResponseEntity<List<GiftUser>>(user, HttpStatus.OK);
	}
	
	@RequestMapping(path="/user/{id}/{pass}",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> getByIdPass(@PathVariable int id,@PathVariable String pass) {
		@SuppressWarnings("unused")
		HttpServletRequest request;
		String status=null,pswd;
		int uid;
		@SuppressWarnings("unused")
		boolean state = false;
		long a,b;
		ResponseEntity<String> res = null;
		GiftUser user= service.getUserId(id);
		GiftUser pw=service.getUserPw(pass);
		
		if(user==null || pw==null) {
			status="User doesn't exist";
			state=false;
			res= new ResponseEntity<String>(status,HttpStatus.NOT_FOUND);
		}
		else {
		   uid=(int) user.getUserId();
			pswd=pw.getPassword();
			a=user.getUserId();
			b=pw.getUserId();
			if(a==b) {
				if(uid==0 || pswd==null) {
					status="User doesn't exist";
					state=false;
					res= new ResponseEntity<String>(status,HttpStatus.NOT_FOUND);
				}
				
				else if(uid==id && pswd.equals(pass)) {
					status="Login successful";
					 state=true;
					  res= new ResponseEntity<String>(status,HttpStatus.OK);
				}		
			}
			else {
				status="Registered details doesn't match";
				state=false;
				res= new ResponseEntity<String>(status,HttpStatus.NOT_FOUND);
			}
		}
		return res;
		}
	}
	
