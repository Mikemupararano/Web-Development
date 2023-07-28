const ctx =document.getElementById("myChart");
const grp =ctx.getContext("2d");
const labels =[
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'


];
const data= {
    labels, 
    datasets:[{
        data:[154, 176, 200, 238, 150, 300],
        label: "Minecrafty Sales",
    },
]
}
const config ={
type: 'line',
data: data,
options: {
    responsive: true,
    scales: {
        y: {

        }
        
    }

} 

};

const myChart= new Chart(grp, config);

