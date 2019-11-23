<template>
  <header id="header-top">
    <div class="main-header" :style="boxshadowStyle">
      <div class="header-hamburg">
        <el-button type='text' @click="showNavigation">
          <svg class="iconhamburg" aria-hidden="true">
              <use xlink:href="#iconhamburg"></use>
          </svg>
        </el-button>
        <!-- 侧边导航栏 -->
        <header-navigation :style="navigationStyle"></header-navigation>
      </div>
      <div class="header-logo">
        <el-button type='text'>
          <svg class="icon-logo" aria-hidden="true">
            <use xlink:href="#iconlogo"></use>
          </svg>
        </el-button>
      </div>
      <div class="header-icon">
        <el-button type='text' @click="search">
          <svg class="icon-search" aria-hidden="true">
            <use xlink:href="#iconicon-search-m"></use>
          </svg>
        </el-button>
        <el-dropdown class="header-dropdown">
          <span class="el-dropdown-link">
            <svg class="icon-account" aria-hidden="true">
              <use xlink:href="#iconicon-account"></use>
            </svg>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <svg class="icon-account" aria-hidden="true">
                <use xlink:href="#iconaccount"></use>
              </svg>
              <span class="dropdown-span">my account</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <svg class="iconOrderList" aria-hidden="true">
                <use xlink:href="#iconOrderList"></use>
              </svg>
              <span class="dropdown-span">order history</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <svg class="icon-account" aria-hidden="true">
                <use xlink:href="#iconxin"></use>
              </svg>
              <span class="dropdown-span">my wishlist</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <svg class="iconmakeup" aria-hidden="true">
                <use xlink:href="#iconmakeup"></use>
              </svg>
              <span class="dropdown-span">beauty profile</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type='text' @click="showbag">
          <svg class="icon-bag" aria-hidden="true">
            <use xlink:href="#iconicon-bag-m"></use>
          </svg>
        </el-button>
      </div>
    </div>
    <div class="globalbanner">
      <span>100% cruelty free</span>
      <span>luxury formulas</span>
      <span>wallte-friendly prices</span>
    </div>
    <!-- 搜索栏 -->
    <header-search :style="searchStyle"></header-search>
    <!-- 购物车 -->
    <header-sidecart :style="sidecartStyle" :sidecartStyle="sidecartStyle"></header-sidecart>
  </header>
</template>
<script>
import HeaderNavigation from './headers/navigation'
import HeaderSearch from './headers/search'
import HeaderSidecart from './headers/sidecart';
export default {
  data() {
    return {
      boxshadowStyle:{
        'box-shadow':'none'
      },
      navigationStyle:{ display:'none' },
      searchStyle:{display:'none'},
      sidecartStyle:{display:'none'}
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollTop);
  },
  methods: {
    //顶部header样式变化
    scrollTop(){
      var scrollTop = document.documentElement.scrollTop
      if(scrollTop > 1){
        this.boxshadowStyle['box-shadow'] = '0px 3px 3px 0px rgba(0,0,0,0.1)'
      }else{
        this.boxshadowStyle['box-shadow'] = 'none'
      }
    },
    //打开侧边导航栏
    showNavigation(){
      if(this.navigationStyle.display=='none'){
        this.navigationStyle.display='block'
      }else{
        this.navigationStyle.display='none'
      }
    },
    //打开搜索框
    search(){
      if(this.searchStyle.display=='none'){
        this.searchStyle.display='block'
      }else{
        this.searchStyle.display='none'
      }
    },
    showbag(){
      if(this.sidecartStyle.display=='none'){
        this.sidecartStyle.display='block'
      }
    }
  },
  components:{
    HeaderNavigation,
    HeaderSidecart,
    HeaderSearch
  }
}
</script>
<style scoped>
#header-top{
  width: 100%;
  height: 100px;
}
#header-top .main-header{
  width: 100%;;
  height: 75px;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;
  z-index: 20;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  /* box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.1) */
}
#header-top .main-header .header-hamburg{
  z-index: 50;
}
#header-top .main-header .header-logo{
  margin-left: 100px;
}
.main-header .header-icon button,.header-icon .el-dropdown{
  margin-right: 25px;
}
#header-top .globalbanner{
  width: 100%;
  position: relative;
  top: 75px;
  text-align: center;
}
#header-top .globalbanner span{
  padding: 0px 5px;
  font-size: 13px;
  color: #3c3935;
}
#header-top .globalbanner span:nth-child(2){
  border-left: 1px solid #111111;
  border-right: 1px solid #111111;
}
#header-top .header-dropdown .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
  color: #c9b0d0;
  background-color: #f8f8f8;
}
#header-top .header-dropdown .el-dropdown-menu__item{
  display: flex;
  align-items: center;

}
#header-top .header-dropdown .el-dropdown-menu__item span{
  margin-left: 10px;
}
</style>