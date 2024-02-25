const bgDiv = document.createElement('div');
const arrrow = document.createElement('div');
bgDiv.style.background = 'blue';
bgDiv.style.position = 'relative';
bgDiv.style.height = '100vh';

arrrow.style.background = 'white';
arrrow.style.position = 'absolute';
arrrow.style.height = '50px'
arrrow.style.width = '15px'
arrrow.style.bottom = '10px';
arrrow.style.left = '50%';

bgDiv.appendChild(arrrow);

document.body.appendChild(bgDiv);