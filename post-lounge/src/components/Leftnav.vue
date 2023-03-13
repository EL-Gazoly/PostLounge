<template>
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
</template>

<script>
import myprofileVue from '@/components/myprofile.vue'
export default {
    name: 'Leftnav',
    components: {
        myprofileVue
    }
}
</script>

<style>

.landing-page-left{
    height: 100vh;
    width: 305px;

    background-color: #F6F9FB;

    display: flex;
    flex-direction: column;
    align-items: center;
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

    @media (min-width: 550px) and (max-width : 949px){

    
    .landing-page-left{
        display: none;
    }
}
</style>