<template>
    <main>
        <h1>欢迎登录首页</h1>
        <button @click="toDetails">查看1号商品的详情</button>
        <router-link to="/details/2">查看2号商品的详情</router-link>
    </main>
</template>
<script>
export default {
    methods:{
        toDetails(){
            this.$router.push("/details/1")
        }
    }
    
}
</script>
<style scoped>

</style>