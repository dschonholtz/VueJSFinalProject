<template>
    <div>
        <br>
        <app-header></app-header>
        <transition name="slide" type="animation" appear mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from './Components/Header.vue';
    import Portfolio from './Components/Portfolio.vue';
    export default {
        data() {
            return {
                componentId: 'appPortfolio'
            }
        },
        components: {
            appHeader: Header,
            appPortfolio: Portfolio,
        }
    }
</script>

<style>
    .slide-enter {
        opacity: 0;
        /*transform: translateY(20px);*/
    }

    .slide-enter-active {
        animation: slide-in .3s ease-in-out forwards;
        transition: opacity .3s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out .3s ease-in-out forwards;
        transition: opacity .3s;
        opacity: 0;
        position: absolute;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
