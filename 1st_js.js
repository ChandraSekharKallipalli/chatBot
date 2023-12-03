document.addEventListener("DOMContentLoaded",function(){
    // declareing the elements

    const chatContainerEl = document.getElementById("chatContainer")
    const chatBtnEl= document.getElementById("chatBtn")
    let sendBtnEl  = document.getElementById("sendBtn")
    let userInputEl = document.getElementById("userInput")
    let greetingMsgContainer = document.getElementById("greetingMsg")


    // varibles declaring section
    let currentHour = new Date().getHours();
    let timeString = ""
    let tempElement = 1
    let running;
    let bot;
    let user;
    let userIndex = 0;
    let cleaner = 0;

    // greeting message section
    if (currentHour < 12){
        timeString = "Good morning!"
    }
    else if(currentHour < 17){
        timeString = "Good afternoon!"
    }else {
        timeString = "Good night!"
    }
    let welcomeMsg = "Hi, " + timeString + " Welcome! How can I help? please provide your first name"
    let str = welcomeMsg.split("")


    // addEventListener section 
    chatBtnEl.addEventListener("click",toDisplayWindow);
    sendBtnEl.addEventListener("click",generateDivsForBotORUser)
    

function toDisplayWindow (){
    chatContainerEl.style.display = (chatContainerEl.style.display === "none" || chatContainerEl.style.display === "") ? "block":"none";
    chatBtnEl.style.display=(chatBtnEl.style.display==="block" || chatBtnEl.style.display==="")?"none":"block"
    generateDivsForBotORUser()
}

function generateDivsForBotORUser(){
    if (tempElement % 2 != 0){
        createBotreply(str)
        tempElement += 1
    }else {
        createUserQuery()
        userInputEl.value = ""
        userIndex += 1
    }
}
let botMemory = {
    0 : "please Provide last Name",
    1 : "please Provide email ID",
    2: "I'm validating your email, enter 'YES' to continue" ,
    3 : "validation successfull, enter 'LOCATION",
    4 : "THANK YOU",
    5 : "awesom",
    6: "sasi",
    7 : "vickram",
    8: "sekhar",
    9 : "phenom"
}
let userData = {
    firstName : "",
    lastName : "",
    emailId : "",
}

function createUserQuery(){
    user = document.createElement("p")
    greetingMsgContainer.appendChild(user)
    user.classList.add("userMessage")
    user.textContent = userInputEl.value
    let botmemoryString = ""
    
    if (userIndex <= Object.keys(botMemory).length){
        botmemoryString = botMemory[userIndex].split("")
        console.log(userIndex)
        cleaner += 1
        if (cleaner % 3 == 0){
            greetingMsgContainer.textContent = ""
            console.log("madam")
            console.log(userIndex)
            cleaner = 0
        }
    }   
    createBotreply(botmemoryString)
}
function createBotreply (str){
  bot = document.createElement("p")  
  greetingMsgContainer.appendChild(bot)
  bot.classList.add("botMessage")
  running = setInterval(() => animate(str,bot),50)
}

function animate(str,bot){
    if (str.length > 0){
        bot.textContent += str.shift()
    }else{
        clearInterval(animate)
    }
}


})