let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});

function addItem() {
            var a = document.getElementById("list");
            var candidate = document.getElementById("candidate");
            var li = document.createElement("li");
            li.setAttribute('id', candidate.value);
            li.appendChild(document.createTextNode(candidate.value));
            a.appendChild(li);
        }
 
        
        function removeItem() {
 
            
            var a = document.getElementById("list");
            var candidate = document.getElementById("candidate");
            var item = document.getElementById(candidate.value);
            a.removeChild(item);
        }