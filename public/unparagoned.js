document.addEventListener("DOMContentLoaded", () => {

    //Modal Sign up
    const clickAble = document.getElementById("signUp");
    const signModal = document.getElementById("signModal");
    const cancelButtonModal = document.getElementById("modalCancelButton");

    const displayModal = () => signModal.style.display = "block";
    const closeModal = () => signModal.style.display = "none";

    clickAble.addEventListener("click", () => {
        displayModal();
    });
    buttonCloseModal.addEventListener("click", () => {
        closeModal();
    });
    cancelButtonModal.addEventListener("click", () => {
        closeModal();
    });

    //Modal Log In
    const clickAbleLogIn = document.getElementById("logIn");
    const logInModal = document.getElementById("logInModal");
    const logInCancelButtonModal = document.getElementById("modalLogInCancelButton");

    const displayLogInModal = () => logInModal.style.display = "block";
    const closeLogInModal = () => logInModal.style.display = "none";

    clickAbleLogIn.addEventListener("click", () => {
        displayLogInModal();
    });
    buttonCloseLogInModal.addEventListener("click", () => {
        closeLogInModal();
    });
    logInCancelButtonModal.addEventListener("click", () => {
        closeLogInModal();
    });


    //Burger menu
    const menu = document.getElementById("navbarBasicExample");
    const burger = document.getElementById("burgerButton");

    burger.addEventListener("click", () => {
        if (menu.style.display !== "block") {
            menu.style.display = "block"
        } else {
            menu.style.display = "none"
        }
    })
});