const buttonDiv = document.getElementById("button");
const inputData1 = document.querySelector('.inpuData1');
const inputData2 = document.querySelector('.inpuData2');
const inputData3 = document.querySelector('.inpuData3');
const sumbitData = document.getElementById("GetAlert");
var audio = document.getElementById("myAudio");
// buttonDiv.addEventListener("click", () => {
//   Notification.requestPermission().then((perm) => {
//     // alert(perm);
//     if (perm === "granted") {
//       console.log(perm);
//       new Notification("Example Notification", {
//         body: "This is more text",
//         data: { hello: "World" },
//       });
//     }
//   });
// });
sumbitData.addEventListener("click",()=>{
  if(inputData1.value==='' || inputData2.value==='' || inputData3.value===''){
    alert("Input Cannot Be Empty");
    return 0 ;
  }
  else{
    alert("Notification will be recieved soon");
    const newArray = new Array(inputData1.value ,inputData2.value , inputData3.value );
    const minutesArray = new Array(inputData1.value%1 ,inputData2.value%1 , inputData3.value%1);
    console.log(newArray);
    console.log(minutesArray);
      function notifyMe() {
        if (Notification.permission !== "granted") Notification.requestPermission();
        else {
          // Set the time for the notification
          var targetTime = new Date();
          
            targetTime.setHours(Math.trunc(newArray[0])); // Set hour to 2 PM
            targetTime.setMinutes(Math.trunc(minutesArray[0]*100)); // Set minutes to 10
            console.log(targetTime);
            var delay = targetTime.getTime() - Date.now();
            console.log(delay);
            targetTime.setHours(Math.trunc(newArray[0])); // Set hour to 2 PM
            targetTime.setMinutes(Math.trunc(minutesArray[1]*100)); // Set minutes to 10
            console.log(targetTime);
            var delay1 = targetTime.getTime() - Date.now();
            console.log(delay1);
            targetTime.setHours(Math.trunc(newArray[0])); // Set hour to 2 PM
            targetTime.setMinutes(Math.trunc(minutesArray[2]*100)); // Set minutes to 10
            console.log(targetTime);
            var delay2 = targetTime.getTime() - Date.now();
            console.log(delay2);
          
        
          // Calculate the delay until the target time
          
          setTimeout(function () {
            var notification = new Notification("Tin tog", {
              icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
              body: "TIme to take your medicine",
            });
          }, delay);
          setTimeout(function () {
            var notification = new Notification("Tin tog", {
              icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
              body: "TIme to take your medicine",
            });
          }, delay);
          setTimeout(function () {
            var notification = new Notification("Tin tog", {
              icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
              body: "TIme to take your medicine",
            });
          }, delay);
        }
      }
      notifyMe();
    }
})


