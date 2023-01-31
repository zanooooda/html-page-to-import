
const titleQuestion = document.getElementById('titleQuestion')
const answer = document.getElementById('answer')
const titleAnswers = document.getElementById('titleAnswer')

let url =new URL (location.href)
let detailsTitle = JSON.parse(url.searchParams.get('data'))
let indexObj = detailsTitle

   const getDetailsTitle = ()=>{
       let div = document.createElement('div');
      div.classList.add('titleQuestion')
      div.textContent=`${array[0][indexObj].question}`
       titleQuestion.appendChild(div)
   }
let array = []
const getQuestion = async () => {
   let arrayListQuestion=  await fetch('TV_FAQ_eng.json')
       .then(res=>res.json())
       .then(data=>data)
   array.push(arrayListQuestion)
}
   const getAnswer = () => {
   const detailsQuestion = array[0][indexObj]
       const titleAnswer = detailsQuestion.answer.split('1')[0]
       let from = detailsQuestion.answer.search('1.');
       let to = detailsQuestion.answer.length;
       let subAnswer = detailsQuestion.answer.substring(from,to);
       let numberBlack = document.createElement('p');
       let liTitle = document.createElement('p');
       let subAnswerP = document.createElement('div');

       numberBlack.classList.add('numberBlack')
       numberBlack.textContent=` `
       console.log(titleAnswer,'  ')

       liTitle.classList.add('listQuestionTitle')
       liTitle.innerText=`${titleAnswer}`
       subAnswerP.classList.add('subAnswerP')
       subAnswerP.innerText=`${subAnswer}`
       titleAnswers.appendChild(numberBlack)
       titleAnswers.appendChild(liTitle)

       if(from !== -1){
         answer.appendChild(subAnswerP)
      }

   }
getQuestion().then(()=> {
    getDetailsTitle()
    getAnswer()
})

