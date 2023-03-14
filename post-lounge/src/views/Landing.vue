<template>
    <div v-if="loading">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
    <div v-else>
      <Header @toggle-left-nav="toggleLeftNav" @toggle-right-nav="toggleRightNav" />
  
      <div class="landing-page-container">
        <Leftnav :is-open="isLeftNavOpen" />
  
        <div class="landing-page-middel">
          <div v-for="post in posts" :key="post.id">
            <postCard
              :avtar="post.user.image" 
              :title="post.title"
              :body="post.body"
              :firstname="post.user.firstName"
              :lastname="post.user.lastName"
              :job="post.user.company.title"
              :company="post.user.company.name"
              :reactions="post.reactions"
              :participants="post.user.age"
              :userId="post.user.id"
            />
          </div>
        </div>
  
        <Rightnav :is-open="isRightNavOpen" />
      </div>
    </div>
  </template>
  
  <script>
  import {mapActions } from "vuex";
  import postCard from "@/components/postCard.vue";
  import Leftnav from "@/components/Leftnav.vue";
  import Rightnav from "@/components/Rightnav.vue";
  import Header from "@/components/header.vue";
  
  export default {
    name: "LandingPage",
  
    components: {
      Leftnav,
      Rightnav,
      postCard,
      Header,
    },
  
    computed: {

      isRightNavOpen() {
        return this.$store.state.isRightNavOpen;
      },
      isLeftNavOpen() {
        return this.$store.state.isLeftNavOpen;
      },
      posts () {
        return this.$store.getters.getUserById;
      },
      loading() {
        return this.$store.state.loading;
      },
    },
  
    methods: {
      ...mapActions(["fetchPosts", "toggleRightNav", "toggleLeftNav"]),
      toggleRightNav(){
        this.$store.commit('toggleRightNav');
      
      },
      toggleLeftNav(){
        this.$store.commit('toggleLeftNav');
      },
      resetProfile() {
        this.$store.dispatch('resetUser')
      }
    },
  
    mounted() {
      this.fetchPosts();
    },
    beforeUnmount(){
      this.resetProfile();
      
    }
   
  };
  
  </script>
  

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
html{
    font-family: 'Poppins', sans-serif;
}
    .landing-page-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        

        width: 100%;
        height: 100vh;
    }


    .landing-page-middel{
        height: 100vh;
        width: 822.5px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    } 

</style>