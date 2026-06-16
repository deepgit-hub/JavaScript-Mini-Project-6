var nameinput = document.getElementById("name-input")
var fnameinput= document.getElementById("fname-input")
var ageinput = document.getElementById("age-input")
var markinput = document.getElementById("mark-input")
var ss = document.getElementById("school-stream")
var ds = document.getElementById("desired-stream")
var result = document.getElementById("result")
var eligible = document.getElementById("eligible")
var dresult = document.getElementById("department-result")
var admission = document.getElementById("admission")
var department = ""
var aname = document.getElementById("aname")
var afname = document.getElementById("afname")
var aage = document.getElementById("aage")
var ass = document.getElementById("ass")
var add = document.getElementById("add")
var aad = document.getElementById("aad
function iseligible(event)
{
    event.preventDefault()
    if(ds.value=="Computer Science")
    {
        if(Number(markinput.value)>=420 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're Eligible for Computer Science"
            dresult.textContent=""
             admission.innerHTML = "<button onclick=admissionsummary()>Admission Summary</button>"
            department="Computer Science"
            
        }
        else if(Number(markinput.value)<420 && Number(markinput.value)>=380 && (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Computer Application"
        }
         else if(Number(markinput.value)<380 && Number(markinput.value)>350 && (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible "
            dresult.textContent="Suggested Department : Mathametics with Computer Application"
        }
        else if(Number(markinput.value)>350 && (ss.value!="Bio-Maths" && ss.value!="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
        }
        else if(Number(markinput.value)<=350)
        {
            eligible.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Commerce with Computer Application"
        }
    }
    
    else if(ds.value=="Computer Application")
    {
         if(Number(markinput.value)>=360 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're Eligible for Computer Application"
            dresult.textContent=""   
            admission.innerHTML = "<button onclick=admissionsummary()>Admission Summary</button>"
            department="Computer Application"
        }
          else if(Number(markinput.value)<360 &&  (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Mathametics with Computer Application"
        }
         else if(Number(markinput.value)>=360 && (ss.value!="Bio-Maths" && ss.value!="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
        }

    }
    else if(ds.value=="Mathametics with Computer Application")
    {
        if(Number(markinput.value)>=300 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're Eligible for Mathametics with Computer Application "
            dresult.textContent=""   
             admission.innerHTML = "<button onclick=admissionsummary()>Admission Summary</button>"
            department="Mathametics with Computer Application"
        }
        else if(Number(markinput.value)>=300 && (ss.value!="Bio-Maths" && ss.value!="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
        }
        else if(Number(markinput.value)<300 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligible.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
        }
    }
}
function clearform()
{
    nameinput.value=""
    fnameinput.value=""
    ageinput.value=""
    markinput.value=""
    eligible.textContent="Elegibility Status "
    dresult.textContent=""
}
