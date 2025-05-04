
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('fileElem');

uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) {
    uploadArea.innerHTML = `<p><strong>Uploaded:</strong> ${file.name}</p>`;
  }
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    uploadArea.innerHTML = `<p><strong>Uploaded:</strong> ${file.name}</p>`;
  }
});
