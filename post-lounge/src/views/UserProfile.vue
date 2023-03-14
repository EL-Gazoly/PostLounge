<template>
     <div v-if="loading">
        <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
    <div v-else>
    <Header @toggle-left-nav="toggleLeftNav" @toggle-right-nav="toggleRightNav"/>
        <div  class="landing-page-container">

            <Leftnav :is-open="isLeftNavOpen" />

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
                        We are sorry, but {{ user.gender === 'male' ? 'MR.' : 'MRS.' }} {{ user.lastName }} has no posts yet.
                    </span>
                    </div>
                    
                <div v-for='post in posts' :key="post.id" >
                
                    <postCard :class="{ 'post-card': true, 'post-card-one-post': posts.length === 1}"
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

            <Rightnav :is-open="isRightNavOpen"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import postCard from "@/components/postCard.vue";
import Leftnav from "@/components/Leftnav.vue";
import Rightnav from "@/components/Rightnav.vue";
import Header from "@/components/header.vue";

export default {
  name: "UserProfile",
  components: {
    Leftnav,
    Rightnav,
    postCard,
    Header,
  },
  data() {
    return {
      isLeftNavOpen: false,
      isRightNavOpen: false,
    }
  },
  computed: {
      ...mapGetters(["getUserById"]),
     posts () {
        return this.$store.getters.getUserById;
      },
      user() {
        return this.$store.state.user
      },
      loading() {
        return this.$store.state.loading;

      },
      companyName() {
        return this.$store.state.companyName;
      },
      jobTitle(){
        return this.$store.state.jobTitle
      },
      isRightNavOpen() {
        return this.$store.state.isRightNavOpen;
      },
      isLeftNavOpen() {
        return this.$store.state.isLeftNavOpen;
      }

    },
  
    methods: {
      ...mapActions(["fetchPosts", "fetchUser", "toggleRightNav", "toggleLeftNav"]),
    toggleRightNav(){
        this.$store.commit('toggleRightNav');
      
      },
      toggleLeftNav(){
        this.$store.commit('toggleLeftNav');
      }
    
    },
  
    mounted() {
      this.fetchPosts(Number(this.$route.params.id));
      this.fetchUser(this.$route.params.id);
    },
    beforeRouteEnter(to, from, next) {
    next(vm => {
        // Reload the page by navigating to the current route
        vm.$router.replace({
        path: to.path,
        query: to.query,
        params: to.params
        })
    })  
},
    watch: {
      $route(to, from) {
        location.reload();
      },
    }
};
</script>



<style>

.userProfil-card {
    width: 100%;
    height: 273px;

    background: #E2FDFF;

    border-radius: 10px;

    display: flex;
    flex-direction: column;

    margin-top: 44px;

}
.userProfil-card-background{
    width: 100%;
    height: 174px;

    background: #1C1919;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.userProfil-card-background span{
    width: 52.5%;
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
    width: 36%;
    height: 43px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: start;

    margin-left: 208px;
}
.userProfil-card-profile-name h1{
    width: 72.6%;
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
    width: 135%;
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
.post-card-one-post{
    margin-bottom: 44px;
    margin-bottom: 172px;
}

@media (min-width: 1432px) and (max-width: 1610px){
    .userProfil-card{
        width: 89%;
        margin-left : 5.5%;
    }
    .userProfil-card-background span{
        font-size: 33px;
    }
    .userProfil-card-profile-name h2{
        width: 129%;
    }

}
@media (min-width: 1276px) and (max-width : 1431px) {
    .userProfil-card{
        width: 85%;
        margin-left: 7.5%;
    }
    .userProfil-card-background span{
        font-size: 26px;
    }
    .userProfil-card-profile-name h1{
        font-size: 12px;
    }

    .userProfil-card-profile-name h2{
        width: 129%;
        font-size: 11px;
    }
    .userProfil-card-profile-image{
        width: 138.95px;
        height: 53px;
        position: relative;
        top: 12%;
        left: 20%;
    }
    .userProfil-card-profile-image img{
        height: 130px;
    }
}
@media (min-width: 950px) and (max-width : 1275px){
    .userProfil-card{
        width: 75%;
        margin-left: 13.5%;
    }
    .userProfil-card-background span{
        font-size: 21px;
        width: 62%;
    }
    .userProfil-card-profile-name {
        margin-left: 143px;
    }
    .userProfil-card-profile-name h1{
        font-size: 9px;
    }

    .userProfil-card-profile-name h2{
        width: 127%;
        font-size: 8px;
    }
    .userProfil-card-profile-image{
        width: 138.95px;
        height: 53px;
        position: relative;
        top: 11%;
        left: 20%;
    }
    .userProfil-card-profile-image img{
        height: 130px;
    }
}
@media (min-width: 761px) and (max-width : 949px){
    .userProfil-card{
        width: 428px;
        margin-left: 21%;
        margin-top: -37px;
        height: 225px;
    }
    .userProfil-card-background span{
        font-size: 21px;
        width: 62%;
    }
    .userProfil-card-profile-name {
        margin-left: 143px;
    }
    .userProfil-card-profile-name h1{
        font-size: 9px;
    }

    .userProfil-card-profile-name h2{
        width: 127%;
        font-size: 8px;
    }
    .userProfil-card-profile-image{
        width: 116.95px;
        height: 53px;
        top: 7.5%;
        left: 27%;
    }
    .userProfil-card-profile-image img{
        height: 110px;
    }
}
@media (min-width: 550px) and (max-width : 760px){
    .userProfil-card{
        width: 428px;
        margin-left: 13%;
        margin-top: -37px;
        height: 225px;
    }
    .userProfil-card-background span{
        font-size: 21px;
        width: 62%;
    }
    .userProfil-card-profile-name {
        margin-left: 143px;
    }
    .userProfil-card-profile-name h1{
        font-size: 9px;
    }

    .userProfil-card-profile-name h2{
        width: 127%;
        font-size: 8px;
    }
    .userProfil-card-profile-image{
        width: 116.95px;
        height: 53px;
        top: 7.5%;
        left: 23%;
    }
    .userProfil-card-profile-image img{
        height: 110px;
    }
}
@media (min-width: 401px) and (max-width: 549px){
    .userProfil-card{
        width: 322px;
        margin-left: 16%;
        margin-top: -37px;
        height: 225px;  
    }
    .userProfil-card-background span{
        font-size: 17px;
        width: 62%;
    }
    .userProfil-card-profile-name {
        margin-left: 112px;
    }
    .userProfil-card-profile-name h1{
        font-size: 8px;
    }

    .userProfil-card-profile-name h2{
        width: 171%;
        font-size: 7px;
    }
    .userProfil-card-profile-image{
        width: 116.95px;
        height: 53px;
        top: 7.5%;
        left: 23%;
    }
    .userProfil-card-profile-image img{
        height: 110px;
    }
}
@media (max-width: 400px){
    .userProfil-card{
        width: 261px;
        margin-left: 13%;
        margin-top: -37px;
        height: 225px;  
    }
    .userProfil-card-background span{
        font-size: 14px;
        width: 62%;
    }
    .userProfil-card-profile-name {
        margin-left: 112px;
    }
    .userProfil-card-profile-name h1{
        font-size: 7px;
    }

    .userProfil-card-profile-name h2{
        width: 158%;
        font-size: 6px;
    }
    .userProfil-card-profile-image{
        width: 104.95px;
        height: 52px;
        top: 8%;
        left: 20%;

    }
    .userProfil-card-profile-image img{
        height: 110px;
    }
}
</style>