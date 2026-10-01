Doctor and Patient Management API

A simple REST API built using Python, FastAPI and Pydantic for managing doctors and patients.

Technologies

Python 3.9+

FastAPI

Pydantic

Uvicorn

In-memory storage

HTML

CSS

JavaScript

Project Structure
doctor-patient-management/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── style.css
│   └── script.js
│
└── README.md

Backend Setup

Open a terminal in the backend directory:

cd backend


Create a virtual environment:

Windows
python -m venv venv
venv\Scripts\activate

Linux/Mac
python3 -m venv venv
source venv/bin/activate


Install the dependencies:

pip install -r requirements.txt


Run the application:

uvicorn main:app --reload


The API will run at:

http://127.0.0.1:8000

Swagger Documentation

Open:

http://127.0.0.1:8000/docs


FastAPI provides interactive API documentation through Swagger UI.

API Endpoints
Doctors
Method	Endpoint	Description
POST	/doctors	Create a doctor
GET	/doctors	List all doctors
GET	/doctors/{doctor_id}	Get doctor by ID
Patients
Method	Endpoint	Description
POST	/patients	Create a patient
GET	/patients	List all patients
GET	/patients/{patient_id}	Get patient by ID
Doctor Example
{
    "name": "Dr. John Smith",
    "specialization": "Cardiology",
    "email": "john@example.com",
    "is_active": true
}

Patient Example
{
    "name": "Rahul Kumar",
    "age": 25,
    "phone": "9876543210"
}

Validation

The API validates:

Doctor email using Pydantic EmailStr

Patient age must be greater than 0

Doctor name and specialization cannot be empty

Patient name cannot be empty

Phone number must contain at least 10 characters

Error Handling

The API uses FastAPI HTTPException for errors such as:

Doctor not found

Patient not found

Duplicate doctor email

Frontend

The frontend contains:

Login page

Registration page

Doctor/Patient role selection

Responsive healthcare-themed design

Open frontend/index.html in a browser to view the frontend.

Note

This project uses in-memory storage. Data will be lost when the FastAPI server restarts.