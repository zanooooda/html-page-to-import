
const list = document.getElementById('list')

let array = []
const getQuestion = async () => {
    let arrayListQuestion=  await fetch('TV_FAQ_eng.json')
        .then(res=>res.json())
        .then(data=>data)
array.push(arrayListQuestion)
}
getQuestion().then(()=>array[0].map(item=>{
    let div = document.createElement('a');
    div.href = `./detailsQuestion.html?data=${JSON.stringify([item.question, item.answer])}`
    div.classList.add('textQuestion')
    div.textContent=`${item.question}`

    list.appendChild(div)
}))
