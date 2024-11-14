import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import Task from "./components/Task";
import ToDo from "./components/ToDo";

function App() {
  const [students, setStudents] = useState([]);
  const [showTodo, setShowTodo] = useState(true)
  
  // const [studentName, setStudentName] = useState("");
  // const [fatherName, setFatherName] = useState("");
  // const [className, setClassName] = useState("");
  // const [studentNo, setStudentNo] = useState("");
  // const [currentAddress, setCurrentAddress] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [gender, setGender] = useState("");

const [studentData, setStudentData] = useState({
  name: "",
  fatherName: "",
  className: "",
  studentNo: "",
  currentAddress: "",
  dateOfBirth: "",
  gender: "",
});

const handleChange = (e) => {
  // const { name, value } = e.target;
  const name =e.target.name
  const value=e.target.value
  setStudentData({
    ...studentData,
    [name]: value,
  });
};

  const addStudent = () => {
  
    // const newStudent = {
    //   // srNo:students.length + 1,
    //   name:studentName,
    //   fatherName:fatherName,
    //   className:className,
    //   studentNo:studentNo,
    //   currentAddress:currentAddress,
    //   dateOfBirth:dateOfBirth,
    //   gender:gender,
    // };
    if (studentData.name=="" || studentData.fatherName=="") {
      return;
     }
    

    setStudents([...students, studentData]);
    
    setStudentData({
      name: "",
      fatherName: "",
      className: "",
      studentNo: "",
      currentAddress: "",
      dateOfBirth: "",
      gender: "",
    });
  };
  //   setStudentName("");
  //   setFatherName("");
  //   setClassName("");
  //   setStudentNo("");
  //   setCurrentAddress("");
  //   setDateOfBirth("");
  //   setGender("");
  // };
  // function clearinputs() {
  //   setStudentName("");
  //   setFatherName("");
  //   setClassName("");
  //   setStudentNo("");
  //   setCurrentAddress("");
  //   setDateOfBirth("");
  //   setGender("");
  // }
  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

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
                        name="name"
                        className="form-control"
                        id="studentName"
                        value={studentData.name}
                        onChange={handleChange}
                        placeholder="student name"
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <label for="fatherName">Father Name</label>
                      <input
                        type="text"
                        name="fatherName"
                        className="form-control"
                        value={studentData.fatherName}
                        onChange={handleChange}
                        placeholder="Father's Name"
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
                        value={studentData.className}
                        onChange={handleChange}
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
                        value={studentData.studentNo}
                        onChange={handleChange}
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
                        value={studentData.currentAddress}
                        onChange={handleChange}
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
                        value={studentData.dateOfBirth}
                        onChange={handleChange}
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
                        value={studentData.gender}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <br></br>
                    <div className="form_action-button">
                      <button onClick={() => {addStudent()}} className="btn-etdbtn">Submit</button>
                      <button
                        type="button" 
                        onClick={() => setStudentData({
                             name: "",
                             fatherName: "",
                             className: "",
                             studentNo: "",
                             currentAddress: "",
                             dateOfBirth: "",
                             gender: "",
                             })}
                               >
                        Reset</button>
                      <button onClick={addStudent}>Submit2</button>
                    </div>
                  </>
                </td>
                <td>
                  <Table students={students} handleDelete={handleDelete}/>
                </td>
              </tr>
            </tbody>
          </table>
          <Task></Task>
          <button onClick={() => setShowTodo(!showTodo)}>{showTodo ? "Hide TODO" : "Show TODO"}</button>
          {showTodo?<ToDo></ToDo>:<></>}
          
          {/* {showTodo&&<ToDo></ToDo>} */}
        </div>
        <footer id="footer"></footer>
      </>
    </div>
  );
}

export default App;
