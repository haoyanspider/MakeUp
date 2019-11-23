<template>
    <header>
        <div id="shopify-section-theme_header">
            <header class="header">
                <div class="header_hamburger-container">
                    <button class="header_hamburger" @click="navigationOpen">
                        <svg class="iconhamburg" aria-hidden="true" v-if='isOpen==false'>
                            <use xlink:href="#iconhamburg"></use>
                        </svg>
                        <svg class="iconhamburg" aria-hidden="true" v-else>
                            <use xlink:href="#iconhamburg"></use>
                        </svg>
                    </button>
                </div>
                <section data-section-type="Header" :style="headerStyle">
                    <!-- 搜索栏框 -->
                    <header-search :style="searchStyle"></header-search>
                    <div class="header_logo">
                        <a href="javascript:;" id="main-logo" class="main-logo">
                            <svg class="icon-logo" aria-hidden="true">
                                <use xlink:href="#iconlogo"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="header_actions">
                        <ul>
                            <li class="header_action">
                                <button class="search-button" @click="search">
                                    <svg class="icon-search" aria-hidden="true">
                                        <use xlink:href="#iconicon-search-m"></use>
                                    </svg>
                                </button>
                            </li>
                            <li class="header_action">
                                <svg class="icon-account" aria-hidden="true">
                                    <use xlink:href="#iconicon-account"></use>
                                </svg>
                            </li>
                            <li class="header_action">
                                <button class="cart-button" @click="cartOpen">
                                    <svg class="icon-bag" aria-hidden="true">
                                        <use xlink:href="#iconicon-bag-m"></use>
                                    </svg>
                                    <span class="cart-button_count">
                                    6
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </section>
                <!-- <nav class="header_navigation">
                    <div class="header_navigation--container">
                        <ul>
                            <a href="javascript:;">
                                <li>Colourpop</li>
                            </a>
                            <a href="javascript:;">
                                <li>Sol Body</li>
                            </a>
                            <a href="javascript:;">
                                <li>Fourth Ray Beauty</li>
                            </a>
                            <a href="javascript:;">
                                <li>New Arrivals</li>
                            </a>
                        </ul>
                    </div>
                </nav> -->
                <div id="shopify-section-theme_marquee">
                    <section class="globalbanner">
                        <div class="owl-item">
                            <a href="javascript:;" class="marquee_link">
                            <p class="marquee_message">100% CRUELTY FREE | MADE IN L.A |LUXURY FORMULAS | WALLET-FRIENDLY PRICES</p>
                            </a>
                        </div>
                    </section>
                </div>
            </header>
        </div>
        <div id="shopify-section-theme_sidecart" class="shopify-section-theme_sidecart" :style="sidecartStyle">
            <section class="nospacing" data-section-type="SideCart">
                <div class="side-cart_parent">
                    <div class="side-cart_header">
                        <label class="side-cart_header--title">Shopping Bag</label>
                        <button class="side-cart_header--close" @click="cartClose">
                            <svg class="iconicon-close-big" aria-hidden="true">
                            <use xlink:href="#iconicon-close"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="side-cart_container">
                        <div class="side-cart_product" v-for='(p,i) of products' :key='i'>
                            <div class="side-cart_product-image">
                                <img src="../assets/img/orange_palette.webp" alt="">
                            </div>
                            <div class="side-cart_product-details" @click='remove()'>
                                <label class="side-cart_product-details--title">{{p.name}}</label>
                                <label class="side-cart_product-details--type">{{p.category}}</label>
                                <label class="side-cart_product-details--price">${{p.price}}</label>
                                <div class="side-cart_product-quantity">
                                    <button class="side-cart_product-quantity--decrement" @click='quantity(1)'>
                                        <svg class="iconicon-minus" aria-hidden="true">
                                            <use xlink:href="#iconicon-minus"></use>
                                        </svg>
                                    </button>
                                    <input type="text" class="side-cart_product-quantity--input" :value="quantities">
                                    <button class="side-cart_product-quantity--increment" @click='quantity(2)'>
                                        <svg class="iconicon-plus" aria-hidden="true">
                                            <use xlink:href="#iconicon-plus"></use>
                                        </svg>
                                    </button>
                                </div>
                                <button class="side-cart_product-details--remove" :data-i="i">
                                    <svg class="iconicon-close-small" aria-hidden="true">
                                        <use xlink:href="#iconicon-close"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="side-cart_info">
                        <div class="side-cart_info--subtotal">
                            <label>Subtotal
                                <span>$109</span>
                            </label>
                        </div>
                        <div class="side-cart_info--checkout">
                            <a href="javascript:;" class="btn btn--secondary">
                                SECURE CHECKOUT
                            </a>
                        </div>
                        <div class="side-cart_info--additional">
                            <button>
                                <img src="../assets/img/pay.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <header-navigation :style="navigationStyle"></header-navigation>
    </header>
</template>
<script>
import HeaderSearch from './headers/search'
import HeaderNavigation from './headers/navigation'

export default {
    name:'MyHeader',
    data(){
        return {
            searchStyle:{display:"none"},
            sidecartStyle:{display:"none"},
            navigationStyle:{display:"none"},
            isOpen:false,
            headerStyle:"",
            products:[
            {name:'Orange You Glad?',category:'shadow palette',price:'12'},
            {name:'Sweet Talk',category:'shadow palette',price:'12'},
            {name:'Yes please!',category:'shadow palette',price:'12'}
            ],
            quantities:0
        }
    },
    components:{
        HeaderSearch,
        HeaderNavigation
    },
    
    methods:{
        
        //打开搜索框
        search(){
            if(this.searchStyle.display=='none'){
                this.searchStyle.display='block'
            }else{
                this.searchStyle.display='none'
            }
        },
        //打开购物车
        cartOpen(){
            if(this.sidecartStyle.display=='none'){
                this.sidecartStyle.display='block'
            }
        },
        //关闭购物车
        cartClose(){
            if(this.sidecartStyle.display=='block'){
                this.sidecartStyle.display='none'
            }
        },
        //打开侧边导航栏
        navigationOpen(){
            if(this.navigationStyle.display=='none'){
                this.navigationStyle.display='block'
            }else{
                this.navigationStyle.display='none'
            }
            if(this.isOpen==false){
                this.isOpen=true
            }else{
                this.isOpen=false
            }
        }
    }
}
</script>
<style scoped>
    .globalbanner{
    width: 100%; 
    text-align:center;
    background:#fff;
    padding: 10px 0;
    position: relative;
    top: 100px;
}
.marquee_link{
    color: #3c3935;
}
.marquee_link:hover{
    color: #999;
}
.marquee_message{
    text-align: center;
    text-transform: capitalize;
    display: block;
    font: 10px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    background: #fff;
    padding: 0;
    position: relative;
}
header.header{
    width: 100%;
/*    position: fixed;*/
    position: relative;
/*	z-index: 100;*/
	top:0;
}
.header .header_hamburger-container {
    position:fixed;
    z-index: 15;  
    top: 50px;
    left: 40px;
}
header.header .header_hamburger-container .header_hamburger{
    width: 20px;
    height: 16px;
    position: relative;
    cursor: pointer;
    border: 0;
    background: transparent;
    pointer-events: all;
    display: block;
}
header.header [data-section-type="Header"]{
    background-color: #fff;
    z-index: 11;
    position: fixed;
    width: 100%;
	padding: 20px 0;
}
header.header [data-section-type="Header"] .header_logo {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    position: relative;
}
header.header [data-section-type="Header"] .header_logo .main-logo{
    width: 120px;
    height: 28px;
}
header.header [data-section-type="Header"] .header_actions {
    position:relative;
    text-align: right;
    right: 60px;
    bottom: 30px;
    z-index: 12;
}
header.header [data-section-type="Header"] .header_actions ul{
	position: relative;
	z-index: 10;
}
header.header [data-section-type="Header"] .header_actions .header_action {
    position: relative;
    width: 20px;
    display: inline-block;
    padding: 5px 20px;
}
.header_action button{
    background-color: transparent;
    border: 0;
    cursor: pointer;
}
header.header [data-section-type="Header"] .header_actions .header_action .cart-button_count{
    font: 11px/1.2 "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    position: absolute;
    top: -3px;
    right: 10px;
    transform: translateX(150%);
    background-color: #f8f8f8;
    padding: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
header.header .header_navigation {
    width: 100%;
    text-align: center;
    background: #fff;
    z-index: 11;
    position: fixed;
    top: 150px;
}

header.header .header_navigation li {
    font: 12px "Visby CF Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    pointer-events: all;
    width: auto;
    display: inline-block;
    margin: 0 20px;
    padding: 0 0 5px 0;
    transition: 0.3s all;
    border-bottom: 1px solid transparent;
    text-transform: uppercase;
}
/* 购物车样式 */
[data-section-type="SideCart"] {
	width: 420px;
    position: fixed;
    top: 0;
    color: #111;
    background: #f3edff;
    height: 100%;
    overflow-y: auto;
    padding: 20px 40px 0 40px;
    z-index: 999;
    right: 1px;
}
.side-cart_parent{
    position: relative;
    height: 100%;
}
.side-cart_header{
    text-align: left;
    position: relative;
}
.side-cart_header .side-cart_header--title {
    font: 1.3em/1 "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
    margin-bottom: 20px;
}
.side-cart_header .side-cart_header--close {
    position: absolute;
    right: 0px;
    top: 3px;
    background: transparent;
    width: 15px;
    height: 15px;
    padding: 0;
    border: 0;
}
.side-cart_container {
    max-height: calc(100% - 240px);
    overflow-y: auto;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product {
    padding: 15px;
    position: relative;
    background: #fff;
    margin-bottom: 10px;
    display:flex;
}
.side-cart_container .side-cart_product-image {
    width: 75px;
    display: inline-block;
    vertical-align: top;
}
.side-cart_container .side-cart_product-image img{
    width: 100%;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details {
    display: inline-block;
    width: calc(100% - 95px);
    vertical-align: top;
    margin: 0 0 0 20px;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details .side-cart_product-details--title{
    display: block;
    font: 12px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0 0 4px 0;
    text-transform: uppercase;
    font-weight: bold;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details .side-cart_product-details--type {
    display: block;
    font: 11px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0 0 8px 0;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details .side-cart_product-details--price {
    display: block;
    font: 11px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-quantity {
    border: 1px solid #111;
    width: 97px;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-quantity .side-cart_product-quantity--decrement, [data-section-type="SideCart"] .side-cart_container .side-cart_product-quantity .side-cart_product-quantity--increment {
    border: none;
    background: transparent;
    width: 10px;
    height: 10px;
    margin: 6px 8px;
    padding: 0px;
    display: inline-block;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-quantity .side-cart_product-quantity--input {
    display: inline-block;
    vertical-align: middle;
    background: transparent;
    border: none;
    width: 40px;
    height: 28px;
    text-align: center;
    margin: 0;
    padding: 0;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details--remove {
    background: transparent;
    border: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 10px;
    padding: 0px;
}
/*尾部*/
[data-section-type="SideCart"] .side-cart_info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 0 20px 0;
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--subtotal {
    margin: 0 0 10px;
    font-family: "Visby CF Extra Bold";
    font-weight: 700;
    line-height: 1.2;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: 20px 0;
    font: 1.3em/1 "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--subtotal span {
    float: right;
}
.btn.btn--secondary{
    background-color: #000;
    border-color: #000;
    color: #fff;
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--checkout a {
    width: 100%;
}
.btn {
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: auto;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 13px 5px;
    font-family: "Visby CF Bold";
    font-weight: 700;
    text-transform: lowercase;
    letter-spacing: 0.06em;
    white-space: normal;
    font-size: 12px;
    transition: 0.2s cubic-bezier(0.44, 0.13, 0.48, 0.87);
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--additional {
    margin: 10px 0 0 0;
}
.side-cart_info .side-cart_info--additional button{
    width: 100%;
    height: 42px;
    border: 0px;
    border-radius: 5px;
    background-color: #f6b600;
    cursor: pointer;
}
.side-cart_info .side-cart_info--additional img{
    width: 63px;
}
</style>