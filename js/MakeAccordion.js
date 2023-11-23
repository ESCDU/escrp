function MakeAccordion(parsedJSON) {
    let accordionCode = "";
    for(let i=0; i<parsedJSON.length; i++) {
        let item_title = parsedJSON[i]['title'];
        let idName = item_title.split(" ")[0]
        let item_desc = parsedJSON[i]['desc'];

        accordionCode += `
            <div class="accordion-item mx-4">
                <h1 class="accordion-header" id="item_${idName}_${i}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseitem_${idName}_${i}" aria-expanded="false" aria-controls="collapseitem_${idName}_${i}">
                    <div class="title">${item_title}<div>
                </button>
                </h1>
                <div id="collapseitem_${idName}_${i}" class="accordion-collapse collapse" aria-labelledby="item_${idName}_${i}" data-bs-parent="#accordionExample">
                <div class="m-3">${item_desc}</div>
                <div class="accordion-body">
                    <ul>`;

        for(let j=0; j<Object.keys(parsedJSON[i]).length-2; j++) {
            let title = convertSpecialCharacters(parsedJSON[i][`text${j}`][0]);
            let link = parsedJSON[i][`text${j}`][1];
            let desc = convertSpecialCharacters(parsedJSON[i][`text${j}`][2]);

            accordionCode += `<li class="list-group-item py-3" id="subitem_${idName}_${i}_${j}">
            ${title} 
            <a onclick="openModal('${title}', '${desc}')" target="_blank" class="btn btn-outline-info mx-2 float-end" role="button">About</a>
            <a href="${link}" target="_blank" class="btn btn-outline-primary float-end" role="button">Visit</a></li>`
        }

        accordionCode += `</ul></div></div></div>`;
    }

    return accordionCode;
}


function convertSpecialCharacters(inputString) {
    const regex = /['",]/g;
    const replacements = {
      "'": "\\'",
      '"': '&quot;',
      ',': '\\,'
    };
  
    return inputString.replace(regex, match => replacements[match]);
  }