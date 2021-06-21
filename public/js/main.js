const Cityname = document.getElementById('cityname');
const submition = document.getElementById('submition');
const city_name =document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');

const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');
const getinfo = async(event) => {
    event.preventDefault();
    let Cityval = Cityname.value;

    if(Cityval === ""){
     city_name.innerText = `Please write the name before search`;
     datahide.classList.add('data_hide');
    }

    else{
       try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${Cityval}&units=metric&appid=741c2f200e7ee7936eff678745613eff`;
        const response = await fetch(url);
       
        const data = await response.json();
        //  console.log(data);
        const arrData =[data];
        city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        

        const tempMood = arrData[0].weather[0].main;

        if(tempMood === "Clear")
        {
            temp_status.innerHTML =
            
            "  <i class= 'fas fa-sun' style = 'color: #eccc68;'> </i> ";
        }else if ( tempMood === "Clouds"){
            temp_status.innerHTML =
            "  <i class= 'fas fa-cloud' style = 'color: #f1f2f6;'> </i> ";
        }else if ( tempMood === "Rain"){
            temp_status.innerHTML =
            "  <i class= 'fas fa-cloud-rain' style = 'color: #a4b0be;'> </i> ";
        }else{
            temp_status.innerHTML =
            "  <i class= 'fas fa-sun' style = 'color: #eccc68;'> </i> ";
        
        }
            datahide.classList.remove('data_hide');

       }
       catch{
        city_name.innerText = `Please enter the city name correct!`;
          datahide.classList.add('data_hide');
       }
        
    }
}
submition.addEventListener('click' , getinfo);