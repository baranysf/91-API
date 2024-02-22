apiUrl= 'http://numbersapi.com/random';

const xhr=new XMLHttpRequest();

xhr.open('GET', apiUrl);
xhr.send();

xhr.onload=function(){
    const data = xhr.responseText;
    document.getElementById('result').textContent=data;
}

xhr.onerror=function(){
    document.getElementById('result').textContent='ERROR!!!';
}