
const questions = document.querySelectorAll('.question')

//console.log(questions)

for (const q of questions) {

    const btn = q.querySelector('.question-btn')

    btn.onclick = function() {
        for (const qq of questions) {
            if (qq !== q)  {// ir qq is not equal to q 
            qq.classList.remove('show-text')
            }
        }
        q.classList.toggle('show-text')
    }

}
