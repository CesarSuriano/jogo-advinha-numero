let contador = 0;

document.addEventListener('init', function (event) {
    let page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#btn-start').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
        };
    }

    if (page.id === 'page8') {
        document.getElementById("resultado").innerHTML = "Seu número é: " + contador;
    }
});

function click_resposta(value, page) {
    contador += value;
    console.log(contador)
    document.querySelector('#myNavigator').pushPage(page + '.html', { data: { title: '' } });
}