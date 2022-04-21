document.addEventListener("contextmenu", function (mehedicodesecurity) {
    mehedicodesecurity.preventDefault();
});

document.onkeydown = function (mehedicodesecurity) {
    if (Event.keyCode == 123) {
        return false;
    }

    if (
        mehedicodesecurity.ctrlKey &&
        mehedicodesecurity.shiftKey &&
        mehedicodesecurity.keyCode == "I".charCodeAt(0)
    ) {
        return false;
    }

    if (
        mehedicodesecurity.ctrlKey &&
        mehedicodesecurity.shiftKey &&
        mehedicodesecurity.keyCode == "C".charCodeAt(0)
    ) {
        return false;
    }

    if (
        mehedicodesecurity.ctrlKey &&
        mehedicodesecurity.shiftKey &&
        mehedicodesecurity.keyCode == "J".charCodeAt(0)
    ) {
        return false;
    }

    if (
        mehedicodesecurity.ctrlKey &&
        mehedicodesecurity.keyCode == "U".charCodeAt(0)
    ) {
        return false;
    }
};
