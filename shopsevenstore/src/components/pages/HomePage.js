import React from "react";
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import TestimonialsList from "../TestimonialsList";

export default function HomePage({ 
  products,
  showSidebarCart,
  setShowSidebarCart,
  addProductToCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
  addToCartTotal,

}) {
  return (
     <>      
        <Header />
        <SidebarCart
          addToCartTotal={addToCartTotal}
          removeProductFromCart={removeProductFromCart}
          cartTotal={cartTotal}
          selectedProducts={selectedProducts} 
          setShowSidebarCart={setShowSidebarCart}
          showSidebarCart={showSidebarCart}
        />
        <div className="page-inner-content">
          <div className="section-title">
            <h3>Produtos Selecionados</h3>
            <div className="underline"></div>
          </div> 

          <div className="main-content">
            <ProductsList 
            addProductToCart={addProductToCart} 
            products={products} />              
          </div>                       
        </div>    
      <ExclusiveSection />
      <TestimonialsList />
    </>
  );
}
