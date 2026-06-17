var nameinput = document.getElementById("name-input")
var fnameinput= document.getElementById("fname-input")
var ageinput = document.getElementById("age-input")
var markinput = document.getElementById("mark-input")
var ss = document.getElementById("school-stream")
var ds = document.getElementById("desired-stream")
var result = document.getElementById("result")
var eligiblestatus = document.getElementById("eligible")
var dresult = document.getElementById("department-result")
var admission = document.getElementById("admission")
var department = ""
var aname = document.getElementById("aname")
var afname = document.getElementById("afname")
var aage = document.getElementById("aage")
var ass = document.getElementById("ass")
var add = document.getElementById("add")
var aad = document.getElementById("aad")
var semfee = 0
var sem = document.getElementById("semfee")
function iseligible(event)
{
    event.preventDefault()
    if(ds.value=="Computer Science")
    {
        if(Number(markinput.value)>=420 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're Eligible for Computer Science"
            dresult.textContent=""
            document.getElementById("summary-btn").style.display="block"
            department="Computer Science"
            semfee = 20000

        }
        else if(Number(markinput.value)<420 && Number(markinput.value)>=380 && (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }
         else if(Number(markinput.value)<380 && Number(markinput.value)>350 && (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible "
            dresult.textContent="Suggested Department : Mathametics with Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }
        else if(Number(markinput.value)>350 && (ss.value!="Bio-Maths" && ss.value!="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }
        else if(Number(markinput.value)<=350)
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Commerce with Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }

    }
    else if(ds.value=="Computer Application")
    {
        if(Number(markinput.value)>=360 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're Eligible for Computer Application"
            dresult.textContent=""   
           document.getElementById("summary-btn").style.display="block"
            department="Computer Application"
            semfee=18000
        }
          else if(Number(markinput.value)<360 &&  (ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible"
            dresult.textContent="Suggested Department : Mathametics with Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }
         else if(Number(markinput.value)>=360 && (ss.value!="Bio-Maths" && ss.value!="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }

    }
    else if(ds.value=="Mathametics with Computer Application")
    {
        if(Number(markinput.value)>=300 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're Eligible for Mathametics with Computer Application "
            dresult.textContent=""   
            document.getElementById("summary-btn").style.display="block"  
            department="Mathametics with Computer Application"
            semfee=14000
        }
        else if(Number(markinput.value)>=300 && (ss.value!="Bio-Maths" && ss.value!="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }
        else if(Number(markinput.value)<300 && ( ss.value=="Bio-Maths" || ss.value=="Computer Science"))
        {
            eligiblestatus.textContent="Elegibility Status : You're not Eligible  "
            dresult.textContent="Suggested Department : Commerce with Computer Application"
            document.getElementById("summary-btn").style.display="none"
        }
    }
    else if(ds.value=="Commerce with Computer Application")
    {
        if(Number(markinput.value)>=250)
        {
           eligiblestatus.textContent="Eligibility Status : You're Eligible for Commerce with Computer Application"
            dresult.textContent="" 
            document.getElementById("summary-btn").style.display="block"
            department="Commerce with Computer Application"
            semfee=12500
        }
        else 
        {
            eligiblestatus.textContent="Elegibility Status : You're not eligible to get admission in this college"
            document.getElementById("summary-btn").style.display="none"
        }
    }
}

function clearform()
{
    nameinput.value=""
    fnameinput.value=""
    ageinput.value=""
    markinput.value=""
    eligiblestatus.textContent="Elegibility Status "
    dresult.textContent=""
    document.getElementById("summary-btn").style.display="none"
    admission.style.display="none"
}
function admissionsummary()
{
    admission.style.display="block"
    aname.textContent="Name : "+nameinput.value
    afname.textContent="Father Name : "+fnameinput.value
    aage.textContent="Age: "+ageinput.value
    ass.textContent="School Stream: "+ss.value
    add.textContent="Desired Department : "+ds.value
    aad.textContent="Admitted Department  : "+department
    sem.textContent ="Semester Fee : ₹"+semfee
}
