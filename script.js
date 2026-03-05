function start(squares) { 
    const cont = document.createElement("div");
    const button = document.createElement("button");
    const contWidth = 700;
    
    button.innerText = "Change Grid";
    button.style.cssText = "\
        color: white;\
        background-color: rgb(30, 46, 83);;\
        margin: auto;\
        display: block;\
        margin-top: 10px;\
        padding: 5px 10px;\
        border: none;\
        font-size: 15px;\
        border-radius: 30px;\
        font-weight: bold;\
        box-shadow: 1px 1px 3px 2px rgb(180, 180, 242);\
    ";

    button.addEventListener("mouseenter", (event) => {
        buttonHover(event, "hoverStart");
    });

    button.addEventListener("mouseleave", (event) => {
        buttonHover(event, "hoverEnd");
    });

    button.addEventListener("click", changeGrid);

    cont.style.cssText = `\
        display: flex;\
        flex-direction: column;\
        background-color: rgb(56, 54, 54);\
        width: ${contWidth}px;\
        height: ${contWidth}px;\
        margin: auto;\
        margin-top: 5px;\
    `;
    
    for(let i = 0; i < squares; ++i) {
        const row = document.createElement("div");

        row.style.cssText = `\
            display: flex;
            background-color: rgb(218, 219, 221);\
            flex: 1;\
        `;

        for(let j = 0; j < squares; ++j) {
            const square = document.createElement("div");
            let side = (contWidth)/squares;
        
            square.style.cssText = `\
                background-color: rgb(218, 219, 221);\
                flex: 1;\
                border: 1px solid black;\
            `;
            square.addEventListener("mouseenter", changeBackground);

            
            row.appendChild(square);
        }
        cont.appendChild(row);
    }
    
    document.body.appendChild(button);
    document.body.appendChild(cont);
}

function buttonHover(event, status) {
    const button = event.target;
    switch(status) {
        case "hoverStart":
            button.style.cssText = "\
                color: white;\
                background-color: rgb(30, 46, 83);;\
                margin: auto;\
                display: block;\
                margin-top: 10px;\
                padding: 5px 10px;\
                border: none;\
                font-size: 13px;\
                border-radius: 30px;\
                font-weight: bold;\
                opacity: 80%;\
                box-shadow: none;\
            ";
            break;
        case "hoverEnd":
            button.style.cssText = "\
                color: white;\
                background-color: rgb(30, 46, 83);;\
                margin: auto;\
                display: block;\
                margin-top: 10px;\
                padding: 5px 10px;\
                border: none;\
                font-size: 15px;\
                border-radius: 30px;\
                font-weight: bold;\
                box-shadow: 1px 1px 3px 2px rgb(180, 180, 242);\
            ";
            break
    } 
}

function changeBackground(e) {
    const square = e.target;
    let [r, g, b] = getRandomRGB();
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function getRandomRGB() {
    let r = 255;
    let g = 255;
    let b = 255;

    while((255 - (r+g+b)/3) < 80) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }

    return [r, g, b];
}

function changeGrid() {
    const side = prompt("Enter number of squares per side(Shouldn't exceed 100): ");
    document.body.innerHTML = "";

    start(side);
}

start(16);