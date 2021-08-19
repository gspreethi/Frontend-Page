package com.gift.api.doa;

//import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gift.api.model.GiftUser;

@Repository
@EnableJpaRepositories
public interface UserRepo extends JpaRepository<GiftUser, Integer> {

//	List<giftUser> findByEname(String ename);
//	List<giftUser> findByEidGreaterThan(int eid);
//	@Query("select e from Employee e where desig=?1 order by ename")
//	List<giftUser> findByDesig(String desig);
	
	@Transactional
	@Modifying
	@Query("update GiftUser u set u.password=:pass where u.userId=:id")
    public void updatePassword(int id,String pass);
	
	GiftUser findByPassword(String password);
	GiftUser findById(int id);

	
}

