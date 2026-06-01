window.addEventListener("load", () => {

    const loading = document.getElementById("loading-screen");

    setTimeout(() => {
        loading.style.display = "none";
    }, 3500);

});

const analyzeBtn = document.getElementById("analyzeBtn");
const modal = document.getElementById("modal");
const counter = document.getElementById("counter");

if(analyzeBtn){

    analyzeBtn.addEventListener("click", () => {

        modal.style.display = "flex";

        let value = 0;

        const interval = setInterval(() => {

            value++;

            counter.textContent = value + "%";

            if(value >= 89){
                clearInterval(interval);
            }

        },20);

    });

}