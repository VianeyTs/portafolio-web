var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('¡Las ideas no tienen límites, solo hay que crearlas!')
    .pauseFor(1800)
    .deleteChars(9)
    .typeString('<strong>programarlas!</strong>')
    .pauseFor(2300)
    .start();
