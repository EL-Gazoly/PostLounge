<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Landing from './views/Landing.vue';
import UserProfile from './views/UserProfile.vue';

export default {
  name: 'App',
  components: {
    Landing,
    UserProfile,
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      location.reload();
    });
  },

  beforeRouteUpdate(to, from, next) {
    location.reload();
  },
  beforeRouteLeave(to, from, next) {
    location.reload();
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  background-color: #FCFCFC;
  
  overflow: hidden;

  caret-color: transparent;     
}

a{
        text-decoration: none;
}

.spinner {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    }

    .spinner .dot1,
    .spinner .dot2 {
        position: absolute;
        top: 0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #333;
        animation: sk-bounce 2s infinite ease-in-out;
    }

    .spinner .dot2 {
        top: auto;
        bottom: 0;
        animation-delay: -1s;
    }

    @keyframes sk-bounce {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

</style> 
