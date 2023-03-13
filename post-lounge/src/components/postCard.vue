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
            <router-link :to="{ path: '/user/' + userId}"> 
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
            </router-link>

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
        userId: {
            type: Number,
        }

    },
    data(){
        return{
            reactions: this.reactions,
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
                this.reactions = this.reactions
                this.clicked = false
            }
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

@media (min-width: 1432px) and (max-width: 1610px){
    .post-card-container{
        width: 89%;
        margin-left : 5.5%;
    }
    .post-card-left-side{
        width:  270px;
    
    }
    .post-card-left-side img{
        width: 282px;
    }

}
@media (min-width: 1276px) and (max-width : 1431px){
    .post-card-container{
        width: 85%;
        margin-left: 7.5%;
    }
    .post-card-left-side{
        width:  215px;
    
    }
    .post-card-left-side img{
        width: 258px;
    }

    .landing-page-left,
    .landing-page-right{
        width: 245px;
    }
    .post-card-right-side-second-row {
        width: 89%;
    }
    .landing-page-right-card {
        width: 167px;
    }
}

@media (min-width: 950px) and (max-width : 1275px){
    .post-card-container{
        width: 75%;
        margin-left: 13.5%;
    }
    .post-card-left-side{
        width: 122px;
    
    }
    .post-card-left-side img{
        width: 154px;
    }
    .post-card-right-side{
        width: 276px;
    }
    .post-card-right-side-first-row img {
        width: 51px;
    }
    .post-card-right-side-first-row .post-title {
        font-size: 15px;
    } 
    .landing-page-left,
    .landing-page-right{
        display: none;
        width: 245px;
    }
    .post-card-right-side-second-row {
        width: 78%;
    }
    
    .post-card-right-side-second-row p {
        width: 122%;
        font-size: 11px;

    }
    .landing-page-right-card {
        width: 167px;
    }
    .user-profile-info {
        width: 79%;
    }
    .usre-profile-name{
        font-size: 10px;
    }
    .user-profile-job {
        font-size: 8px;
    }

    .post-card-right-side-fourth-row{
        width: 87%;
    }

    .numbr-of-friends-container {
        width: 93px;
        border-radius: 11px;
    }
    .number {
        width: 23px;
    }
    .number p {
        font-size: 10px;
    }
    .participants {
        font-size: 10px;
    }
    .profile-container span {
        width: 116px;
    }

}
@media (min-width: 761px) and (max-width : 949px){
    .post-card-container{
        width: 428px;
        height: 184.13px;
        margin-left: 21%;
        
    }
    .post-card-left-side{
        width: 142.88px;
        height: 166.1px;
    
    }
    .post-card-left-side img{
        width: 117.88px;
        height: 166.1px;
        
    }
    .post-card-right-side{
        width: 259.59px;
        height: 155px;
    
    }
    .post-card-right-side-first-row img {
        width: 40.55px;
        height: 39px;

        margin-right: 1px;
    }
    .post-card-right-side-first-row .post-title {
        width: 198.06px;
        height: 35.37px;
        
        font-size: 12px;
        line-height: 13px;

    } 
    .landing-page-left,
    .landing-page-right{
        display: none;
        width: 245px;
    }
    .post-card-right-side-second-row {
        width: 260px;
        height: 38px;

        overflow: auto;
        
    }
    
    .post-card-right-side-second-row p {
        width: 247.55px;
        height: 34.48px;

        font-size: 7px;
        line-height: 7px;

    }
    .landing-page-right-card {
        width: 139.82px;
       

    }
    .user-profile-info {
        width: 126.31px;
        height: 22.84px;
      
    }
    .usre-profile-name{
        width: 109.21px;
        height: 11px;
        
        line-height: 15px;
        font-size: 8px;
    }
    .user-profile-job {
        width: 162.31px;
        height: 9.91px;
        line-height: 8px;
        font-size: 6px;
    }

    .post-card-right-side-fourth-row{
        width: 87%;
    }

    .numbr-of-friends-container {
        width: 67.87px;
        height: 18px;
        border-radius: 11px;
    }
    .number {
        width: 14.3px;
        height: 13.91px;
        
    }
    .number p {
        width: 6.9px;
        height: 9px;
        font-size: 6px;
        line-height: 6px;
    }
    .participants {
        width: 36.7px;
        height: 8px;
        font-size: 7px;
        line-height: 9px;
    }
    .profile-container span {
        width: 116px;
    }
    .user-profile-img img {
        width: 32px;
        height: 22px;
    }
    .number-of-like {
        width: 19.94px;
        height: 11.89px;
    }
    .number-of-like img {
        width: 21.25px;
        height: 11.89px;
    }

    .number-of-like span{
        width: 8.94px;
        height: 11.89px;

        font-size: 10px;
        line-height: 12px;
    }
}

@media (min-width: 550px) and (max-width : 760px){
    
    .post-card-container{
        width: 428px;
        height: 184.13px;
        margin-left: 13%;
        
    }
    .post-card-left-side{
        width: 142.88px;
        height: 166.1px;
    
    }
    .post-card-left-side img{
        width: 117.88px;
        height: 166.1px;
        
    }
    .post-card-right-side{
        width: 259.59px;
        height: 155px;
    
    }
    .post-card-right-side-first-row img {
        width: 40.55px;
        height: 39px;

        margin-right: 1px;
    }
    .post-card-right-side-first-row .post-title {
        width: 198.06px;
        height: 35.37px;
        
        font-size: 12px;
        line-height: 13px;

    } 
    .landing-page-left,
    .landing-page-right{
        display: none;
        width: 245px;
    }
    .post-card-right-side-second-row {
        width: 260px;
        height: 38px;

        overflow: auto;
        
    }
    
    .post-card-right-side-second-row p {
        width: 247.55px;
        height: 34.48px;

        font-size: 7px;
        line-height: 7px;

    }
    .landing-page-right-card {
        width: 139.82px;
       

    }
    .user-profile-info {
        width: 126.31px;
        height: 22.84px;
      
    }
    .usre-profile-name{
        width: 109.21px;
        height: 11px;
        
        line-height: 15px;
        font-size: 8px;
    }
    .user-profile-job {
        width: 162.31px;
        height: 9.91px;
        line-height: 8px;
        font-size: 6px;
    }

    .post-card-right-side-fourth-row{
        width: 87%;
    }

    .numbr-of-friends-container {
        width: 67.87px;
        height: 18px;
        border-radius: 11px;
    }
    .number {
        width: 14.3px;
        height: 13.91px;
        
    }
    .number p {
        width: 6.9px;
        height: 9px;
        font-size: 6px;
        line-height: 6px;
    }
    .participants {
        width: 36.7px;
        height: 8px;
        font-size: 7px;
        line-height: 9px;
    }
    .profile-container span {
        width: 116px;
    }
    .user-profile-img img {
        width: 32px;
        height: 22px;
    }
    .number-of-like {
        width: 19.94px;
        height: 11.89px;
    }
    .number-of-like img {
        width: 21.25px;
        height: 11.89px;
    }

    .number-of-like span{
        width: 8.94px;
        height: 11.89px;

        font-size: 10px;
        line-height: 12px;
    }
}

@media (min-width: 401px) and (max-width: 549px){
    .post-card-container{
        width: 322px;
        height: 184.13px;
        margin-left: 16%;
        
    }
    .post-card-left-side{
        width: 105.88px;
        height: 166.1px;
    
    }
    .post-card-left-side img{
        width: 117.88px;
        height: 166.1px;
        
    }
    .post-card-right-side{
        width: 190.59px;
        height: 155px;
    
    }
    .post-card-right-side-first-row img {
        width: 40.55px;
        height: 39px;

        margin-right: 1px;
    }
    .post-card-right-side-first-row .post-title {
        width: 111.06px;
        height: 35.37px;

        font-size: 9px;
        line-height: 10px;

    } 
    .landing-page-left,
    .landing-page-right{
        display: none;
        width: 245px;
    }
    .post-card-right-side-second-row {
        width: 197px;
        height: 38px;

        overflow: auto;
        
    }
    
    .post-card-right-side-second-row p {
        width: 181.55px;
        height: 34.48px;

        font-size: 7px;
        line-height: 7px;

    }
    .landing-page-right-card {
        width: 139.82px;
       

    }
    .user-profile-info {
        width: 126.31px;
        height: 22.84px;
      
    }
    .usre-profile-name{
        width: 109.21px;
        height: 11px;
        
        line-height: 15px;
        font-size: 8px;
    }
    .user-profile-job {
        width: 162.31px;
        height: 9.91px;
        line-height: 8px;
        font-size: 6px;
    }

    .post-card-right-side-fourth-row{
        width: 87%;
    }

    .numbr-of-friends-container {
        width: 67.87px;
        height: 18px;
        border-radius: 11px;
    }
    .number {
        width: 14.3px;
        height: 13.91px;
        
    }
    .number p {
        width: 6.9px;
        height: 9px;
        font-size: 6px;
        line-height: 6px;
    }
    .participants {
        width: 36.7px;
        height: 8px;
        font-size: 7px;
        line-height: 9px;
    }
    .profile-container span {
        width: 116px;
    }
    .user-profile-img img {
        width: 32px;
        height: 22px;
    }
    .number-of-like {
        width: 19.94px;
        height: 11.89px;
    }
    .number-of-like img {
        width: 21.25px;
        height: 11.89px;
    }

    .number-of-like span{
        width: 8.94px;
        height: 11.89px;

        font-size: 10px;
        line-height: 12px;
    }
    
}

@media (max-width: 400px){
    .post-card-container{
        width: 261px;
        height: 191.13px; 
        
        margin-left: 13%;
        
    }
    .post-card-left-side{
        width: 84.88px;
        height: 166.1px;
    
    }
    .post-card-left-side img{
        width: 84.88px;
        height: 166.1px;
        
    }
    .post-card-right-side{
        width: 145.59px;
        height: 155px;
    
    }
    .post-card-right-side-first-row img {
        width: 28.55px;
        height: 33px;
    }
    .post-card-right-side-first-row .post-title {
        width: 111.06px;
        height: 35.37px;

        font-size: 9px;

    } 
    .landing-page-left,
    .landing-page-right{
        display: none;
        width: 245px;
    }
    .post-card-right-side-second-row {
        width: 154px;
        height: 38px;

        overflow: auto;
        
    }
    
    .post-card-right-side-second-row p {
        width: 124.55px;
        height: 20.48px;
        

        font-size: 6px;
        line-height: 7px;

    }
    .landing-page-right-card {
        width: 139.82px;
       

    }
    .user-profile-info {
        width: 126.31px;
        height: 22.84px;
      
    }
    .usre-profile-name{
        width: 109.21px;
        height: 11px;
        line-height: 10px;
        font-size: 7px;
    }
    .user-profile-job {
        width: 133.31px;
        height: 9.91px;
        line-height: 8px;
        font-size: 5px;
    }

    .post-card-right-side-fourth-row{
        width: 87%;
    }

    .numbr-of-friends-container {
        width: 52.87px;
        height: 15px;
        border-radius: 11px;
    }
    .number {
        width: 12.3px;
        height: 12.41px;
        
    }
    .number p {
        width: 4.9px;
        height: 5px;
        font-size: 4px;
        line-height: 6px;
    }
    .participants {
        width: 36.7px;
        height: 8px;
        font-size: 6px;
        line-height: 9px;
    }
    .profile-container span {
        width: 116px;
    }
    .user-profile-img img {
        width: 15px;
        height: 19px;
    }
    .number-of-like {
        width: 19.94px;
        height: 11.89px;
    }
    .number-of-like img {
        width: 8.25px;
        height: 11.89px;
    }

    .number-of-like span{
        width: 8.94px;
        height: 11.89px;

        font-size: 8px;
        line-height: 12px;
    }


}
</style>