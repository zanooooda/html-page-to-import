
const titleQuestion = document.getElementById('titleQuestion')
const answer = document.getElementById('answer')
const titleAnswers = document.getElementById('titleAnswer')

let url =new URL (location.href)
let details = JSON.parse(url.searchParams.get('data'))
console.log(details,'detailsdetailsdetails')
   const getDetailsTitle = ()=>{
       let div = document.createElement('div');
      div.classList.add('titleQuestion')
      div.textContent=`${details[0]}`
       titleQuestion.appendChild(div)
   }
   const getAnswer = () => {
    const titleAnswer =details[1].split('1')[0]
       let from = details[1].search('1.');
       let to = details[1].length;
       let subAnswer = details[1].substring(from,to);
       let numberBlack = document.createElement('p');
       let liTitle = document.createElement('p');
       let subAnswerP = document.createElement('div');

       numberBlack.classList.add('numberBlack')
       numberBlack.textContent=` `


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
getDetailsTitle()
getAnswer()