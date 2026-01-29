// Test data (hardcoded)
const people = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "123 Main Street, New York, NY",
    phone: "+1 555 123 4567",
    birthday: "1990-05-14"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak Avenue, Los Angeles, CA",
    phone: "+1 555 987 6543",
    birthday: "1988-11-02"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Brown",
    address: "789 Pine Road, Chicago, IL",
    phone: "+1 555 456 7890",
    birthday: "1995-03-22"
  }
];

// Dom elements
const personListElement = document.querySelector(".person-list");

function renderPersonList() {
  personListElement.innerHTML = "";

  people.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.firstName} ${person.lastName}`;
    li.classList.add("person-item");

    // click için kullanacağız
    li.dataset.id = person.id;

    personListElement.appendChild(li);
  });
}

renderPersonList();