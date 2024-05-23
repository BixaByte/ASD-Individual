var formdata = new FormData();
formdata.append("type", "Horizontal Strip");
formdata.append("tags", "music,party, animal, dog, cat, pet, dogs, cats");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "yvUIGkL3un3iOxqbJpzbv5G6RJCLKoy1");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    var iframe = document.getElementById('adIframe');
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




/*
var formdata = new FormData();
formdata.append("type", "Verticle Strip");
formdata.append("tags", "animal,animals,pet,pets,dog,cat,drink,food,clothing,fashion");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "yvUIGkL3un3iOxqbJpzbv5G6RJCLKoy1");

ajax.send(formdata);

function completeHandler(event: ProgressEvent<XMLHttpRequestEventTarget>) {
  const xhr = event.target as XMLHttpRequest | null;
  if (xhr) {
      const response = JSON.parse(xhr.responseText);

      console.log(response);

      const advertIMG = document.querySelector('.advertIMG') as HTMLImageElement | null;
      const anchorElement = document.querySelector('.anchorElement') as HTMLAnchorElement | null;
      const headerText = document.querySelector('.headerText') as HTMLElement | null;

      if (advertIMG) {
          advertIMG.src = response.link || '';
          advertIMG.alt = response.alt || '';
      }

      if (anchorElement) {
          anchorElement.href = response.href;
      }

      if (headerText) {
          headerText.innerHTML = response.message;
      }
  } else {
      console.error('event.target is null');
  }
}*/


