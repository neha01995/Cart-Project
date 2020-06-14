import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';
class App extends React.Component{
  
  constructor (){
    super();
    this.state={
        products:[],
        loading :true


    }
    this.db=firebase.firestore();
    // this.increaseQuantity=this.increaseQuantity.bind(this);
    // this.testing();
}
componentDidMount (){
  // firebase
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot) =>{
  //    console.log(snapshot);
  //    snapshot.docs.map((doc) =>{
  //      console.log(doc.data())
  //    });
  //    const products=snapshot.docs.map((doc) =>{
  //      const data=doc.data();
  //      data['id']=doc.id;
  //      return data;
  //    })
  //    this.setState({
  //      products,
  //     loading:false
  //    })

  //  })

    this.db
     .collection('products')
    //  .where('price','==',999)
    //  .where('title','==','Bag')
        
        .orderBy('price')

     .onSnapshot((snapshot) =>{
         console.log(snapshot);
         snapshot.docs.map((doc) =>{
           console.log(doc.data())
         });
         const products=snapshot.docs.map((doc) =>{
           const data=doc.data();
           data['id']=doc.id;
           return data;
         })
         this.setState({
           products,
          loading:false
         })
    
       })

}

handleIncreaseQuantity= (product) =>{
    console.log('plz increase the qty of product',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    // products[index].qty+=1

    // this.setState({
    //     products
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
     .update({
       qty:products[index].qty+1

     })
     .then(()=>{
       console.log('Updated Successfully')
     })
     .catch((error)=>{
       console.log('Error:',error);
     })

    
}

handleDecreaseQuantity= (product) =>{
    console.log('plz decrease the qty of product',product);
    const {products}=this.state;
    const index=products.indexOf(product);

    if( products[index].qty===0){
        return;
    }
    // products[index].qty-=1

    // this.setState({
    //     products
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
     .update({
       qty:products[index].qty-1

     })
     .then(()=>{
       console.log('Updated Successfully')
     })
     .catch((error)=>{
       console.log('Error:',error);
     })
}
handleDeleteProduct=(id) =>{
    const {products}=this.state;
    

    // const items=products.filter((item)=> item.id !==id);

    // this.setState({
    //     products:items
    // })
    const docRef=this.db.collection('products').doc(id);
    docRef
     .delete()
     .then(()=>{
       console.log('deleted Successfully')
     })
     .catch((error)=>{
       console.log('Error:',error);
     })

}
  getCartCount = () =>{
    const {products}=this.state;
    let count=0;

    products.forEach((product) =>{
      count+=product.qty;
    })
    return count;
  }

  getCartTotal = () =>{
    const {products} =this.state;

    let cartTotal=0;
    products.map((product) =>{
      if (product.qty>0){
      cartTotal =cartTotal +product.qty * product.price;
    }
    return '';
  });
    return cartTotal;
  }
  addProduct=() =>{
    this.db
    .collection('products')
    .add({
      img:"https://static.digit.in/product/thumb_112808_product_td_480x480.jpeg",
      price:900,
      qty:3,
      title:'Washing Machine'

    })
    .then((docRef)=>{
      console.log('Product has been added',docRef);

    })
    .catch((error)=>{
      console.log('Error:',error);

    })
  }

  render (){
    const {products,loading} =this.state;
     return (
       <div className="App">
          <h1 className="cart-text-size">Cart</h1>
           <Navbar count={this.getCartCount() }  />
           <button onClick={this.addProduct} style={{padding:20,fontSize:20}} >Add a Product</button>
           <Cart 
            products ={products}
             onIncreaseQuantity={this.handleIncreaseQuantity}
             onDecreaseQuantity={this.handleDecreaseQuantity}
             onDeleteProduct={this.handleDeleteProduct} />
             {loading && <h1>Loading Products....</h1>}
             <div style={{ padding:20,fontSize:20}}><h2>Total: {this.getCartTotal()}</h2>  </div>

    </div>
  );
}
}

export default App;
