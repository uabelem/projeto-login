function verSenha1() {

    const input1 = document.getElementById("senha1");

    if (input1.type === "password") {
        input1.type = "text"
        key1.innerHTML = 'clock_loader_10'
        lock1.innerHTML = 'lock_open_right';

        setTimeout(() => { key1.innerHTML = 'clock_loader_20'; }, 200)
        setTimeout(() => { key1.innerHTML = 'clock_loader_40'; }, 600)
        setTimeout(() => { key1.innerHTML = 'clock_loader_60'; }, 1000)
        setTimeout(() => { key1.innerHTML = 'clock_loader_80'; }, 1400)
        setTimeout(() => { key1.innerHTML = 'clock_loader_90'; }, 1600)
        setTimeout(() => {
            input1.type = "password";
            key1.innerHTML = 'vpn_key'
            lock1.innerHTML = 'lock';
        }, 2000) // 6s
    }
}

function verSenha2() {

    const input2 = document.getElementById("senha2");

    if (input2.type === "password") {
        input2.type = "text"
        key2.innerHTML = 'clock_loader_10'
        lock2.innerHTML = 'lock_open_right';

        setTimeout(() => { key2.innerHTML = 'clock_loader_20'; }, 200)
        setTimeout(() => { key2.innerHTML = 'clock_loader_40'; }, 600)
        setTimeout(() => { key2.innerHTML = 'clock_loader_60'; }, 1000)
        setTimeout(() => { key2.innerHTML = 'clock_loader_80'; }, 1400)
        setTimeout(() => { key2.innerHTML = 'clock_loader_90'; }, 1600)
        setTimeout(() => {
            input2.type = "password";
            key2.innerHTML = 'vpn_key'
            lock2.innerHTML = 'lock';
        }, 2000)
    }
}

function validar(event) {
    event.preventDefault();

    const email1 = document.getElementById("email1").value;
    const email2 = document.getElementById("email2").value;
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;

    if (email1 !== email2) {
        const inputEmail2 = document.getElementById("email2");
        inputEmail2.value = "";
        inputEmail2.placeholder = "Os e-mails não coincidem!";
        inputEmail2.style.color = "red";

        setTimeout(() => {
            inputEmail2.placeholder = "Confirme seu e-mail";
            inputEmail2.style.color = "";
        }, 3000)
        return;
    }

    if (senha1 !== senha2) {
        const inputSenha2 = document.getElementById("senha2");
        inputSenha2.value = "";
        inputSenha2.placeholder = "As senhas não coincidem!";
        inputSenha2.style.color = "red";

        setTimeout(() => {
            inputSenha2.placeholder = "Confirme sua senha";
            inputSenha2.style.color = "";
        }, 3000)
        return;
    }

    event.target.submit();
}