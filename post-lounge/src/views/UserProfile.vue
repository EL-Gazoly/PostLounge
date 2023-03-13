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
        <div class="userProfil-card-profile-image">
                    <img :src="user.image" alt="image">
        </div>
        <div class="userProfil-card">
            <div class="userProfil-card-background">
                <span>Being a robot is Hard :( </span>
            </div>
            
                
                <div class="userProfil-card-profile-name">
                    <h1>{{ user.firstName }}  {{ user.lastName }}</h1>
                    <h2>{{ jobTitle }}  at {{ companyName }}</h2>
                </div>

                <div class="userProfil-card-participants">
                <div class="numbr-of-friends-container">
                        <div class="number">
                            <p>{{ user.age}}</p>
                        </div>
                        <div class="participants">
                            Participants
                        </div>
                </div> 
            </div>

            </div> 
            <div v-if = 'posts.length === 0' class="no-posts">
                <span >
                We are sorry, but {{ gender }} {{ user.lastName }} has no posts yet.
            </span>
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
            companyName : '',
            jobTitle : '',
            loading: false,
            gender: '',
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
            this.companyName = this.user.company.name;
            this.jobTitle = this.user.company.title;
            this.gender = this.user.gender === 'male' ? 'MR' : 'MRS';
            
            this.loading = false;
        }));

  
}, 

watch:{
    $route(to, from) {
        // Reload the page when moving between user routes
        if (to.path !== from.path) {
            location.reload();
        }
    }
}


}


</script>

<style>

.userProfil-card {
    width: 855px;
    height: 273px;

    background: #E2FDFF;

    border-radius: 10px;

    display: flex;
    flex-direction: column;

    margin-top: 44px;

}
.userProfil-card-background{
    width: 855px;
    height: 174px;

    background: #1C1919;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.userProfil-card-background span{
    width: 424px;
    height: 54px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;

    display: flex;
    align-items: center;

    color: #FFF9F9;
}

.userProfil-card-profile-name{
    width: 310px;
    height: 43px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: start;

    margin-left: 208px;
}
.userProfil-card-profile-name h1{
    width: 225px;
    height: 23px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    display: flex;
    align-items: center;

    color: #000000;

    margin: 0px;

}

.userProfil-card-profile-name h2{
    width: 365px;
    height: 20px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #ADADB5;

    margin: 0px;
}

.userProfil-card-participants{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    margin-right: 68px;
    margin-bottom: 19px;
}

.userProfil-card-profile-image{
    width: 143.95px;
    height: 144px;

    

    position: relative;

    top: 13%;
    left: 8%;
    
}

.userProfil-card-profile-image img{
    width: 100%;
    height: 144px;

    border-radius: 50%;

    position: absolute;
    top: 0%;
    left: 0%;
    
}
.no-posts{
    width: 100%;
    height: 1041%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #000;

}
</style>