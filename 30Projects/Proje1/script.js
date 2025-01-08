// Samee tirooyinka Xarash iyo Madax, marka hore na 0 garee.

let madax = 0;
let xarash = 0;

// Aan doorano Batoonada, Batoonada HTML ka ee lacagta, korUtuur-flip iyo tirtir-reset aan doorano.
let lacagta = document.querySelector("#coin");
let korUtuurBtn = document.querySelector("#korUtuur-flip");
let tirtirBtn = document.querySelector("#tiritir-reset");

// Flip yacni korUtuur markii la riixo
korUtuurBtn.addEventListener("click", ()=> {
    // Random markaa sameeno, 0 ama 1 waa inuu nasiiyaa
    // (0 Madax, 1 na Xarash hanoo ahaato)
    let i = Math.floor(Math.random() * 2);

    // si kumeel gaar ah animationka lacagta u xirnay.
    lacagta.style.animation= "none";

    if (i) {
        // hadii i 1 (xarash) imaado, 100 milli second kadib ayaan 
        // lacagta flip-madax animation ku sameeneenaa.
        setTimeout(() => {
            lacagta.style.animation = "spin-madax 3s forwards";
        }, 1000);
        xarash++;
    } else {
         // hadii i 0 (madax) imaado, 100 milli second kadib ayaan 
        // lacagta flip-xarash animation ku sameeneenaa.
        setTimeout(() => {
            lacagta.style.animation = "spin-xarash 3s forwards";
        }, 1000);
        madax++;
    }

    // Function update gareenaayo Statistics yada kadibna Buttons ka 
    // xanibaayo aan sameeno.
    setTimeout(updateStats, 3000);
    disableButton();
});

// function ka update gareenaayo Statistics yada.
function updateStats(){
    document.querySelector("#madax-count").textContent = `Madax: ${madax}`;
    document.querySelector("#xarash-count").textContent = `Xarash: ${xarash}`;
}

// function ka xanibaayo Buttons yada.
function disableButton(){
    korUtuurBtn.disabled = true;
    setTimeout(()=> {
        korUtuurBtn.disabled = false;
    }, 3000);
}

// Riixida Button ka tirtir-Reset ka
tirtirBtn.addEventListener("click", () => {
    // waxuu joojinayaa animation ka lacagta, waxuu 0 geynayaa tirooyinka Xarashka 
    // iyo Madaxa, waxuuna update gareenayaa Statistics ga.
    lacagta.style.animation = "none";
    madax = 0;
    xarsh = 0;
    updateStats();
});