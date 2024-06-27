document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon");
    const modals = document.querySelectorAll(".modal, .chat-panel, .calendar-panel, .notification-panel");
    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");
    const chatButton = document.getElementById("chat-button");
    const calendarButton = document.getElementById("calendar-button");
    const notificationButton = document.getElementById("notification-button");
    const chatPanel = document.getElementById("chat-panel");
    const calendarPanel = document.getElementById("calendar-panel");
    const notificationPanel = document.getElementById("notification-panel");
    const modalOne = document.getElementById("modal-1");
    const modalTwo = document.getElementById("modal-2");
    const clock = document.getElementById("clock");
    const body = document.querySelector("body");

    icons.forEach(icon => {
        icon.addEventListener("dragstart", dragStart);
        icon.addEventListener("dragend", dragEnd);
        icon.addEventListener("dblclick", openModal);
    });

    modals.forEach(icon => {
        icon.addEventListener("dragstart", dragStart);
        icon.addEventListener("dragend", dragEnd);
        icon.addEventListener("dblclick", openModal);
    });

    document.addEventListener("dragover", dragOver);
    document.addEventListener("drop", drop);

    document.querySelectorAll(".close-button").forEach(button => {
        button.addEventListener("click", closeModal);
    });

    chatButton.addEventListener("click", () => {
        chatPanel.style.display = "flex";
    });

    calendarButton.addEventListener("click", () => {
        calendarPanel.style.display = "flex";
    });

    notificationButton.addEventListener("click", () => {
        notificationPanel.style.display = "flex";
    });

    icon1.addEventListener("click", () => {
        modalOne.style.display = "flex";
    });

    icon2.addEventListener("click", () => {
        modalTwo.style.display = "flex";
        body.style.backgroundColor = "rgb(10, 64, 0);";
   });

    updateClock();
    setInterval(updateClock, 1000);

    function dragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
        setTimeout(() => {
            e.target.style.visibility = "hidden";
        }, 0);
    }

    function dragEnd(e) {
        e.target.style.visibility = "visible";
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text")
        const draggableElement = document.getElementById(id);
        const dropzone = e.target;
        const offsetX = e.clientX - dropzone.getBoundingClientRect().left;
        const offsetY = e.clientY - dropzone.getBoundingClientRect().top;
        draggableElement.style.left = `${offsetX}px`;
        draggableElement.style.top = `${offsetY}px`;
    }

    function closeModal(e) {
        const modalId = e.target.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "none";
        // close modal : reset background image and color
        body.style.backgroundColor = "black";
        body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/axiom-pattern.png')";
    }

    function openModal(e) {
        const modalId = e.target.id.replace('icon', 'modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            modal.style.top = `${e.clientY}px`;
            modal.style.left = `${e.clientX}px`;
        }
    }

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

});


