<template>
    <div class="firend-card">
        <img :src="avtar" alt="photo">
        <span>{{ firstname }}  {{ lastname }}</span>
    </div>

</template>

<script>
export default {
    name: 'firendProfile',
    props: {
        avtar: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    }
    
}
</script>

<style>
.firend-card{
    width: 177px;
    height: 37px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 34px;
}

.firend-card img{
    width: 36px;
    height: 37px;

    border-radius: 100%;
}

.firend-card span{
    width: 160px;
    height: 18px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */


    color: #333340;

}
</style>