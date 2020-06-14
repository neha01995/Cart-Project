import React from 'react';
const CartItem = (props) =>{
    // constructor (){
    //     super();
    //     this.state={
    //         price:999,
    //         title:'Mobile Phone',
    //         qty:1,
    //         img:''

    //     }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    //     this.testing();
    // }
    // testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout( () =>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(() =>{
    //         //setState acts like a synchronous call
    //         this.setState({qty:this.state.qty+10});
    //         console.log('state',this.state);
    //     });
    // }
    // increaseQuantity =() =>{
        // this.state.qty+=1;
        // console.log('this',this.state);
        //setState form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //setState form 2- if prevState required use this
    //     this.setState((prevState) =>{
    //         return{
    //             qty:prevState.qty+1
    //         }
    //     }, () =>{
    //         console.log('this.state',this.state);

    //     });
    // }
    // decreaseQuantity =() =>{
    //     const {qty}=this.state;
    //     if(qty==0){
    //         return;
    //     }


    //     //setState form 2- if prevState required use this
    //     this.setState((prevState) =>{
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     });
    // }

        // console.log('this.props',this.props);
        const {title,price,qty}=props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct}=props;
        return(
        <div className="cart-item">
            <div className="left-block">
            <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:50}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* add buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img 
                         alt="decrease" 
                         className="action-icons" 
                         
                         src="https://t4.ftcdn.net/jpg/03/16/36/03/240_F_316360373_uWcj5rZxsUbmoAogMfow8EZhUOn7FTM0.jpg"
                         onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                        onClick={() => onDeleteProduct(product.id)}
                    />

            
               </div>
            
            </div>
        </div>
        );
    }


const styles={
    image:{
        height:150,
        width:150,
        borderRadius:5,
        background:'#ccc'
    }
}







export default CartItem;