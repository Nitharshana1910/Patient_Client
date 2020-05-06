package com.resources;

import java.util.*;
import javax.ws.rs.*;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;

import com.controller.*;
import com.java.*;

import DataTypeObjects.appointmentDTO;
import DataTypeObjects.docHosDTO;
import DataTypeObjects.paymentDTO;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/Patient")
public class resPatient {
	
cntPatient app = new cntPatient();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("patient")
	public List<Patient> getPatients()
	{
		System.out.println("Display patients list successfully..");
		return app.getPatients();
	}
	
	
	
	@GET
	@Path("patient/{patientID}")
	@Produces(MediaType.APPLICATION_JSON)
	public Patient getPatient(@PathParam("patientID") int patientID)
	{
		System.out.println("Display patient details successfully..");
		return app.getPatient(patientID);
	
	}
	
	@POST
	@Path("/patient")
	@Consumes(MediaType.APPLICATION_JSON)
	public Patient createPatient(Patient p1)
	{
		System.out.println(p1);
		app.create(p1);
		
		return p1;
	}
	
	
	@PUT
	@Path("/patient")
	@Consumes(MediaType.APPLICATION_JSON)
	public Patient updatePatient(Patient p1)
	{
		System.out.println(p1);
		if(app.getPatient(p1.getPID()).getPID()==0) {
			app.create(p1);
			
		}
		else
		{
			app.update(p1);
			
		}
		
		return p1;
	}
	
	
	@DELETE
	@Path("patient/{pid}")
	public Patient deletePatient(@PathParam("pid") int pid)
	{
		Patient p = app.getPatient(pid);
		
		if(p.getPID()!=0)
			app.delete(pid);
		return null;
	}
	


}
