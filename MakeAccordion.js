function MakeAccordion(parsedJSON) {
    let accordionCode = "";
    for(let i=0; i<parsedJSON.length; i++) {
        let item_title = parsedJSON[i]['title'];
        let item_desc = parsedJSON[i]['desc'];

        accordionCode += `
            <div class="accordion-item mx-4">
                <h1 class="accordion-header" id="item${i}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseitem${i}" aria-expanded="false" aria-controls="collapseitem${i}">
                    <div class="title">${item_title}<div>
                </button>
                </h1>
                <div id="collapseitem${i}" class="accordion-collapse collapse" aria-labelledby="item${i}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul>`;

        for(let j=0; j<Object.keys(parsedJSON[i]).length-2; j++) {
            accordionCode += `<li class="list-group-item py-3">${parsedJSON[i][`text${j}`][0]}<a href="${parsedJSON[i][`text${j}`][1]}" target="_blank" class="btn btn-primary float-end" role="button">visit</a></li>`
        }

        accordionCode += `</ul></div></div></div>`;
    }

    return accordionCode;
}