
const product=document.getElementById('product')
const quantity=document.getElementById('quantity')

const showDataInUI=(productValue, quantityValue)=>{
    const listSec=document.getElementById('listSec')

    const newList=document.createElement('li')
    newList.innerText=`
    ${productValue} - ${quantityValue} pcs
    `
    listSec.appendChild(newList)
    document.getElementById('product').value=''
    document.getElementById('quantity').value=''
}

const getDataFromInputs=()=>{
    const p=product.value;
    const q=quantity.value

    showDataInUI(p,q)
    saveInLocalStorage(p,q)
}

const checkKeyAvailablty=()=>{
    let cart={}
    const getCart=localStorage.getItem('cart')
    if(getCart){
        cart=JSON.parse(getCart)
    }
    return cart
}

const saveInLocalStorage=(pValue,qValue)=>{
    let cart=checkKeyAvailablty()
    cart[pValue]=qValue
    let stringifiedData=JSON.stringify(cart)
    localStorage.setItem('cart',stringifiedData)

}

const show_LocalStorage_Data_In_UI=()=>{
    const cartInLocal=checkKeyAvailablty()
    for(const pro in cartInLocal){
        showDataInUI(pro,cartInLocal[pro])
    }
}
show_LocalStorage_Data_In_UI()
