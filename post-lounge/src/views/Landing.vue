<template>
    <div class="landing-page-container">

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
            <postCard />
            <postCard />
            <postCard />
            <postCard />
            <postCard />
            <postCard />
            <postCard />
            <postCard />
            
    </div>

    <div class="landing-page-right">

    </div>



    </div>
  





</template>

<script>
import myprofileVue from '@/components/myprofile.vue'
import postCard from '@/components/postCard.vue'
export default {
    name: 'LandingPage',

    components: {
        myprofileVue,
        postCard
    },
    data() {
        return {}
    },


  
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
    ::-webkit-scrollbar {
  display: none;
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
</style>