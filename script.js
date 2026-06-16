var name = document.getElementById("name-input")
var fname= document.getElementById("fname-input")
var age = document.getElementById("age-input")
var mark = document.getElementById("mark-input")
var ss = document.getElementById("school-stream")
var ds = document.getElementById("desired-stream")
var result = document.getElementById("result")
var eligible = document.getElementById("eligible")
var dresult = document.getElementById("department-result")
function iseligible(event)
{
    event.preventDefault()
    if(ds.value=="Computer Science")
    {
        if(Number(mark.value)>=420 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're Eligible for Computer Science"
            dresult.textContent=""
            
        }
        else if(Number(mark.value)<420 && Number(mark.value)>=380 && (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Computer Application"
        }
         else if(Number(mark.value)<380 && Number(mark.value)>350 && (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible "
            dresult.textContent="Suggested Department : Mathametics with Computer Application"
        }
        else if(Number(mark.value)>350 && (ss.value!="Bio-Maths" && ss.value!="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
        }
        else if(Number(mark.value)<=350)
        {
            eligible.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Commerce with Computer Application"
        }
    }
}
