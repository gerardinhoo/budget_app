// Listen for the form submit
document.querySelector("#myForm").addEventListener('submit', addInitialBudget);

function addInitialBudget(e) {
// Get Budget Value
  let initialBudget = document.querySelector("#firstBudget").value;





let myBudget = {
  mainBudget: Number(initialBudget)
}



// // Local Storage
// localStorage.setItem("number", 5);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));


// Test if budget is null
if(localStorage.getItem('expenses') === null){
  // Initialize array
  let expenses = [];
  // Push to array
  expenses.push(myBudget);
  // Set to localStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));
} else {
  let expenses = JSON.parse(localStorage.getItem('expenses'));
  // Add budget to Array
  expenses.push(myBudget);
  // Reset back to localStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));
}



// prevent form from submitting
  e.preventDefault();
}

function fetchBudget() {
  // Get expenses from localStorage
  let expenses = JSON.parse(localStorage.getItem('expenses'));

  // Get output id
  let budgetResults = document.querySelector("#budgetResults");

  // Build output
  budgetResults.innerHTML = "";
  for(let i = 0; i < expenses.length; i++){
    let mainBudget = expenses[i].mainBudget;


    budgetResults.innerHTML += '<div class="well">'+
                               '<h3>'+'Principal Budget:'+"" +mainBudget+
                               '</h3>'+
                               '</div>';
  
}

}

