
// const array= [2,4,1,5,6,7,9]
// let large = array[0]
// let secondLarge =array[0]

// for(let i=0;i<array.length;i++){
//   if(array[i]>large){
//     large=array[i]
//   }
// }
// for(let i=0;i<array.length;i++){
//   if((array[i]>secondLarge) && (array[i]!=large)){
//    secondLarge=array[i]
//   }
// }
// console.log(secondLarge)

// const array= [2,4,13,5,6,9,7,4,10,14]
// let large = array[0]
// let secondLarge= array[0]

// for(let i=1;i<array.length;i++){
//   if(array[i]>large){
//     large=array[i]
//   }else if(secondLarge<array[i]){
//     secondLarge=array[i]
//   }
// }
// console.log(`large : `, large)
// console.log(`Second large :  `, secondLarge)

// const stones= [2,4,13,5,6,9,7,4,10,14]
// while(stones.length>1){
//   stones.sort((a,b)=>b-a); 
//   console.log(stones)
//   stones[1]=stones[0]-stones[1]; 
//   stones.shift();
// }
// console.log(stones[0])


// while(stones.length>1){
//   stones.sort()
// }

// const stones= [12,11,4,5,6,3,2,1]
// while(stones.length>1){
//   stones.sort((a,b)=>b-a)
//   console.log(stones)
//   stones[1]=stones[0]-stones[1]
//   stones.shift();
// }

// console.log(stones)



// const b = [[1,2],[2,1],[3,4],[5,6]]
// const a = [[1,1],[1,1],[1,1],[5,6]]
//   let count=0
// for(let i=0;i<a.length-1;i++){
//   for(let j=i+1;j<a.length;j++){
//     if((a[i][0]==a[j][0] && a[i][1]==a[j][1])|| (a[i][0]==a[j][1] && a[i][1]==a[j][0])){
//       count++
//     }
//   }
// }
// console.log(count)



