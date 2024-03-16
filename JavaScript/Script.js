const questions = [
    {
        'que': 'Which of the Following is a Markup Language?',
        'a': 'Html',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was JavaScript Launched?',
        'a': '1996',
        'b': '1995',
        'c': '1990',
        'd': 'none of the Above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS  Stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Helicopters Terminals Motorboats lamborginis',
        'correct': 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index === total){
       return endQuiz();
    }
    reset()
     const data = questions[index];
     console.log(data);
     quesBox.innerText = `${index + 1}) ${data.que}`;
     optionInputs[0].nextElementSibling.innerText = data.a;
     optionInputs[1].nextElementSibling.innerText = data.b;
     optionInputs[2].nextElementSibling.innerText = data.c;
     optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans, data.correct)
    if (ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){

                answer = input.value;
                // console.log(input.value);
                // console.log("yes");
            }
            // else{
            //     console.log("No");
            // }
        }

    )
    return answer;

}

const reset =() =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style = "text-align: center">
    <h3>Thank you for Playing the Quiz</h3>
    <h2>${right} / ${total} are Correct</h2>
    </div>
    `
}

// initial Call
loadQuestion();