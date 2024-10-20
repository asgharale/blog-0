<template>
<header-component/>

<div class="home">
    contact page
</div>

<footer-component/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default{
    name: "ContactView",
    components:{
        HeaderComponent,
        FooterComponent,
    }
}
</script>

<style lang="scss">
</style>