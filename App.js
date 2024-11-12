import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [className, setClassName] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const addStudent = () => {
  

    const newStudent = {
      // srNo:students.length + 1,
      studentName:studentName,
      fatherName:fatherName,
      className:className,
      studentNo:studentNo,
      currentAddress:currentAddress,
      dateOfBirth:dateOfBirth,
      gender:gender,
    };

    setStudents([...students, newStudent]);
    
    setStudentName("");
    setFatherName("");
    setClassName("");
    setStudentNo("");
    setCurrentAddress("");
    setDateOfBirth("");
    setGender("");
  };
  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };


  useEffect(() => {
    console.log("students", students);
  }, [students]);

  return (
    <div className="App">
      <h2>Student Registration Form</h2>
      <>
        <div className="container-fluid table-sf">
          <table className="table table-striped table-hover">
            <tbody>
              <tr>
                <td>
                  <>
                    {/* <div className="form-group">
                      <label for="srNo">Sr no</label>
                      <input
                        type="text"
                        name="srNo"
                        className="form-control"
                        id="srNo"
                        
                      ></input>
                    </div> */}
                    <br></br>
                    <div className="form-group">
                      <label for="studentName">Student Name</label>
                      <input
                        type="text"
                        name="studentName"
                        className="form-control"
                        id="studentName"
                        value={studentName}
                        onChange={(event) => setStudentName(event.target.value)}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label for="fatherName">Father Name</label>
                      <input
                        type="text"
                        name="fatherName"
                        className="form-control"
                        id="fatherName"
                        value={fatherName}
                        onChange={(event) => setFatherName(event.target.value)}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label for="className">Class Name</label>
                      <input
                        type="text"
                        name="className"
                        className="form-control"
                        id="className"
                        value={className}
                        onChange={(event) => setClassName(event.target.value)}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label for="studentNo">Student No</label>
                      <input
                        type="text"
                        name="studentNo"
                        className="form-control"
                        id="studentNo"
                        value={studentNo}
                        onChange={(event) => setStudentNo(event.target.value)}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label for="currentAddress">Current Address</label>
                      <input
                        type="text"
                        name="currentAddress"
                        className="form-control"
                        id="currentAddress"
                        value={currentAddress}
                        onChange={(event) =>
                          setCurrentAddress(event.target.value)
                        }
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label for="dateOfBirth">Date of Birth</label>
                      <input
                        type="text"
                        name="dateOfBirth"
                        className="form-control"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(event) => setDateOfBirth(event.target.value)}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label for="gender">Gender</label>
                      <input
                        type="text"
                        name="gender"
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form_action-button">
                      <button onClick={() => {addStudent()}} className="btn-etdbtn">Submit</button>
                      <button
                        className="btn"
                        onClick={() => {
                          
                          setStudentName("");
                          setFatherName("");
                          setClassName("");
                          setStudentNo("");
                          setCurrentAddress("");
                          setDateOfBirth("");
                          setGender("");
                        }}
                      >Reset</button>
                      <button onClick={addStudent}>Submit2</button>
                    </div>
                  </>
                </td>
                <td>
                  <table
                    className="list table table-striped table-hover"
                    id="studentList"
                  >
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Student Name</th>
                        <th>Father Name</th>
                        <th>Class Name</th>
                        <th>Student No</th>
                        <th>Current Address</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="tbody">

                    {students.map((student, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{student.studentName}</td>
                        <td>{student.fatherName}</td>
                        <td>{student.className}</td>
                        <td>{student.studentNo}</td>
                        <td>{student.currentAddress}</td>
                        <td>{student.dateOfBirth}</td>
                        <td>{student.gender}</td>
                        <td>
                          <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                      </tr>
                    ))}

                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <a href="#" className="btn btn-custom">
              Open Form
            </a>
          </div>
          <br></br>
        </div>
        <footer id="footer"></footer>
      </>
    </div>
  );
}

export default App;
