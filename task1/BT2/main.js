const getDOM = function (selector) {
    return document.querySelector(selector);
}

const getDOMs = function (selector) {
    return document.querySelectorAll(selector);
}

let selectCity = getDOM('#selection_number');
let containerContent = getDOM('.container_city');

let arrCity = [
    {index :1 , cityName :"Ha Noi"},
    {index :2 , cityName :"Sai Gon"},
    {index :3 , cityName :"Hue"},
    {index :4 , cityName :"Hai Phong"},
    {index :5 , cityName :"Da Nang"},
    {index :6 , cityName :"Nha Trang"}
    
];



const renderSelect = function(){
    let htmls = arrCity.map((city,index)=>{ 
        return `<option>${index+1}</option>`
    })

    let optionDif = `   <option >Chẳn</option>
                        <option>Lẻ</option>
                        <option>Reset</option>`;
               

    selectCity.innerHTML = htmls.join("") + optionDif;
}

const renderContent = function(){
    let currentIndex = 0;
    let htmls = arrCity.map((city,index)=>{
        return ` <p class="city_item ${currentIndex == index ? "active":""}">${index+1}.${city.cityName}</p>`
    })

    containerContent.innerHTML = htmls.join("");
}

const renderGUI = function(){
    renderSelect();
    renderContent();
}

renderGUI();

let arrEleCity = getDOMs('.container_city p');
let arrEven = getDOMs('.container_city p:nth-child(even)');
let arrOdd = getDOMs('.container_city p:nth-child(odd)');

function selectItem (event){
 
    let indexSelect = event.target.value;
    removeActive();
    if(indexSelect == 'Chẳn') selectEven ();
    else if(indexSelect == 'Lẻ') selectOdd ();
    else if(indexSelect == 'Reset') resetSelect ();
    else selectIndexCity(indexSelect);  
   
}

function removeActive(){
    
    arrEleCity.forEach((itemEle)=>{
        itemEle.classList.remove('active');
    })
}

function selectEven (){
    //chọn chẳn
    arrEven.forEach((itemEven,index)=>{
        itemEven.classList.add('active');
    })
}

function selectOdd (){
    arrOdd.forEach((itemOdd,index)=>{
        itemOdd.classList.add('active');
    })
}

function selectIndexCity(indexSelect){ 
    
    for (let i = 0; i < arrEleCity.length;i++){      
        if(i + 1 === Number.parseInt(indexSelect)  ){           
            arrEleCity[i].classList.add('active');
           break;   
        }
    }
}

function resetSelect(){
    selectCity.value = 1;
    arrEleCity[0].classList.add('active');
}




