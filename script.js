//vanilla,vanilla,vanilla,strawberry,coffee,coffee

const fprompt = window.prompt('Enter your favorite froyo flavors', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee');
const arr = fprompt.split(',');
const stats = {





};

for(let i=0; i < arr.length; i++){
    const fprompt = arr[i];
    if(stats[fprompt] === undefined){
        stats[fprompt] = 0;
    }
    stats[fprompt] = stats[fprompt] = 1;
}

console.log(stats);