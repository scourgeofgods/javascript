let colors = ['#fff', '#000']

const btn = document.getElementById('btn')
const color = document.querySelector('.main__content--title__color')

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}