const tableBodyEl = document.getElementById('table-body')

const url = 'https://jsonplaceholder.typicode.com/users'

getData(url)



function renderRows(table_body, users) {
  table_body.innerHTML = ''
  users.forEach(user => {
      table_body.insertAdjacentHTML('beforeEnd', createRow(user))
  });
}
function createRow(user) {
  return `<tr data-id="${user.id}" class="row">
  <td data-label="Name">${user.name}</td>
  <td data-label="Username">${user.username}</td>
  <td data-label="Email">${user.email}</td>
  <td data-label="Website">${user.website}</td>
</tr>`
}
async function getData(url) {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data);
  renderRows(tableBodyEl, data)
}