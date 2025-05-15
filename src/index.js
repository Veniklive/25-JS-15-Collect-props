"use strict";

const divContainer = document.getElementById("container");

function AddCreateElement(tag, attributes = {}) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    if (key === "class") {
      element.className = value;
    } else if (key === "text") {
      element.textContent = value;
    } else if (key === "required") {
      element.required = value;
    } else {
      element.setAttribute(key, value);
    }
  }
  return element;
}

const h1 = AddCreateElement("h1", {
  text: "Create an account",
});
const h2 = AddCreateElement("h2", {
  text: "We always keep your name and email address private.",
});

const form = document.createElement("form");
const formInputsDiv = AddCreateElement("div", { class: "form-inputs" });
const firstName = AddCreateElement("input", {
  type: "text",
  maxlength: "20",
  required: true,
  placeholder: "First name",
});
const lastName = AddCreateElement("input", {
  type: "text",
  maxlength: "20",
  required: true,
  placeholder: "Last name",
});
const nickName = AddCreateElement("input", {
  type: "text",
  maxlength: "20",
  required: true,
  placeholder: "Display Name",
});
const email = AddCreateElement("input", {
  type: "email",
  maxlength: "320",
  required: true,
  placeholder: "Email Address",
});

const formButtonsDiv = AddCreateElement("div", { class: "form-buttons" });

const formButtonSubmit = AddCreateElement("button", {
  type: "reset",
  text: "Create account",
});

const formButtonReset = AddCreateElement("button", {
  type: "reset",
  text: "Cancel",
});

divContainer.append(h1, h2, form);

form.append(formInputsDiv);
formInputsDiv.append(firstName, lastName, nickName, email);

form.append(formButtonsDiv);
formButtonsDiv.append(formButtonReset, formButtonSubmit);

class Person {
  constructor(firstName, lastName, nickName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.email = email;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const person = new Person(
    firstName.value,
    lastName.value,
    nickName.value,
    email.value
  );

  localStorage.setItem(lastName.value, JSON.stringify(person));
  console.log(localStorage.getItem(lastName.value));
});
