<template>
    <div v-if="loading">
        <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
    <div v-else class="landing-page-container">

  <div class="landing-page-left">
    <div class="landing-page-left-card">
        <a class="landing-page-left-card-top-side" href="/">
             <img src="../assets/hybrowlabs.svg" alt="hybrowlabs" class="logo"/>
        </a>
        
        <div class="landing-page-left-card-middel-side">
            <myprofileVue profileHandel="Adham ElGazoly" :imageHandel="require('@/assets/mypic.svg')" />
        </div>

        <div class="landing-page-left-card-bottom-side">
            <div class="landing-page-left-card-bottom-side-title">
                <span>Profiles</span>
            </div>
            <div class="landing-page-left-card-bottom-side-content">
                <myprofileVue profileHandel="Adham El-Gazoly" :imageHandel="require('@/assets/linkedin.svg')"  path='https://www.linkedin.com/in/adham-el-gazoly-075385190'/>
                <myprofileVue profileHandel="El-Gazoly" :imageHandel="require('@/assets/github.svg')" style="text-align: start;" path="https://github.com/EL-Gazoly" />
                <myprofileVue profileHandel="Adham El-Gazoly" :imageHandel="require('@/assets/resume.svg')" path="https://app.flowcv.com/resume-feedback/MMVSrPpbLn9GgYiRceIg5"/>
            </div>
            
        </div>
     
    </div>
   
    </div>

    <div class="landing-page-middel">
        <div v-for='post in posts' :key="post.id" >
           
            <postCard :avtar="post.user.image" :title="post.title" :body="post.body" :firstname="post.user.firstName" :lastname="post.user.lastName" :job="post.user.company.title" :company="post.user.company.name" :reactions="post.reactions" :participants="post.user.age"/>

        </div>
            
     
           
         
            
    </div>

    <div class="landing-page-right">
        <div class="landing-page-right-card">
                <div class="conncet">
                    <div class="connect-title">
                        Wanna connnect?
                    </div>

                    <div class="hybrowlabs">
                        <div class="hybrowlabs-icon">
                            <img src="../assets/hybrowlabsIcon.svg" alt="hybrowlabs icon">
                        </div>
                        <div class="hybrowlabs-name">
                            Hybrowlabs
                        </div>
                    </div>
                    
                  
                </div>

                <div class="friends-list">
                        <div class="firends-list-title">
                            Friends
                        </div>
                        <div class="firends-list-content" v-for="user in users" :key="user.id">
                            
                            <firendProfile :avtar="user.image" :firstname="user.firstName" :lastname="user.lastName" />
                          
                            

                        </div>
                        
                    </div>
        </div>
        

    </div>



    </div>
  





</template>

<script>
import myprofileVue from '@/components/myprofile.vue'
import postCard from '@/components/postCard.vue'
import firendProfile from '@/components/firendProfile.vue'
import axios from 'axios'

export default {
    name: 'LandingPage',

    components: {
        myprofileVue,
        postCard,
        firendProfile
    },
    data() {
        return {  
            posts: [],
            users: [],
            loading: false,
        }
    },

    mounted(){
        this.loading = true;
        axios.get(`https://dummyjson.com/users?skip=5&limit=10`)
        .then(res => {
            this.users = res.data.users;
            console.log(this.users);
            
        })
        axios.get(`https://dummyjson.com/posts`)
        .then(res => {
            this.posts = res.data.posts;
            console.log(this.posts);
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

    .landing-page-left,
    .landing-page-right{
        height: 100vh;
        width: 305px;

        background-color: #F6F9FB;

        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .landing-page-middel{
        height: 100vh;
        width: 822.5px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    } 

    
    .landing-page-left-card{
        width: 175px;
        height: 311px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;


        margin-top: 40px;
    }  
    .logo{
        width: 174px;
        height: 26px;

    }
    .landing-page-left-card-bottom-side{
        width: 166px;
        height: 177px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .landing-page-left-card-bottom-side-title{
        width: 44px;
        height: 18px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;


        color: #92929D;
    }

    .landing-page-left-card-bottom-side-content{
        width: 150px;
        height: 145px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .landing-page-right-card{
        width: 212px;
        height: 100vh;

        overflow-y: scroll;
        
        text-align: start;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        margin-top: 40px;

    }
    .conncet{
        width: 131px;
        height: 83px;    

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-bottom: 24px;
    }
    .connect-title,
    .firends-list-title{
        width: 131px;
        height: 21px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        

        color: #92929D;
    }

    .firends-list-title{
        margin-bottom: 10px;
    }

    .hybrowlabs{
        width: 131px;
        height: 34px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }

    .hybrowlabs-icon img{
        width: 40px;
        height: 39px;
    }

    .hybrowlabs-name{
        width: 83px;
        height: 18px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;


        display: flex;
        align-items: center;

        color: #333340;
    }
    .spinner {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    }

    .spinner .dot1,
    .spinner .dot2 {
        position: absolute;
        top: 0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #333;
        animation: sk-bounce 2s infinite ease-in-out;
    }

    .spinner .dot2 {
        top: auto;
        bottom: 0;
        animation-delay: -1s;
    }

    @keyframes sk-bounce {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }


</style>