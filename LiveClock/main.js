const currentTime = () => {
    
    let curTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = curTime;

};

currentTime();

// We Use SetInterval() When We Need to continulsy repeating any one functn

// We need Live time to update:
const Intervalid1 = setInterval(() => {
    currentTime();
}, 1000);  // after 1s/1000ms time updates!


// Now to Stop it after 10 seconds:
setTimeout(() => {
    
    // ab isme asa function call marni h jis se ruk jaye!
    clearInterval(Intervalid1);
    
    //? console.log("9 seconds hogye bhai!");
    
}, 9000000000);       // jaan pujke ek bada number dal dia hai!











