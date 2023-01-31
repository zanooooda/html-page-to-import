
const titleQuestion = document.getElementById('titleQuestion')
const answer = document.getElementById('answer')

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
       const subAnswer =details[1].split('1.')[1]

       let liTitle = document.createElement('li');
       let subAnswerP = document.createElement('p');


       liTitle.classList.add('listQuestionTitle')
       liTitle.textContent=`${titleAnswer}`
       subAnswerP.textContent=`${subAnswer}`

       answer.appendChild(liTitle)
      if(subAnswer){
         answer.appendChild(subAnswerP)
      }

   }
getDetailsTitle()
getAnswer()