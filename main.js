var toast = document.querySelector(".toast");
var btn = document.querySelector(".toast-btn");
var close = document.querySelector(".toast-close");
var progress = document.querySelector(".progress");

btn.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");

    //  thời gian tự tắt
    setTimeout(() => {
        toast.classList.remove("active")
    },5000)
})

// bấm vào nút Close tắc
close.addEventListener("click", () =>{ 
    toast.classList.remove("active")

    //  thời gian tắt
    setTimeout(() => {
        toast.classList.remove("active")
    },300)
})




