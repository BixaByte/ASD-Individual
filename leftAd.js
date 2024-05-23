var formdata = new FormData();
formdata.append("type", "Verticle Strip");
formdata.append("tags", "music,party, animal, dog, cat, pet, dogs, cats");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "yvUIGkL3un3iOxqbJpzbv5G6RJCLKoy1");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    var iframe = document.getElementById('adLeftSide');
       if (iframe) {
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(`
            <html>
            <body>
                <a href="${response.href}" class="anchorElement">
                    <img src="${response.link}" alt="${response.alt}" class="advertIMG">
                </a>
                <div class="headerText">${response.message}</div>
            </body>
            </html>
        `);
        doc.close();
    }
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}



