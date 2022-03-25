package com.Revature.ProjectTwo.Repository;

import com.Revature.ProjectTwo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {


}
