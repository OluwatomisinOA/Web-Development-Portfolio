const dateInput = document.getElementById('date-picker');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculateBtn.addEventListener("click", function() {
  const [y, m, d] = dateInput.value.split('-');
  const birthDate = new Date(y,m-1,d)
  const today = new Date();

  if (dateInput.value === "") {
    alert("Please enter your birth date!");
    return;
  }

  let y1 = birthDate.getFullYear();
  let m1 = birthDate.getMonth() + 1;
  let d1 = birthDate.getDate();

  let y2 = today.getFullYear();
  let m2 = today.getMonth() + 1;
  let d2 = today.getDate();

  let y3, m3, d3;

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m2--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y2--;
    m3 = 12 + m2 - m1;
  }

  y3 = y2 - y1;

  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;

})

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}