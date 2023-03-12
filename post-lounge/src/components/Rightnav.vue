<template>
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
</template>

<script>
import firendProfile from '@/components/firendProfile.vue'
import axios from 'axios'
export default {
    name: 'Rightnav',
    components: {
        firendProfile
    },
    data(){
        return {
            users: []
        }
    },
    mounted()  {
        axios.get(`https://dummyjson.com/users?limit=10`)
        .then(res => {
            this.users = res.data.users;
            
        })
    }
    
}
</script>

<style>
</style>