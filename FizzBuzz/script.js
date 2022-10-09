/*

FIZZBUZZ

** TAKE A NUMBER AS INPUT (LET'S SAY 'N')
** PRINT 'N' TIMES :
    - IF THE NUMBER IS DIVISIBLE BY 3, PRINT "fizz"
    - IF THE NUMBER IS DIVISIBLE BY 5, PRINT "buzz"
    - IF THE NUMBER IS DIVISIBLE BY BOTH (OR 15), PRINT "fizzbuzz"
    - ELSE PRINT THE NUMBER

*/


const btnPrint = document.getElementById('btnPrint')
const inpNum = document.getElementById('inpNum')
const listNum = document.getElementById('listNum')

btnPrint.onclick = function(){
    const start = Date.now()
    const num = parseInt(inpNum.value)



    // ****** UPDATE HTML COMPONENT IN EVERY ITERATION ******
    
    // ===== MOST TIME CONSUMING =====


    // for(let i=1; i<=num; i++){
    //      listNum.innerHTML += "<li>${i}</li>"        
    // }



    // ****** UPDATE LOCAL VAR IN EVERY ITERATION AND LATER UPDATE HTML COMPONENT ONCE ******

    // ===== OPTIMISED =====


    // let data = ""
    // for(let i=1; i<=num; i++){
    //     data += `<li>${i}</li>`
    // }
    // listNum.innerHTML = data



    // ****** CREATE A NEW LIST ELEMENT and APPEND IT ******

    // ===== MORE OPTIMISED =====
   

    // for(let i=1; i<=num; i++){
    //     const li = document.createElement('li')
    //     li.innerHTML = i
    //     listNum.appendChild(li)
    // }



    // ****** SOLUTION ******


    //  ===== TRY -1 =====

    // for(let i=1; i<=num; i++){
    //     const li = document.createElement('li')

    //     let text = ''

    //     if(i%15 == 0){
    //         text = "fizzbuzz"
    //     }
    //     else if(i%3 == 0){
    //         text = "fizz"
    //     }
    //     else if(i%5 == 0){
    //         text = "buzz"
    //     }
    //     else{
    //         text = i
    //     }

    //     li.innerHTML = text
    //     listNum.appendChild(li)
    // }



    // ===== TRY-2 =====

    // for(let i=1; i<=num; i++){
    //     const li = document.createElement('li') // create a new list item

    //     let text = ''

    //     if(i % 3 === 0) text += 'fizz'
    //     if(i % 5 === 0) text += 'buzz'
    //     if(text === '') text = i

    //     li.innerHTML = text

    //     listNum.appendChild(li)
    // }


    // ===== OPTIMISED - AS MODULO OPERATOR IS SOMETIMES COSTLY =====

    let c3=0
    let c5=0
    for(let i=1; i<=num; i++){
        const li = document.createElement('li') // create a new list item

        let text = ''

        c3++
        c5++

        if(c3 === 3){
            text += 'fizz'
            c3 = 0
        }
        if(c5 === 5){
            text += 'buzz'
            c5=0
        }
        if(text === '') text = i

        li.innerHTML = text

        listNum.appendChild(li)
    }

    const end = Date.now()
    console.log("Time taken:" + (end - start))
}
