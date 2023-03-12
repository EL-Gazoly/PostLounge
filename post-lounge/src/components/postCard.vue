<template>
    <div class="post-card-container">
        <div class="post-card-left-side">
            <img :src="avtar" alt="usr pic">
        </div>
        <div class="post-card-right-side">
            <div class="post-card-right-side-first-row">
                <div class="like-button" :class="{liked: clicked}">
                    <img src="../assets/reactButton.svg" alt="react button" @click="updatebutton(postId)">
                </div>
                <div class="post-title">
                    {{title}}
                </div>
            </div>

            <div class="post-card-right-side-second-row">
                <p>{{ body }}</p>
            </div>

            <div class="post-card-right-side-third-row">

                <div class="user-profile-img">
                    <img :src="avtar" alt="usr pic">
                </div>
                <div class="user-profile-info">
                    <div class="usre-profile-name">
                        {{ firstname }} {{ lastname }}
                    </div>
                    <div class="user-profile-job">
                        {{ job }} at {{ company }}
                    </div>

                </div>
            </div>

            <div class="post-card-right-side-fourth-row">

                
                    <div class="numbr-of-friends-container">
                        <div class="number">
                            <p>{{ participants }}</p>
                        </div>
                        <div class="participants">
                            Participants
                        </div>
                    </div>
                    <div class="number-of-like">
                        <img src="../assets/fire.svg" alt="fire icon">
                        <span>{{ reactions }}</span>
                    </div>
                

            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    
    name: 'PostCard',
    props: {
        avtar: {
            type: String,
            
        },
        title: {
            type: String,
            
        },
        body: {
            type: String,
            
        
        },
        firstname: {
            type: String,
            
        },
        lastname: {
            type: String,
            
        },
        job: {
            type: String,
            
        },
        company: {
            type: String,
            
        },
        participants :{
            type: Number,
        },
        reactions: {
            type: Number,
            
        },
        postId: {
            type: Number,
        },

    },
    data(){
        return{
            reactions: 0,
            clicked: false,
        }
    },
    methods: {
        updatebutton(postId){
            if (this.clicked ==false){
                this.reactions = this.reactions + 1
                this.clicked = true
            }
            else{
                this.reactions = this.reactions - 1
                this.clicked = false
            }
            
            this.$emit('update-reactions', this.reactions)
  
        }
    }
    
}
</script>

<style>

.post-card-container{
    width: 100%;
    height: 419px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: row;
    
    align-items: center; 


    margin-top: 40px; 
}
.post-card-left-side{
    width: 355px;
    height: 390px;

    margin-right: 9px ;
}
.post-card-left-side img{
    width: 328px;
    height: 390px;
    border-radius: 17px;
}
.post-card-right-side{
    width: 452px;
    height: 374px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
}
        
.post-card-right-side-first-row{
    width: 100%;
    height: 92px;

    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.post-card-right-side-first-row img{
    width: 75px;
    height: 86px;
    margin-right: 9px ;

    cursor: pointer;
}

.post-card-right-side-first-row .post-title{
    width: 280px;
    height: 76px;

    overflow-y: hidden;

    text-align: start;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;

    color: #000000;
}
.post-card-right-side-second-row{
    width: 100%;
    height: 74px;

    border-bottom: 3px dashed #F5F5F5;
}

.post-card-right-side-second-row p {
    width: 100%;
    height: 40px    ;


    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 12px;
    display: flex;
    align-items: center;

    color: #A2A2A6;
}
.post-card-right-side-second-row:hover{
    overflow-y: auto;
}
.user-profile-img img{
    width: 39.27px;
    height: 38px;

    border-radius: 100%;

    margin-right: 9px;
}
.post-card-right-side-third-row{
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
}
.user-profile-info{
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;    

    text-align: start;
}

.usre-profile-name{

    height: 18px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #000000;
}

.user-profile-job{
    height: 17px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #ADADB5;
}

.numbr-of-friends-container{
    width: 111px;
    height: 30px;

    background: #043097;
    border-radius: 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.number{
    width: 24px;
    height: 24px;

    background: #1BF0F2;

    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 1px;
    margin-right: 3px;
}

.number p{
    width: 12px;
    height: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;

    color: #033C9B;

}
.participants{
    width: 66px;
    height: 15px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

}
.post-card-right-side-fourth-row{
    width: 86%;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.number-of-like{
    width: 51px;
    height: 28px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.number-of-like span{
    width: 17px;
    height: 22px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #000000;
}

::-webkit-scrollbar {
            display: none;
}   

.liked img{
    transform: rotate(180deg); 
}

</style>