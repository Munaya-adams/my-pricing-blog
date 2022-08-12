const form=document.getElementById('form-container');
const item= document.getElementById('items');

// function that will sebmitt our data
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let discription = form.discription.value
    let amount = form.amount.value 

})

// function that generate HTML structure

const generateHTML = (discription, amount) => {
    if(amount < 0){
       let HTML = `
        <li class"expense">
        <span>${discription}</span>
        <span>${amount}</span>
        </li>
        `
         items.innerHTML+=HTML
        
    } else {let HTML = `{
        <li class"expense">
        <span>${discription}</span>
        <span>${amount}</span>
        </li>
        `

        items.innerHTML+=HTML
    }
}