<template>
    <div class="landing-page-right" :class="{ 'landing-page-right-open': !isOpen }">
        <div class="landing-page-right-card">
                <div class="conncet">
                    <div class="connect-title">
                        Get in touch?
                    </div>

                    <a href="https://hybrowlabs.com/contact" target="blank" class="hybrowlabs">
                        <div class="hybrowlabs-icon">
                            <img src="../assets/hybrowlabsIcon.svg" alt="hybrowlabs icon">
                        </div>
                        <div class="hybrowlabs-name">
                            Hybrowlabs
                        </div>
                    </a>
                    
                  
                </div>

                <div class="friends-list">
                        <div class="firends-list-title">
                            Friends
                        </div>
                        <div class="firends-list-content" v-for="user in users" :key="user.id">

                            <router-link :to="{ path: '/user/' + user.id}">
                                <firendProfile :avtar="user.image" :firstname="user.firstName" :lastname="user.lastName" />
                            </router-link>

                          
                            

                        </div>
                        
                    </div>
        </div>

    </div>
</template>

<script>
import firendProfile from '@/components/firendProfile.vue'
import { mapActions } from "vuex";

export default {
    name: 'Rightnav',
    components: {
        firendProfile
    },
    props: {
    isOpen: {
        type: Boolean,
        default: false,
    }
    },
   computed: {
    users () {
        return this.$store.state.users;
      },
   },
       methods :{
        ...mapActions(["fetchUsers"]),
       },
        mounted() {
         this.fetchUsers();
        }
    
}


</script>

<style>
.landing-page-right{
        height: 100vh;
        width: 305px;

        background-color: #F6F9FB;

        display: flex;
        flex-direction: column;
        align-items: center;
        
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

    @media (min-width: 250px) and (max-width : 949px){

    .landing-page-right-open {
        position: absolute;
        top: 20px;
        left: 20px;
        cursor: pointer;
        z-index: 999;

        display: none;
    }
    .landing-page-right-card{
       
        width: 238px;
        margin-left: 36px;

    }
   
}


  
</style>