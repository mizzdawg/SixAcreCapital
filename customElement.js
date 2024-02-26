const bgDiv = document.createElement('div');
const arrrow = document.createElement('div');
bgDiv.style.background = 'blue';
bgDiv.style.position = 'relative';
bgDiv.style.height = '100vh';

arrrow.style.background = 'rgba(0 0 0 / 0';
arrrow.style.position = 'absolute';
arrrow.style.bottom = '50px';
arrrow.style.left = '50%';

arrrow.animate([
    { transform: 'translateY(0)', opacity: 0 },
    { transform: 'translateY(30px)', opacity: 1 }
], {
    duration: 1500,
    iterations: Infinity
});



let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

svg.setAttribute('width', '60');
svg.setAttribute('height', '60');
svg.setAttribute('viewBox', '0 0 16 16');
svg.setAttribute('fill', 'white');

path.setAttribute('d', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z');
svg.appendChild(path);
arrrow.appendChild(svg);

bgDiv.appendChild(arrrow);

document.body.appendChild(bgDiv);
