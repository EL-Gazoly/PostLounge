<template>

    <div class="header-contanier">
        <img src="@/assets/hybrowlabs.svg" alt="hybrowlabs logo">


        <div class="header-left">
        <img src="@/assets/devloperInfoButton.svg" alt="sandwich icon" @click="$emit('toggle-left-nav')">

        <img src="@/assets/friendsButton.svg" alt="friend icon" @click="$emit('toggle-right-nav')">


    </div>
    </div>

</template>


<script>
export default {
    name: 'Header',
    methods: {
        toggleLeftNav(){
            
            this.$emit('toggleLeftNav')
        }
    }
}

</script>


<style>
.header-contanier{
    width: 310px;
    height: 28px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 20px;
}
.header-contanier  img{
    width: 97px;
    height: 21px;
}
.header-left{
    width: 60px;
    height: 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

}
@media (min-width: 949px) {
    .header-contanier{
     display: none;
    }
    
}

@media (min-width: 843px) and (max-width : 949px){
    .header-contanier{
        width: 814px;
    }
    .header-left{
        width: 98px;
    }

}
@media (min-width: 661px) and (max-width : 842px){
    .header-contanier{
        width: 631px;
    }
    .header-left{
        width: 98px;
    }
}

@media (min-width: 550px) and (max-width : 660px){
    .header-contanier{
        width: 514px;
    }
    .header-left{
        width: 98px;
    }
}

@media (min-width: 401px) and (max-width: 549px){
    .header-contanier{
        width: 382px;
    }
    .header-left{
        width: 98px;
    }
}

</style>