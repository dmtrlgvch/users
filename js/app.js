const tableBodyEl = document.getElementById('table-body')
const modalEl = document.getElementById('modal')
const modalBodyEl = document.getElementById('modal-body')

const url = 'https://jsonplaceholder.typicode.com/users'
let users = []
getData(url)


tableBodyEl.addEventListener('click', event => {
  const rowEl = event.target.closest('.table-row')
  console.log(rowEl);
  if (rowEl) {
    showModal(rowEl.dataset.id)
  }
})
modalEl.addEventListener('click', event => {
  if (event.target.classList.contains('modal-backdrop') || event.target.classList.contains('btn-modal-close')) {
    closeModal()
  }
})


function showModal(userId) {
  modalEl.classList.add('is-visible')
  renderModal(userId)
}
function closeModal() {
  modalEl.classList.remove('is-visible')
}

function renderModal(id) {
  const user = users.find(user => user.id == id)
  // console.log(user);
  const userInfoHTML = `<div class="modal-row">
    <div class="modal-col">
      <h4 class="info-title">Address</h4>
      <p>Phone: ${user.phone}<p>
      <p>City: ${user.address.city}<p>
      <p>Street: ${user.address.street}<p>
      <p>Suite: ${user.address.suite}<p>
      <p>Zipcode: ${user.address.zipcode}<p>
    </div>
    <div class="modal-col">
      <h4 class="info-title">Company</h4>
      <p>Company name: ${user.company.name}<p>
      <p>Catch phrase: ${user.company.catchPhrase}<p>
      <p>bs: ${user.company.bs}<p>
    </div>
  </div>`
  modalBodyEl.innerHTML = ''
  modalBodyEl.insertAdjacentHTML('beforeEnd', userInfoHTML)
}


function renderRows(table_body, users) {
  table_body.innerHTML = ''
  users.forEach(user => {
      table_body.insertAdjacentHTML('beforeEnd', createRow(user))
  });
}
function createRow(user) {
  return `<tr data-id="${user.id}" class="table-row">
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
  users = data
}