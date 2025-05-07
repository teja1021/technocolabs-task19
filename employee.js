// Define the Employee module
let Employee = {
  salary: 100000
};

// Export each function as it's declared
export function getCadre() {
  if (Employee.salary >= 100000) {
    return 'Senior';
  } else if (Employee.salary >= 50000) {
    return 'Mid';
  } else {
    return 'Entry';
  }
}

export function calculateTax() {
  return Employee.salary * 0.2;
}

export function getBenefits() {
  return ['health', 'housing', 'wellness'];
}

export function calculateBonus() {
  return Employee.salary * 0.05;
}

export function reimbursementEligibility() {
  return getBenefits().length * 250;
}

// Export the Employee object as the default
export default Employee;
