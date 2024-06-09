
//Making transactions and handling the custom module
const addBtn = document.getElementById("addT");

addBtn.addEventListener('click',(event)=>{
    document.getElementById("tModal").style.display = "flex";
});

function closeModal(){
        document.getElementById("tModal").style.display = "none";
}

//accepting values from html to js for transactions
function makeTransaction(){
    const date = document.getElementById("date").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("cat").value;
    const type = document.getElementById("type").value;
    const note = document.getElementById("note").value;
    
    

    const newrow = document.createElement('tr');
    newrow.innerHTML = `<td>${date}</td><td>${amount}</td><td>${category}</td><td>${type}</td><td>${note}</td>`;

    const table = document.getElementById("newTable");
    table.append(newrow);

    updateVal(amount,type);
}


const makeBtn = document.getElementById("make");
makeBtn.addEventListener('click',()=>{
    document.getElementById('date').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
    document.getElementById('note').value = '';

    closeModal();
})

let finalAmount = 65000;
let finalExp = 10000;
let finalInc = 75000 ;

function updateVal(amount, type){
    if(type === "Expense"){
        finalExp += amount;
        document.getElementById("expense").innerHTML ="₹" + finalExp;

        finalAmount -= amount;
        document.getElementById("acc-bal").innerHTML ="₹" +  finalAmount;
    } else {
        finalInc += amount;
        document.getElementById("income").innerHTML = "₹" + finalInc;

        finalAmount += amount;
        document.getElementById("acc-bal").innerHTML ="₹" +  finalAmount;
    }
}

function closeEdit(){
    document.getElementById("edit").style.display = "none"
}


function showEdit(clickedCardId) {
    document.getElementById("edit").style.display = "flex";
    
    const changeVal = document.getElementById("changeBtn");

    const newChangeVal = changeVal.cloneNode(true);
    changeVal.parentNode.replaceChild(newChangeVal, changeVal);
    
    newChangeVal.addEventListener('click', function() {
        const editedValue = document.getElementById("editVal").value;

        if (!editedValue.trim()) {
            alert("Please enter a value.");
            return;
        }

        if (clickedCardId === "card1") {
            document.getElementById("acc-bal").innerHTML = "₹" + editedValue;
            finalAmount = editedValue;
        } else if (clickedCardId === "card2") {
            document.getElementById("expense").innerHTML = "₹" + editedValue;
            finalExp = editedValue;
        } else if (clickedCardId === "card3") {
            document.getElementById("income").innerHTML = "₹" + editedValue;
            finalInc = editedValue;
        }

        closeEdit();
        document.getElementById("editVal").value = "";
    });
}

