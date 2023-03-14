import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    user: [],
    users: [],
    loading: false,
    gender : '',
    companyName: "",
    jobTitle: "",
    isLeftNavOpen: false,
    isRightNavOpen: false
  },  
  mutations: {
    toggleLeftNav(state) {
      state.isLeftNavOpen = !state.isLeftNavOpen;
    },
    toggleRightNav(state) {
      state.isRightNavOpen = !state.isRightNavOpen;
    },
    SET_POSTS(state, posts) {
      state.posts = posts
      console.log('iam here', state.posts)
    },
    SET_USER(state, user) {
      state.user = user
      state.companyName = user.company.name
      state.jobTitle = user.company.title
    },
    SET_USERS(state, users) {
      state.users = users
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    UPDATE_REACTIONS(state, { postId, reactions }) {
      state.posts = state.posts.map(post => {
        if (post.id === postId) {
          post.reactions = reactions
        }
        return post
      })
    },
    SET_USER(state, user) {
      state.user = user
      state.companyName = user.company.name
      state.jobTitle = user.company.title
      state.gender = user.gender === 'male' ? 'MR' : 'MRS'
    },
  },
  actions: {
    fetchPosts({ commit }, userId) {
      commit('SET_LOADING', true)
        axios
        .get(`https://dummyjson.com/posts`)
        .then((res) => {
          let posts = res.data.posts || []
          posts.map(post => {
            axios
            .get(`https://dummyjson.com/users/${post.userId}`)
            .then(res => {
              post.user = res.data
            })
            .catch(err => {
              console.log(err)  
            })
          })
          if(userId){
            console.log('userId', userId)
            posts = posts.filter(post => post.userId === userId)
            console.log('posts', posts)
          }
          commit('SET_POSTS', posts)
          commit('SET_LOADING', false)
        })
        .catch(err => {
          console.log(err)
          commit('SET_LOADING', false)
        })
    },

    fetchUsers({ commit }) {
        axios
        .get(`https://dummyjson.com/users?limit=10`)
        .then((res) => {
          const users = res.data.users || []
          console.log('users', users)
          commit('SET_USERS', users)

        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchUser({ commit }, userId) {
      axios
        .get(`https://dummyjson.com/users/${userId}`)
        .then(res => {
          
          commit('SET_USER', res.data)
        }
        )
        .catch(err => {
          console.log(err)
        }
        )
    },    
    
  },
  getters: {
    getUserById: state => {
        state.posts.map(post => {
          axios
          .get(`https://dummyjson.com/users/${post.userId}`)
          .then(res => {
            post.user = res.data
          })
          .catch(err => {
            console.log(err)  
          })
        })
       
    return state.posts      
    },
    filteredPostsByUserId : state => userId => {
      console.log(state.posts.filter(post => post.userId === userId))
       state.posts.filter(post => post.userId === userId)
       return getUserById()
    }
  },
})
