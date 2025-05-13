package com.itvedanth.demoEmployeeFullstack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itvedanth.demoEmployeeFullstack.model.Employee;
import com.itvedanth.demoEmployeeFullstack.repo.EmployeeRepository;

@Service
public class EmployeeService {
	
	private final EmployeeRepository employeeRepository ;
	
	@Autowired
	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository=employeeRepository;
		
	}
	//create an employee
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//get all employee
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	//get employee Id
	public Optional<Employee> getEmployeeById(Long id){
		return employeeRepository.findById(id);
	}
	
	//update Employee
	public Employee updateEmployee(Long id,Employee updateEmployee) {
		if(employeeRepository.existsById(id)) {
			updateEmployee.setId(id);
			return employeeRepository.save(updateEmployee);
		}
		return null;
		
	}
	//delete Emplloyee
	public boolean deleteEmployee(Long Id) {
		if(employeeRepository.existsById(Id)) {
			employeeRepository.deleteById(Id);
			return true;
		}
		return false;
	}
}
