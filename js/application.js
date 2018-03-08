onLoadWindow = () => {

    const menuOpen = document.getElementById('menu-open')
    const menuContent = document.getElementById('menu-content')
    const formRegister = document.getElementById('form-register')
    const messageResult = document.getElementById('message-result')

    let name = formRegister.name
    let username = null

    name.focus();

    menuOpen.onclick = () => {
        menuContent.classList.toggle('visible')
    }

    formLetSubmit = event => {
        event.preventDefault()

        let message = null

        if(!name.value) message = 'Preencha o campo nome!'

        if(name.value==='Caio') message = 'Caio não está disponível'

        if(message) {
            name.value = ''
            messageResult.innerText = message
            return name.focus()
        }

        username   = name.value
        name.value = ''
        document.activeElement.blur()

        messageResult.classList.add('success')
        messageResult.innerHTML = `Parabéns <b>${username}</b>! Você conseguiu! =D`

        setTimeout(() => {
            messageResult.classList.remove('success')
            messageResult.innerHTML = ''
        }, 4000)

        return false
    }

}

window.onload = onLoadWindow
