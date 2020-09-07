//product-list 
const productList = [
  {
    productName : 'LIGHTENING SOLE EXPLORER'
    ImageUrl : '../html/Images/shoes3.jpg'
    productPrice : 'NGN34,000.00'
  },
  {
    productName : 'LIGHTENING SOLE EXPLORER (PLAIN)'
    ImageUrl : '../html/Images/shoes4.jpg'
    productPrice : 'NGN42,000.00'
  },
  {
    productName : 'FEMALE LANDING SNEAKERS'
    ImageUrl : '../html/Images/l.png'
    productPrice : 'NGN14,000.00'
  }
];

productList.forEach((product) => {
  console.log(product.productName + ' with '+ product.imageUrl + ' is sold for ' + product.productPrice)
});
