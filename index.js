// Number To text Fucntion 

let roots = [
    '', 'один', 'два', 'три', 'четыре',
    'пят', 'шест', 'сем', 'восем', 'девят'
  ];
  
  let digitHundreds = ['', 'тысяч',
    'миллион',
    'миллиард',
    'квадриллион',
    'квинтиллион',
  
  ];
  
  function getCategoriName(one, categori) {
    let categoriName = '';
  
    if (categori === 0)  
      return ''; 
  
  
  
    categoriName += ' ' + digitHundreds[categori];
  
    if (categori === 1) { 
  
      if (one === 0) 
        return categoriName;
      if (one === 1) 
        return categoriName + 'а';
      else if (one < 5) 
        return categoriName + 'и';
      else
        return categoriName;
  
    } else { 
  
      if (one === 0) 
        return categoriName + 'ов';
      if (one === 1) 
        return categoriName;
      else if (one < 5) 
        return categoriName + 'а';
      else 
        return categoriName + 'ов';
  
    }
  }
  
  function getOne(one, categori) {
  
    let localWords = ['одна', 'две'];
  
    
    let oneText = '';
  
    
    if (one !== 0) { 
  
      if (one < 3) { 
  
        if (categori === 1) 
          oneText += localWords[one - 1];
          oneText += roots[one]; 
  
      } else 
        oneText += roots[one]; 
  
      if (one > 4) 
        oneText += 'ь';
  
    }
  
    return oneText;
  }
  
  function getTen(ten, one, categori) {
  
    if (ten === 1) { 
  
      let localWords = ['десять', 'один', 'две', 'три', 'четыр'];
  
      return (
        
        (one < 5 ? localWords[one] : roots[one]) +
        
        (one === 0 ? '' : 'надцать')
        
      ) + getCategoriName(0, categori);
  
    } else { 
  
      let  localWords = ['двадцать', 'тридцать', 'сорок'];
  
      
      let result =
      
        (one > 0 ? ' ' : '') +
      
        getOne(one, categori);
  
      if (ten !== 0) { 
  
        result =
          
          (ten === 9 ? 'девяноста' :
          
            (ten < 5 ? localWords[ten - 2] :
              // От пятидесяти до восьмидесяти использует глобальные корни и окончание
              (roots[ten] + 'ьдесят'))) +
          // В конце добавляется слово разряда единиц
          result;
  
      } else { // Разряд десятков равен нулю
  
        if (one > 0) { // Разряд единиц не равен нулю
          // Удалить пробел перед словом разряда единиц
          result = result.slice(1);
        }
  
      }
  
      return result + getCategoriName(one, categori);
  
    }
  
  }
  
  function getHangred(figure) {
    let localWords = ['сто', 'двести', 'три', 'четыре'];
    if (figure === 0) 
      return '';
    else if (figure > 4) 
      return roots[figure] + 'ьсот';
    else { 
      return (
        localWords[figure - 1] +
  
        (figure > 2 ? 'ста' : ''));
    }
  }
  
  function getText(string) {
  
    let result = '';
  
    
    let length = string.length;
  
    while (string.charAt(0) == 0) {
      string = string.slice(1);
      length = string.length;
    }
  
    
    while (length % 3 !== 0) {
      string = '0' + string;
      length = string.length;
    }
  
    
    for (let n = 0; n < length; n += 3) {
  
      
      const categori = Math.floor((length - 1 - n) / 3);
  
      
      let hundredText = '';
  
      
      let hundred = [
        Number(string.charAt(n + 0)),
        Number(string.charAt(n + 1)),
        Number(string.charAt(n + 2))
      ];
  
    
      let hundredHundredText = getHangred(hundred[0]);
      
      hundredText += hundredHundredText + (hundred[0] !== 0 ? ' ' : '');
  
      
      hundredText += getTen(hundred[1], hundred[2], categori);
  
    
      result += hundredText + '\n';
  
    }
  
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  




  _________________________________________________________________________________________________

// Beta Game (камень, ножницы, бумага ) VS Bot
function myFirstGame(name, player1){
    name =prompt("Insert Your Name ","")
        let obj= {
          rock: 5, 
          scissors: 4,
          paper: 3   
                 }
player1 = prompt("Please Insert 'Paper', 'Rock' or 'Scissors'", " ")
player1 = player1.trim() 
player1 = player1.toLowerCase()
player1 = obj[player1]

let player2 = Math.floor( Math.random() * 10 ) + 1

if(player2 < 3 ){
   player2 = 3
          }
else if(player2 > 4){
    player2 = 5
         }
     if(player2 === 3 && player1 === 5){
       player2 =7
            }
      if(player1 === 3 && player2 === 5){
          player1 = 7
              }
for(let key in obj){
   if(obj[key] === player1){
         player1 =obj[key]
            }
    if(obj[key]===player2){
        player2=obj[key]
            }
                   }
if(player1 === player2){
 console.log(player2)
 return("no one can win")  
                     }
if(player1 >player2){
return ( alert("Winner  is " + name ) ) 
                  }
else if (player2 < player1){
return("You lose Try again ; Bot Winner")  
                         } 
return ("insert Paper', 'Rock' or 'Scissors ")
}

console.log(myFirstGame())     
_________________________________________________________________________________________________


// // Fist TRY
// function ConvertNum(num){
//     let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
//      let tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'] ;
//      let hundred = ' hundred';
//      let result = '';
//      let numClone = num.toString();
//      let tousend = ('', ' thousand')
//      let helpI = numClone.slice(0,2)
//           if (num == 0) {
//                 return  'Zero'
//                  }
//                  if (num < 20) {
//                    result = ones[num];
//                   return  result
//                    }
//                    if(num%10===0 && numClone.length < 3 ){
//                      result =tens[numClone[0]] 
//                      return result         
//                      };
//                    if(num%10!==0 && numClone.length < 3 ){
//                    result= tens[numClone[0]]+ " " + ones[numClone[1]]
                  
                       
//                       }
//        if (numClone.length == 3) {
//          result = ones[parseInt(numClone.charAt(0))] + hundred;
//          result += tens[parseInt(numClone.charAt(1))];
//          result += ones[parseInt(numClone.charAt(2))];
//          return result  
//                 }
//               for(let i=0;i<numClone.length;i++){
//                      if(numClone[i] ===0){
//                           numClone[i]=""
//                                 }
 
//                                    }
    
//           if (numClone.length == 4) {
//                result  = ones[parseInt(numClone.charAt(0))]+ tousend
//               if(numClone[1]!== "0"){
//                 result += ones[parseInt(numClone.charAt(1))] + hundred
//                    }
//             result += tens[parseInt(numClone.charAt(2))];
//            result += ones[parseInt(numClone.charAt(3))];
//                   return result
       
//                          }
//    if (numClone.length == 5) {
//      result +=ones[parseInt(helpI)] + tousend
//               if(numClone[2]!== "0"){
//      result += ones[parseInt(numClone.charAt(2))] + hundred
//    }
//               if(numClone[4]=== "0"){
//      result += tens[parseInt(numClone.charAt(2))]
//    }
//               if(numClone[4]=== "0"){
//            helpI=numClone.slice(3,)
          
  
//        result += tens[numClone[0]]+ " " + ones[numClone[1]]
//    }
   
//     return result
     
//  }
 
//  result += tens[parseInt(numClone.charAt(0))];
//  result += ones[parseInt(numClone.charAt(1))];
 
//  }
 
//  console.log(ConvertNum(454))
 





// function sum(n) {
//     if(n === 0) {
//        return true;
//      }
//      else if ((n%10)%2 === 0) {
//        return false ;
//     }
//        n=(n-n%10)/10;
//   return sum(n);
//   }
//   console.log( sum(5) )

// function f(arr){
//     for(let i = 0; i < arr.length; i++){
//      if(arr[i] !== i){
//     arr.splice(i,0,undefined)
//      }
//     }
//     console.log(arr)
//     }
//     console.log(f([0,1,4,5,9]))
    
    
    
//     N3
//     function f(obj) {
//       let isEmpty = true;
//       for (let key in obj) {
//        isEmpty = false
//            }
//       return ("object is isEmpty : " + isEmpty);
      
//           }
//     console.log (f( {
//       name: "Lyova",
//       surname : "Mikaelyan"
//     }))
    
    
//     N4
    
//     function sumAllAges(obj) {
    
//       let sum = 0;
//       for (let key of Object.values(obj)) {
//        if(typeof key === "number"){
//         sum += key;
//                                }
//                  }
//        return sum;
      
//                             }
    
                            
//     console.log (sumAllAges( {
//       "John": 70,
//       "Pete": 30,
//       "Mary": 22,
//       "Rob" : "Gangster",
//       "Clous": "Vampire"
//     }))
    

// function f(arr,min=Math.max.apply(null,arr)){
//     if(min<0){
//        return -1
//      }
//       if(arr[0] === undefined){ 
//         return min
//      }
//   if(arr[arr.length - 1] > 0 && arr[arr.length - 1] < min){
//          min = arr[arr.length - 1]
//          }
//           arr.pop()
//       return f(arr,min)
  
//   }
//   console.log(f([-1,-2,-3,-4,-5,-66,-4,-4]))
  
  

// function f (arr,i=0){
//     i++
// if(i>arr.length-1){
// return -1
// }
// if(arr[i-1]>arr[i]){
//   return i
// }
// return f(arr, i)
// }
// console.log(f([0,-1]))


// function f(arr,clone=[]){
//     if(arr[1]===undefined){
//       arr.pop()
//       return clone.reverse()
//     }
//     clone.push(arr[arr.length-1])
//     arr.pop()
//     return f(arr,clone)
//     }
//     console.log(f([1,2,3,4]))
    
//     function f(arr,n,i=0){
//         if(i===arr.length-n){
//              return arr;
//                   }
//       arr.unshift(arr[arr.length-1]);
//       arr.pop();
//                 i++ ;
//        return f(arr, n, i) ;

//     }
//     console.log(f(["a","b","c","d","e","f","g","h"] , 3))



       