import React from 'react'

const Table = ({students,handleDelete}) => {
  return (
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
                        <td>{student.name}</td>
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
  )
}

export default Table