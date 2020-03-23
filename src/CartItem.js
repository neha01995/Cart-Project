import React from 'react';
class CartItem extends React.Component{
    constructor (){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''

        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =() =>{
        console.log('this',this.state);
    }
    render(){
        const {title,price,qty}=this.state;
        return(
        <div className="cart-item">
            <div className="left-block">
            <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:30}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* add buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={this.increaseQuantity}
                    />
                    <img 
                         alt="decrease" 
                         className="action-icons" 
                         
                         src="https://t4.ftcdn.net/jpg/03/16/36/03/240_F_316360373_uWcj5rZxsUbmoAogMfow8EZhUOn7FTM0.jpg"
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                    />

            
               </div>
            
            </div>
        </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}







export default CartItem;