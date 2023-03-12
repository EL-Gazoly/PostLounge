<template>
     <div v-if="loading">
        <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
    <div v-else class="landing-page-container">

    <Leftnav />

    <div class="landing-page-middel">
        <div class="userProfil-card">
            <div class="userProfil-card-background">

            </div>
            <div class="userProfil-card-profile">
                <div class="userProfil-card-profile-image">
                    <img src="@/assets/photo-1525134479668-1bee5c7c6845.jpeg" alt="image">
                </div>
                <div class="userProfil-card-profile-name">
                    <h1>Sheldon coper</h1>
                    <h2>software engineer  at google</h2>
                </div>
            </div> 

            <div class="userProfil-card-participants">
                <div class="numbr-of-friends-container">
                        <div class="number">
                            <p>65</p>
                        </div>
                        <div class="participants">
                            Participants
                        </div>
                    </div>
                
            </div>
        </div>

        <div v-for='post in posts' :key="post.id" >
           
            <postCard 
            :avtar="user.image" 
            :title="post.title" 
            :body="post.body" 
            :firstname="user.firstName" 
            :lastname="user.lastName" 
            :job="user.company.title" 
            :company="user.company.name" 
            :reactions="post.reactions" 
            :participants="user.age" 
            :userId="user.id"
            />

        </div>
    </div>

    <Rightnav />
    </div>
</template>

<script>
import postCard from '@/components/postCard.vue'
import Leftnav from '@/components/Leftnav.vue'
import Rightnav from '@/components/Rightnav.vue'
import axios from 'axios'
export default {
    name: 'UserProfile',

    data() {
        return {
            posts: [],
            user: [],
            loading: false,
        }
    },
    
    components: {
        Leftnav,
        Rightnav,
        postCard,
    },
      beforeRouteUpdate(to, from, next) {
        // Reload the page when moving between user routes
        if (to.path !== from.path) {
            next(() => {
                location.reload();
            })
        
        } else {
            next();
        }
    },

    mounted() {
        this.loading = true;
        const userId = this.$route.params.id;

        // Fetch both posts and users data from API endpoint
        axios.all([
            axios.get('https://dummyjson.com/posts'),
            axios.get(`https://dummyjson.com/users/${userId}`)  ,
        ]).then(axios.spread((postsRes, userRes) => {
            // Set posts and users data
            this.posts = postsRes.data.posts.filter(post => post.userId == userId);
            this.user = userRes.data;
            
            this.loading = false;
        }));

  
}, 


}


</script>

<style>
</style>