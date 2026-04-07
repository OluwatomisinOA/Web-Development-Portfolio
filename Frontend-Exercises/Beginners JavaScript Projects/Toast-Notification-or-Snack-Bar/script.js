const toastBox = document.getElementById('toast-box');
const successMsg = 'Successfully submitted';
const errorMsg = 'Please fix the error!';
const invalidMsg = 'Invalid input, check again';

function showToast(msg) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

}