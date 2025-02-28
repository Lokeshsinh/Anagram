const inputValue1  =  document.querySelector("#input1");
const inputValue2 =  document.querySelector("#input2");
const btn  = document.querySelector("#btn");
const msg  =  document.querySelector("#msg")

btn.addEventListener("click", () => {
    const input1  = inputValue1.value
    const input2  =  inputValue2.value;

    const word1  =  input1.split("").sort().join("");
    const word2 =  input2.split("").sort().join("");


    if(word1 === "" && word2 === ""){
        alert("Enter inputs letters")
        return
    }

    if(word1 === word2){
        msg.innerHTML = "Anagram"
        msg.style.color  = "green"
    }else{
        msg.innerHTML = "Not Anagram"
        msg.style.color = "red"
    }
})