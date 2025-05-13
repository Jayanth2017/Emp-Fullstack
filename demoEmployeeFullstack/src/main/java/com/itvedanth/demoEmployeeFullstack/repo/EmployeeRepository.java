package com.itvedanth.demoEmployeeFullstack.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itvedanth.demoEmployeeFullstack.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
