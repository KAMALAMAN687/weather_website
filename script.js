const  time = document.querySelector(".time");
const  date= document.querySelector(".date");
setInterval(()=>{
    const now =new Date();
    const pday= now.toDateString();
    date.innerText =pday;
    let phrs= now.getHours();
   let pmns= now.getMinutes();
    time.innerText= phrs;
   if(pmns<10){
    time.innerText= phrs+" : "+`0${pmns}`;
   }
   else{
   time.innerText= phrs+" : "+`${pmns}`
   }
},1000);

//auto -typed 
 let typed = new Typed(".auto-typed",{
    strings:["Wheather","Forecast","And Many More."],
    typeSpeed:150,
    backSpeed:150,
    loop:true
 })



const inputBox = document.querySelector(".input");
const searchBtn = document.getElementById("searchBtn");
const videoChange =document.querySelector(".wheathervideo");
const temprature =document.querySelector(".ac");
const type =document.querySelector(".des");
const humidity = document.querySelector(".humiditys");
const windSpeed = document.querySelector(".winds");
const divtemprature = document.querySelector(".temprature");
const new_items = document.querySelector(".new-items");

videoChange.src="https://player.vimeo.com/external/210744044.sd.mp4?s=2c321f5fb693e9b7d0048e00930f9455a1d06bdf&profile_id=164&oauth2_token_id=57447761";

 async function checkwheather(city){
   const api_key = "91d0e543bce9e935f253b32a8fc924cd";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

   const wheather_data = await fetch(url).then(response =>response.json());
   console.log(wheather_data);
  temprature.innerHTML = `${Math.round(wheather_data.main.temp-273.14)}°C`;
  type.innerText =`${wheather_data.weather[0].description}`;
  humidity.innerText =`${wheather_data.main.humidity}%`;
  windSpeed.innerText =`${wheather_data.wind.speed} Km/Hr`;

  switch(wheather_data.weather[0].main){
    case 'Clouds' :
        videoChange.src = "https://player.vimeo.com/external/414879100.sd.mp4?s=dbe02aa9b047a22c01279e0b08a546a33179e642&profile_id=164&oauth2_token_id=57447761"
        break;
     case 'Clear' :   
     videoChange.src ="https://player.vimeo.com/external/434854822.sd.mp4?s=b7fa3a0513f214a8ddccb1b2269a78b6ff8d9edb&profile_id=164&oauth2_token_id=57447761"
     break;
     case 'Rain':
        videoChange.src ="https://player.vimeo.com/external/451758277.sd.mp4?s=0c858d0b4c3f1d02df64ac5550155c522082d986&profile_id=164&oauth2_token_id=57447761"
        break;
     case 'Mist':
        videoChange.src="https://player.vimeo.com/external/194101383.sd.mp4?s=7825b2484d808b4682dac2c2754173b1aafa0d07&profile_id=164&oauth2_token_id=57447761"
        break;
      
        case 'Snow':
            videoChange.src="https://player.vimeo.com/external/219330771.sd.mp4?s=fd5e5f1cca0c55c06d20b844f135e9d7b53b200a&profile_id=164&oauth2_token_id=57447761"
            break;
  }


divtemprature.style.display="flex";
new_items.style.display="flex";

}

searchBtn.addEventListener("click",()=>
{
    checkwheather(inputBox.value);
}
)












