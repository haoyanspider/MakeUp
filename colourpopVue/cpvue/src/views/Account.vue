<template>
  <div class="page-container">
    <section id="customer-wrapper-account">
        <div id="shopify-section-account">
            <article class="act-banner">
                <img src="../assets/img/background/Account_TOPBANNER_1024x1024_bd3f6326-b15d-44ad-aac0-da1e31012ed0_1024x1024.webp" alt="">
            </article>
            <article class="act-welcome">
                <div class="act-welcome_container">
                    <div class="act-welcome_title">
                        <span class="act-welcome_hi">Hi, Victoria</span>
                        <span class="act-welcome_logout">
                        Not victoria?
                            <a href="javascript:;">logout here</a>
                        </span>
                    </div>
                </div>
            </article>
            <article class="act-nav" id="act-nav">
                <div class="act-nav_container">
                    <a href="javascript:;" class="act-nav_link">
                        <span>Account</span>
                    </a>
                    <a href="javascript:;" class="act-nav_link">
                        <span>Beauty Profile</span>
                    </a>
                    <a href="javascript:;" class="act-nav_link">
                        <span>Order History</span>
                    </a>
                    <a href="javascript:;" class="act-nav_link">
                        <span>Wishlist</span>
                    </a>
                </div>
            </article>
        </div>
        <div id="shopify-section-account_wishlist">
            <article class="act-content act-wishlist">
                <h2 class="title">WISHLIST</h2>
                <div class="act-wishlist_container">
                    <div class="act-wishlist_header">
                        <label class="act-wishlist_header--title">Products</label>
                        <a class="act-wishlist_header--share">Share Wishlist</a>
                    </div>
                    <div class="product_listing">
                        <a href="javascript:;" class="product_listing-images">
                            <div class="product_list-images--container">
                                <img src="../assets/img/eye-palettes/Yes_Please.webp" alt="">
                            </div>
                        </a>
                        <div class="product_listing-content">
                            <div class="wishlist_container">
                                <button class="wishlist_action">
                                    <div class="wishlist_image">
                                        <svg class="iconicon-close-small" aria-hidden="true">
                                            <use xlink:href="#iconicon-close"></use>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <label class="product_listing-content--title">Yes,Please!</label>
                            <label class="product_listing-content--type">PALETTE</label>
                            <label class="product_listing-content--price">
                                $16
                            </label>
                        </div>
                        <div class="product_list-actions">
                            <form action="">
                                <input type="submit" class="btn" value="add to bag">
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div id="shopify-section-account_order-history">
            <article class="act-contentx act-order-history page-width">
                <h2 class="title">ORDER HISTORY</h2>
                <table class="order-history_table">
                    <thead class="order-history_head">
                        <th></th>
                        <th>ORDER</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th></th>
                    </thead>
                    <tbody class="order-history_body"></tbody>
                </table>
                <div class="re-order">
                    <h2 class="title">REORDER</h2>
                </div>
            </article>
        </div>
    </section>    
  </div>
</template>
<script>
import funs from "../funs.js"
export default {
  created() {
      funs.getAccount(result=>{
          console.log(result)
      })
      
      
  },
}
</script>
<style>
label {
    display: block;
    margin-bottom: 5px;
}
.page-container section{
    width: 100%;
    position: relative;
}
.act-banner{
    width: 100%;
}
.act-banner img{
    width: 100%;
}
.act-welcome {
    width: 100%;
    display: block;
    padding: 50px 0px;
}
.act-welcome_container{
    margin: 0 auto;
}
.act-welcome .act-welcome_container .act-welcome_title {
    display: block;
    width: 100%;
    text-align: center;
}
.act-welcome .act-welcome_container .act-welcome_title .act-welcome_hi {
    display: block;
    font: 1.5em "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
    letter-spacing: 0.08em;
    font-weight: bold;
}
.act-welcome .act-welcome_container .act-welcome_title .act-welcome_logout {
    display: block;
    font: 12px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 1em 0 0 0;
}
.act-welcome .act-welcome_container .act-welcome_title .act-welcome_logout a{
    color: #999;
}
.act-welcome .act-welcome_container .act-welcome_title .act-welcome_logout a:hover{
    color: #111;
}
.act-nav{
    padding: 0 60px;
    width: 100%;
    margin: 0 auto 60px auto;
}
.act-nav .act-nav_container {
    text-align: center;
    display: block;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
}
.act-nav .act-nav_link {
    padding: 20px 0px;
    color: #999;
    display: inline-block;
    width: calc(100% / 4 - 5px);
    text-transform: uppercase;
    cursor: pointer;
    font: 13px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
}

/*wishlish*/
.act-wishlist{
    display: none;
}
.act-content{
    width: 100%;
    padding: 0px 60px;
}
.act-content .title{
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #111;
    color: #d9ccf1;
}
.act-content .act-wishlist_container .act-wishlist_header {
    font: 13px/1 "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    width: calc(100% - 20px);
    border-bottom: 1px dotted #e8e8e8;
    margin: 0 auto 20px auto;
    padding: 10px 0;
    text-transform: uppercase;
    position: relative;
}
.act-content .act-wishlist_container .act-wishlist_header .act-wishlist_header--share {
    color: #111;
    font: 12px/1 "Visby CF Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    border: 1px solid #111;
    position: absolute;
    right: 0;
    top: -10px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 7px 10px;
}
.act-content .act-wishlist_container .act-wishlist_header .act-wishlist_header--share:hover{
    color: #fff;
    background-color: #111;
}
.product_listing {
    width: calc(100% * 1/5);
    margin: 0 0 50px 0;
    padding: 0 15px;
    position: relative;
    display: inline-block;
}
.product_list-images--container img{
    width: 100%;
}
.product_listing-content{
    text-align: center;
    margin-top: 1em;
}
.wishlist_container {
    position: absolute;
    top: 0px;
    right: 0px;
}
.wishlist_container .wishlist_action {
    cursor: pointer;
    display: inline-block;
    border: 0px;
    margin: 0;
    background: transparent;
    transition: all 0.2s ease-in;
    position: relative;
    padding: 10px 25px;
}
.wishlist_container .wishlist_image {
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    position: relative;
    top: 0px;
}
.product_listing .product_listing-content .product_listing-content--title {
    font: 14px/1.2 "Visby CF Extra Bold";
    text-transform: lowercase;
    width: 86%;
    margin: 0 auto 5px auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bolder;
}
.product_listing .product_listing-content .product_listing-content--type {
    font-size: 11px;
    text-transform: lowercase;
    line-height: 1.2;
}
.product_listing .product_listing-content .product_listing-content--price {
    font-size: 11px;
    margin: 8px auto;
}
.product_list-actions .btn{
    width: 100%;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0px;
    padding: 13px 5px;
    border-color: #000;
    background-color: #fff;
    color: #000;
    font-family: "Visby CF Bold";
    font-weight: 700;
    text-transform: lowercase;
    letter-spacing: 0.06em;
    white-space: normal;
}
.product_list-actions .btn:hover{
    background-color: #000;
    color: #fff;
}
/*ORDER HISTORY*/
.page-width {
    width: 100%;
    max-width: 1400px;
    padding: 0px 60px;
    margin: 0 auto;
}
.act-order-history{
    display: block;
}
.order-history_table{
    margin: 20px 0 60px 0;
}
.act-order-history table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.order-history_table thead{
    border-bottom: 1px solid #c1c1c1;
}
.order-history_table .order-history_head th {
    font: 13px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    padding: 10px 14px;
    font-weight: bold;
}
</style>