
document.body.addEventListener('click', (event)=>{

    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = "Hi";

    document.body.appendChild(circle);

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;

    const color = [ "red","blue","green","blueviolet","pink","orange","purple","greenyellow","brown","grey"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    const message = ["Hi","Hola","Hallo","Bonjour","Ciao"];
    circle.innerText = message[Math.floor(Math.random()*message.length)];


    setTimeout(()=>{
        circle.remove();
    }, 4000)



})





