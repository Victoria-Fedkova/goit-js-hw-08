import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

const data = localStorage.getItem("feedback-form-state");
if (data != null) {
  updateForm(data);
}

form.addEventListener("input", throttle(saveFormData, 500, { leading: false }));
form.addEventListener("submit", formReset);

function saveFormData(evt) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(formData);
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  //   updateOutput();
  //   form.reset();
}

function updateForm(data) {
  const parsedFormData = JSON.parse(data);
  //   console.log(data);
  //   console.log(parsedFormData.email);

  form.elements.email.value = parsedFormData.email;
  form.elements.message.value = parsedFormData.message;
  //   form.reset();
}

function formReset(event) {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  localStorage.clear();
  form.reset();
}
