window.onload = () => {

    for (let l of document.getElementsByTagName('a')) {
        if (l.href === location.href) l.classList.add('on-page')
    }

    const submitBtn = document.getElementById('submit-btn')
    if (submitBtn) submitBtn.addEventListener('mouseover', e => {
        submitBtn.style.position = "absolute"
        submitBtn.style.left = `${Math.floor(Math.random() * 100)}%`
        submitBtn.style.top = `${Math.floor(Math.random() * 100)}%`
        submitBtn.innerText = "leave me alone pls"
        

        // e.preventDefault()
        // const form = document.getElementById('form')
        // const parent = document.getElementById('form').parentElement
        // parent.removeChild(form)
        // const receipt = document.createElement('h4')
        // receipt.innerText = 'thanks! my dog will get in contact with your people'
        // parent.appendChild(receipt)
    })
}