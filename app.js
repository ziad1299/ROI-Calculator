const submit = document.getElementById('btn1');
const radio = document.querySelectorAll('.btn-check');
const choice1 = document.querySelector('.choiceClass1');
const choice2 = document.querySelector('.choiceClass2');
const choice = document.querySelector('.choiceClass');



window.onload = function()
{
    choice.innerHTML="";
    choice.appendChild(choice1);
}
loadEventListeners();

function loadEventListeners()
{
    submit.addEventListener('click',submitInput);
}

function changeOption()
{
    choice.innerHTML="";
    if(radio[0].checked)
    {
       choice.appendChild(choice1);
    }
    else
    {
       choice.appendChild(choice2);
    }
    
}


function submitInput(e)
{
    let repayment = parseFloat(document.querySelector("#return").value);
    let amount = parseFloat(document.querySelector("#amount").value);
    let years;

    if(radio[0].checked)
    {
      
       let date1 = new Date(document.querySelector('.datechoose1').value).getFullYear();
    
       let date2 = new Date(document.querySelector('.datechoose2').value).getFullYear();
       years = date2-date1;
    }
    else
    {
       years = document.querySelector('.datechoose3').value;
    }
    

        let gain = (repayment - amount);
        let ROI = (repayment - amount) / amount;
        let annualROI = (Math.pow(1+ROI,(1/years)) -1) *100;

        document.querySelector('#gain').value = "$" + gain;
        document.querySelector('#roi').value = ROI*100+"%";
        document.querySelector('#length').value = annualROI+"%";

    e.preventDefault();
}