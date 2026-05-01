import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { employee, deleteEmployee } = this.props;
    return (
      <tr>
        <td>{employee.name}</td>
        <td>{employee.extension}</td>
        <td>{employee.email}</td>
        <td>{employee.title}</td>
        <td>{employee.dateHired}</td>
        <td>{employee.currentStatus}</td>
        <td>
          <Button variant="danger" onClick={this.toggleModal}>X</Button>
          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Employee?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.toggleModal}>Cancel</Button>
              <Button variant="success" onClick={() => { deleteEmployee(employee.id); this.toggleModal(); }}>Yes</Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

function EmployeeTable(props) {
  const employeeRows = props.employees.map(employee => (
    <EmployeeRow key={employee.id} employee={employee} deleteEmployee={props.deleteEmployee} />
  ));

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
          <th>Date Hired</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
    </table>
  );
}

export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          id: 1,
          name: 'Sanjana',
          extension: 101,
          email: 'sanjana@example.com',
          title: 'Developer',
          dateHired: '2024-01-10',
          currentStatus: 'Active',
        },
        {
          id: 2,
          name: 'John',
          extension: 102,
          email: 'john@example.com',
          title: 'Manager',
          dateHired: '2023-08-15',
          currentStatus: 'Active',
        },
      ],
    };

    this.createEmployee = this.createEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    this.setState({ employees: this.state.employees.filter(e => e.id !== id) });
  }

  createEmployee(employee) {
    employee.id = this.state.employees.length + 1;
    const newEmployeeList = this.state.employees.slice();
    newEmployeeList.push(employee);
    this.setState({ employees: newEmployeeList });
  }

  render() {
    return (
      <>
        <h1>Employee Management Application</h1>
        <EmployeeFilter />
        <hr />
        <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        <hr />
        <EmployeeAdd createEmployee={this.createEmployee} />
      </>
    );
  }
}