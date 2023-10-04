const productBin = require('./dummyData.json')

const productCode = 'FBR00040101'

const sumQuantity=(data, productId)=>{
    let totalQuantity = 0
    for (const item of data) {
      if (item.productCode === (productId)) {
        totalQuantity += item.quantity
      }
    }
    return totalQuantity
}

const totalQuantity = sumQuantity(productBin.data, productCode)

console.log(`Total quantity untuk produk dengan ID ${productCode}: ${totalQuantity}`)