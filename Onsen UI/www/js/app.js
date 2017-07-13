document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
        };
    } else if (page.id === 'page2') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page3.html', { data: { title: 'Page 3' } });
        };
    } else if (page.id === 'page3') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page4.html', { data: { title: 'Page 4' } });
        };
    } else if (page.id === 'page4') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page5.html', { data: { title: 'Page 5' } });
        };
    } else if (page.id === 'page5') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page6.html', { data: { title: 'Page 6' } });
        };
    } else if (page.id === 'page6') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page7.html', { data: { title: 'Page 7' } });
        };
    } else if (page.id === 'page7') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page8.html', { data: { title: 'Page 8' } });
        };
    }
});