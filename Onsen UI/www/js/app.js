let contador = 0;
let numComponentes = 0;

document.addEventListener('init', function (event) {
    let page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#btn-start').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
        };
    }

    else if (page.id === 'page8') {
        document.getElementsByClassName("resultado")[numComponentes].innerHTML = "Seu número é: " + contador;
        numComponentes ++;
    }
});

function click_resposta(value, page) {
    contador += value;
    console.log(contador)
    document.querySelector('#myNavigator').pushPage(page + '.html', { data: { title: '' } });
}

function recomecar() {
    contador = 0;
    document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
}