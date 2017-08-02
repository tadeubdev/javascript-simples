window.onload = function () {

    var MenuOpen = document.querySelector('#menu-open'),
        MenuContent = document.querySelector('#menu-content'),
        FormCadastro = document.forms.FormCadastro,
        Name = FormCadastro.name,
        MessageResult = document.querySelector('#message-result'),
        UserName = null;

    Name.focus();

    MenuOpen.onclick = function () {
        MenuContent.classList.toggle('visible');
    }

    FormCadastrar = function (event) {
        event.preventDefault();

        if (!Name.value) {
            Name.focus();
            MessageResult.innerText = 'Preencha o campo nome!';
            return;
        }

        if (Name.value === 'Caio') {
            Name.focus();
            Name.value = '';
            MessageResult.innerText = 'Caio não está disponível';
            return;
        }

        UserName = Name.value;
        Name.value = '';
        document.activeElement.blur();

        MessageResult.classList.add('success');
        MessageResult.innerHTML = '<i class="fa fa-refresh fa-pulse"></i> Parabéns <b>' + UserName + '</b>! Você conseguiu. =D';

        setTimeout(function () {
            MessageResult.classList.remove('success');
            MessageResult.innerHTML = '';
        }, 4000);

        return false;
    }

}
