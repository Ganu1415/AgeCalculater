//set max date to today so that the user can't pick future date

const birthdateInput = document.getElementById("birthdate");
const today = new Date().toISOString().split("T")[0];
birthdateInput.setAttribute("max", today);

function calculateAge() {
  const birthDateValue = birthdateInput.value;
  if (!birthDateValue) {
    alert("Please Select your birth date");
    return;
  }

  const birthDate = new Date(birthDateValue);
  const now = new Date();

  if (birthDate > now) {
    alert("Birth date can't be in the future");
    return;
  }

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), 0).getDate(); // days in the preveus month
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  document.getElementById("result").textContent = `You are ${years} year${
    years !== 1 ? "s" : ""
  }, ${months} month${months !== 1 ? "s" : ""}, ${days} day${
    days !== 1 ? "s" : ""
  } old.`;
}
