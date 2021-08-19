package com.gift.api.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class GiftUser {
	@Id
	private int userId;
	private String firstName;
	private String lastName;
	private String dateOfBirth;
	private String gender;
	private long contactNumber;
	private String emailID;
	private String password;
	
	
	
	public GiftUser() {
		super();
		}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public GiftUser orElse(GiftUser giftUser) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}

