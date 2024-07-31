
let form = document.getElementById('form1')
let titlehd = document.getElementById('title-hd')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value
    weatherFun()
    // form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const latitudeF = document.getElementById('latitude')
const longitudeF = document.getElementById('longitude')

// async --> function return promise
let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            titlehd.innerText = ''
            setTimeout(function(){ errorF.innerText = data.error }, 500);
            errorF.innerText = data.error
            locationF.innerText = ''
            forecastF.innerText = ''
        }
        else {
            titlehd.innerText = ''
            setTimeout(  ()=> {  locationF.innerText = 'Country : '+ data.location }, 500);
            // locationF.innerText = data.location
            setTimeout( ()=> { forecastF.innerText = data.forecast}, 1000);
            setTimeout(()=>{ latitudeF.innerText = 'latitude is : ' + data.latitude}, 1500);
            setTimeout(()=>{ longitudeF.innerText = 'longitude is : ' + data.longitude}, 2000);

            // forecastF.innerText = data.forecast
            errorF.innerText = ''

        }
    }
    catch(e){
        console.log(e)
    }
}