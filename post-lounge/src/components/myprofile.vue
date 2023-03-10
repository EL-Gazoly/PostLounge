<template>
    <a class="profile-container" :href='path' target="balnk">
        <img :src='imageHandel' alt="profile pic">
        <span>{{profileHandel}}</span>
    </a>
    
</template>

<script>
export default {
    name: 'MyProfile',
    props: {
        path: String,
        profileHandel: String,
        imageHandel: String
    },
    
}

</script>

<style>
    .profile-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    

        width: 165px;
        height: 32px;

    }

    .profile-container span{
        width: 123px;
        height: 18px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;

        color: #1E1E2B;
    }
  
</style>    

