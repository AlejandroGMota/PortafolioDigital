const viewer = document.getElementById('viewer'),
    infografia = document.querySelectorAll('.min-infografia');


for (let i = 0; i < infografia.length; i++) {
    let nameInfo, srcInfo;

    function casos(caso) {
        switch (caso) {
            case 0:
                nameInfo = 'Ejes De La Sustentabilidad'
                srcInfo = 'EjesSustentabilidad'
                break;
            case 1:
                nameInfo = 'Estrategia De Ventas'
                srcInfo = 'EstrategiaVentas'
                break;
            case 2:
                nameInfo = 'Filosofía Existencial'
                srcInfo = 'FilosofiaExistencial'
                break;
            case 3:
                nameInfo = 'Presupuesto'
                srcInfo = nameInfo
                break;
            case 4:
                nameInfo = 'Sistemas Operativos'
                srcInfo = 'SistemasOperativos'
                break;
            case 5:
                nameInfo = 'Estudio Técnico'
                srcInfo = 'EstudioTecnico'
                break;
        }
    }
    infografia[i].addEventListener('click', () => {
        casos(i)
        innerViewer(nameInfo, srcInfo, i)
        viewer.style.visibility = "visible";
        disableScroll();
        flechas(i)
    })

    function flechas(i) {
        let caso

        const btnPrevious = document.getElementById('previous'),
            btnNext = document.getElementById('next');

        btnPrevious.addEventListener('click', () => {
            caso = i - 1
            casos(caso);
            innerViewer(nameInfo, srcInfo, caso)
            flechas(caso)
        })
        btnNext.addEventListener('click', () => {
            caso = i + 1
            casos(caso);
            innerViewer(nameInfo, srcInfo, caso)
            flechas(caso)
        })
    }

}

function innerViewer(nameInfo, srcInfo, i) {
    viewer.innerHTML = `
            <link rel="stylesheet" href="./css/viewer.css">
            <h2>${nameInfo}</h2>
            <div id="container-viewer";>
                <button id="previous"><img src="./img/componets/previous.png" alt="botón anterior" title="Anterior infografía"></button>
                <img class="infografia" src="./img/infographics/${srcInfo}.png" alt="Infografia de Ejes de la Sustentabilidad">
                <button id="next"><img src="./img/componets/next.png" alt="botón siguiente" title="Siguiente infografía"></button>
            </div>
            `
    const btnPrevious = document.getElementById('previous'),
        btnNext = document.getElementById('next');
    if (i == 0) {
        btnPrevious.style.visibility='hidden'
    }
    if (i == infografia.length-1) {
        btnNext.style.visibility='hidden'
    }
}
window.addEventListener('click', function (e) {
    const containerViewer = document.getElementById('container-viewer');

    if (e.target == viewer || e.target == containerViewer) {
        viewer.style.visibility = 'hidden';
        enableScroll();
    }
});

function disableScroll() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y)
    };
}

function enableScroll() {
    window.onscroll = null;
}