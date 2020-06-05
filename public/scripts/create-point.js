function populateUfs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states =>{

        for(const state of states){
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUfs() 

function getCities(event){

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text 

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = ""
    citySelect.disabled = true
    fetch(url)
    .then( res => res.json())
    .then( cities =>{

        for(const city of cities){
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//ITEMS DE COLETA

const itemsToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(){
    const itemLi = event.target
    //adicionar ou remover class com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id



    //VERIFICAR SE EXISTEM ITEMS SELECIONADOS
    const alreadySelected = selectedItems.findIndex(item=>{
        const itemFound = item == itemId
        return itemFound
    })


    

    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item =>{
            const itemsDifferent = item != itemId
            return  itemsDifferent
        })
        selectedItems = filteredItems
    }
    else{
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems

}