// PASSWORD
// PASSWORD
// PASSWORD

form1.confirmPassword.addEventListener("change", function () {
    if (form1.confirmPassword.value != form1.password.value) {
        form1.confirmPassword.setCustomValidity("Введені паролі не співпадають");
        form1.password.setCustomValidity("Введені паролі не співпадають");
    } else {
        form1.confirmPassword.setCustomValidity("");
        form1.password.setCustomValidity("");
        shoppingCard.style.zIndex = "0";
    }
})

//   TELEPHONE
//   TELEPHONE
//   TELEPHONE

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    let matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});


// POST DATA
// POST DATA
// POST DATA

const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data,
    });

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    return await response.json();
}

const sendCard = () => {
    const cartForm = document.querySelector(".cartForm");
    cartForm.addEventListener('submit', e => {
        // e.preventDefault();

        const formData = new FormData(cartForm);
        const data = {};

        for (const [key, value] of formData) {
            data[key] = value;
        }
        data.order = hiddenList
        console.log(data);

        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
            .then(() => {
                cartForm.reset();
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

sendCard();

// GET RESOURSE
// GET RESOURSE
// GET RESOURSE

const getResourse = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data,
    });

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }

    return await response.json();
}

const getData = () => {
    const loginForm = document.querySelector(".loginForm");
    loginForm.addEventListener('submit', e => {
        // e.preventDefault();

        const formData = new FormData(loginForm);
        const data = {};

        for (const [key, value] of formData) {
            data[key] = value;
        }
        console.log(data);

        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
            .then(() => {
                cartForm.reset();
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

getData();