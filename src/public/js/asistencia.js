fetch('http://localhost:3030/api/usuario')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('student-table-body');

  data.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.first_name}</td>
      <td>${student.last_name}</td>
      <td>${student.tel}</td>
      <td>${student.email}</td>
      <td>${student.state}</td>
    `;
    tableBody.appendChild(row);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
});