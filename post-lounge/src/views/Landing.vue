<template>
    <div v-if="loading">
        <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
    <div  v-else >
    <Header @toggle-left-nav="toggleLeftNav" @toggle-right-nav="toggleRightNav"/>
    
    <div class="landing-page-container">
   
    <Leftnav :is-open="isLeftNavOpen" />

    <div class="landing-page-middel">
        <div v-for='post in posts' :key="post.id" >
           
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

    <Rightnav :is-open="isRightNavOpen"/>


    </div>
</div>
  





</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import postCard from '@/components/postCard.vue'
import Leftnav from '@/components/Leftnav.vue'
import Rightnav from '@/components/Rightnav.vue'
import Header from '@/components/header.vue'
import axios from 'axios'

export default {
    name: 'LandingPage',

    components: {
        Leftnav,
        Rightnav,
        postCard,
        Header,
    },
    data() {
        return {  
            posts: [],
            users: [],
            loading: false,
            isLeftNavOpen: false,   
            isRightNavOpen: false,

        }
    },

    mounted(){
        this.loading = true;
        
        axios.get(`https://dummyjson.com/posts`)
        .then(res => {
            this.posts = res.data.posts;
            this.mapUserPosts();
            this.loading = false;

        })
        .catch(err => {
            console.log(err);
            this.loading = false;
        })
        console.log(this.posts);

    },
    methods:{
        mapUserPosts() {
      this.posts.forEach(post => {
        axios.get(`https://dummyjson.com/users/${post.userId}`)
          .then(response => {
            post.user = response.data
          })
          .catch(error => {
            console.log(error)
          })
      })
    },

    toggleLeftNav(){
        this.isLeftNavOpen = !this.isLeftNavOpen;
    },
    toggleRightNav(){
        this.isRightNavOpen = !this.isRightNavOpen ;
    },
    }


  
}
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