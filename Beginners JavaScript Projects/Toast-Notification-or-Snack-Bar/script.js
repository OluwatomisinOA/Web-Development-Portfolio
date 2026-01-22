const toastBox = document.getElementById('toast-box');
const successMsg = '<i class="fa-solid fa-circle-check></i>Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark></i>Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation></i>Invalid input, check again';

function showToast(msg) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

}