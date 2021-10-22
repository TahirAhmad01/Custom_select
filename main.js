$(function(){
    const option = document.querySelectorAll(".option");
    const selected = document.querySelector(".selected-text")

    option.forEach(o => {
        o.addEventListener("click",() => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            $(".option-container").removeClass("active");
            $(".elect-box").removeClass("move")
        })
    })

    $(".selected").on("click", function(){
        $(".option-container").toggleClass("active");
        $(".selected-box").toggleClass("move")
    })
})

