const list= document.querySelector('ul')
const buttonShowAll=document.querySelector('.mostrar')
const buttonMapAll=document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter')




function showAll (productsArray){
    let myLi= ''
    productsArray.forEach( (product) =>{
    myLi += `
    
    <li >
           <img src=${product.src}>
            <p>${product.name}</p>
            <p class=" item-price"> R$ ${product.price}</p>
        </li>
    `
})
list.innerHTML = myLi
}

function mapAllItems(){
const NewPrices= menuOptions.map((product) =>({
  ...product,
    price:product.price * 0.9,
   
}

))
showAll(NewPrices)


}
function sumAllItems(){
    const totalValue= menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML= `
    <li >
            <p>O valor total dos items é R$ ${totalValue}</p>
        </li>
    `

}

function filterAllItems(){

    const filterJustVegan= menuOptions.filter ((product) => product.vegan )


    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () =>showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click' ,sumAllItems)
filterAll.addEventListener('click',filterAllItems)
