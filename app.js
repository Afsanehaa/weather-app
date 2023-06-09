const images=['url(./AA18VPgz.jpg)',
'url(./pexels-samuel-kambu-2408244.jpg)',
'url(./pexels-stein-egil-liland-11390335.jpg)',
'url(./pexels-stein-egil-liland-14699589.jpg)',
'url(./pexels-stein-egil-liland-3384695.jpg)'
]
let body=document.querySelector('.body')

window.addEventListener("load",function(){
    let randomimg
    randomimg=Math.floor(Math.random() * images.length)
    let rimg = images[randomimg]
    body.style.backgroundImage = rimg
 
    
})

const weatherdata={
    tehran:{nameshahr:'Tehran' , degre:'31' ,humidity:'26%' , vaziyat:'sunny',wspeed:'32'},
    tabriz:{nameshahr:'Tabriz' , degre:'15' ,humidity:'31%' , vaziyat:'cloudy',wspeed:'50'},
    shiraz:{nameshahr:'Shiraz' , degre:'35' ,humidity:'20%' , vaziyat:'sunny',wspeed:'10'},
    esfahan:{nameshahr:'Esfahan' , degre:'33' ,humidity:'18%' , vaziyat:'rainy',wspeed:'13'}
}

   
let ptag = document.querySelector('.ptag')
let btn = document.querySelector('.search')
let title =document.querySelector('.name')
let daraje = document.querySelector('.daraje')
let description =document.querySelector('.description')
let humidity =document.querySelector('.humidity')
let wind =document.querySelector('.wind')


btn.addEventListener("click" , function remove(){
  let input = document.querySelector('.input1')  
  let inputvalue = input.value
  let cityname = weatherdata[inputvalue]
 if (cityname){
  ptag.style.display = 'none'
  title.style.display='block'
  daraje.style.display='block'
  description.style.display='block'
  humidity.style.display='block'
  wind.style.display='block'
  title.innerHTML = "Weather in " + cityname.nameshahr
  daraje.innerHTML = cityname.degre + " °C"
  description.innerHTML = cityname.vaziyat
  humidity.innerHTML = "Hummidity : " + cityname.humidity
  wind.innerHTML = "Wind speed : " + cityname.wspeed +" km/h"
 }else{
  ptag.innerHTML = 'اطلاعات شهر وارد شده وجود ندارد'
  ptag.style.color='red'
 }
 
})





