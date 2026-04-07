const imgBox = document.getElementById('img-box');
const qrImage = document.getElementById('qr-img');
const qrText = document.getElementById('qr-text');

function GenerateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add('show-img');
  } else {
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('error');
    }, 1000);
  }
}