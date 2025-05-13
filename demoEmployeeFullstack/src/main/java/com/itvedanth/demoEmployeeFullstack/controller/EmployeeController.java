package com.itvedanth.demoEmployeeFullstack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itvedanth.demoEmployeeFullstack.model.Employee;
import com.itvedanth.demoEmployeeFullstack.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/employees")
public class EmployeeController {
	
	private final EmployeeService employeeService;
	
	@Autowired
	public EmployeeController(EmployeeService employeeService) {
		this.employeeService=employeeService;
	}
	 
	 @PostMapping
	    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
	        Employee createdEmployee = employeeService.createEmployee(employee);
	        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	    }

	@GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id")Long id){
		Optional<Employee> employee = employeeService.getEmployeeById(id);
		if(employee.isPresent()) {
			return new ResponseEntity<>(employee.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable("id")Long id){
		boolean isDeleted=employeeService.deleteEmployee(id);
		if(isDeleted) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
