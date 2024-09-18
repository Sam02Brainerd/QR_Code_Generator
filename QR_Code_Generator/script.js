const generateBtn = document.getElementById('generate-btn');
const qrCanvas = document.getElementById('qr-code');
const downloadBtn = document.getElementById('download-btn');
const input = document.getElementById('text-input');

generateBtn.addEventListener('click', function () {
  const text = input.value.trim();
  if (!text) {
    alert('Please enter some text or a URL.');
    return;
  }

  // Clear any previous QR code
  const ctx = qrCanvas.getContext('2d');
  ctx.clearRect(0, 0, qrCanvas.width, qrCanvas.height);

  // Generate the QR code using a library
  QRCode.toCanvas(qrCanvas, text, { width: 200 }, function (error) {
    if (error) console.error(error);
    else {
      downloadBtn.classList.remove('hidden');
    }
  });
});

downloadBtn.addEventListener('click', function () {
  const link = document.createElement('a');
  link.download = 'qr-code.png';
  link.href = qrCanvas.toDataURL('image/png');
  link.click();
});
