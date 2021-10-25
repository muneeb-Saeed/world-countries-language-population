
const subtitle=document.querySelector('.subtitle')
let numberOfCountries=countries.length
subtitle.innerHTML=`Currently, we have ${numberOfCountries} countries.`

let pop =[]
for(let i in countries){
    pop.push(countries[i].population)
}
let popu=[...pop]
pop.sort(function(a,b){
    return b-a
})
let index
let countriesNames=[]
let countriesPopulation=[]
for(let i=0;i<10;i++){
    index=(popu.indexOf(pop[i]))
    countriesNames.push(countries[index].name)
    countriesPopulation.push(pop[i])
}
let myGraph=document.getElementById('myGraph').getContext('2d')
let btnPopulation=document.getElementById('population')
let btnLanguages=document.getElementById('languages')
let graphTitle=document.querySelector('.graph-title')
let graphs=document.querySelector('.graphs')
const languageSpokenInCountries=[91,45,25,24,9,9,8,7,5,4]
const languagesNames=['English','French','Arabic','Spanish','Portuguese','Russian','Dutch','German','Chinese','Serbian']

graphs.style.display='none'
let chart= new Chart(myGraph,{
    type:'bar',
    data:{
        labels:['World',...countriesNames],
        datasets:[{
            label:'Population',
            data:[7794798739,...countriesPopulation],
            backgroundColor:'orange',
            datalabels:{
                color:'green',
                anchor:'end',
                align:'end'
            }
        }]
    },
    plugins: [ChartDataLabels],

    options:{
        indexAxis:'y',
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                }
            }
        }
    }
})



btnPopulation.addEventListener('click',showPopulation)
btnLanguages.addEventListener('click',showLanguages)


function showPopulation(){
    graphs.style.display='block'

    graphTitle.innerHTML=`10 Most Populated Countries in the World!`
    chart.data.labels=['World',...countriesNames]
    chart.data.datasets[0].label='Population'
    chart.data.datasets[0].data=[7794798739,...countriesPopulation]
    chart.update()
    
}
function showLanguages(){
    graphs.style.display='block'
    
    graphTitle.innerHTML=`10 Most Spoken Languages in the World!`
    chart.data.labels=languagesNames
    chart.data.datasets[0].label='Languages'
    chart.data.datasets[0].data=languageSpokenInCountries
    chart.update()

}


