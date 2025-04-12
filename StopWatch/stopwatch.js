const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".reset_value"); 

let startCnt = 0;
let intervalid1;

//! Making a flag to Avoid Start Infinite loop is clicked more than 1 time 
let isRunning = false;      // ✅ Flag to prevent multiple intervals


//? 1. Function to Start the timer:
const startTimer = () => {
    // Flag is checked if pehle se run hogya h to yeh run nhi hoga!
    if(!isRunning){
        console.log("Start Button Executed!");
        //! Now After Every 1 second yeh apne aap chalna chaiye untill stop na krde koi! 
        intervalid1 = setInterval(() => {
            countDownElement.innerText  = ++startCnt;
        }, 1000);
        isRunning = true;       // true mark krdia flag ko ab!
    }
};

document.querySelector(".start_btn").addEventListener("click", startTimer);        

//? Now TO Stop Function:

const stopTimer = () => {
    
    console.log("stop kro");
    clearInterval(intervalid1);
    isRunning = false;  // flag is marked false again!      means Stop hogya hai!
    console.log("Timer Stopped!");

    getTime();
};

//! We Have to clear the interval using clearInterval(id_name_of_set_interval) function
const stop = document.querySelector(".stop_btn");
stop.addEventListener("click", stopTimer);


//? Now For Reset Button:

const resetTimer = () => {
    console.log("reset button Pressed!");
    startCnt = 0;       // yeh bhi 0 krna hoga!
    countDownElement.innerText = startCnt;     // again reset to zero!
    //* AB timer ko bhi to rokna padega!
    clearInterval(intervalid1);

    isRunning = false;          // flag is marked false again!      means Stop hogya hai!
    console.log("Timer Is Reset!");
    
};
document.querySelector(".reset_btn").addEventListener("click", resetTimer);

let CNT = 1;
//Uss Instant pe Time note krke neeeche dikhana h likha hua!
const getTime = () => {
    
    console.log("Get Time BTN Clicked!");
    
    // resetValueElement.innerHTML   = `<p> Noted time is: ${startCnt} </p>`;
    
    const newPara = document.createElement("p");        // <p> Tag ELement is created</p>
    newPara.innerText = `${CNT++}) - ` + `The Stop Time is: ${startCnt}`;
    resetValueElement.append(newPara);
};

document.querySelector(".time_btn").addEventListener("click", getTime);


const clearTime = () => {
    resetValueElement.innerHTML = "";       // Khali krdia div ke andr ka sara html clear krdia 
};

//? Now CLear TIme:
document.querySelector(".clear_btn").addEventListener("click", clearTime);




