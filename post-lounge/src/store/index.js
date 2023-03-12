import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    users: [],
    loading: false,
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
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
  },
  actions: {
    fetchPostsAndUsers({ commit }) {
      commit('SET_LOADING', true)
      Promise.all([
        axios.get(`https://dummyjson.com/posts`),
        axios.get(`https://dummyjson.com/users?skip=5&limit=10`),
      ])
        .then(([postsResponse, usersResponse]) => {
          const posts = postsResponse.data.posts
          const users = usersResponse.data
          console.log(posts)
          console.log(users)
          confirm.log('posts and users fetched')
          commit('SET_POSTS', posts)
          commit('SET_USERS', users)
          commit('SET_LOADING', false)
        })
        .catch(err => {
          console.log(err)
          commit('SET_LOADING', false)
        })
    },
    updateReactions({ commit }, { postId, reactions }) {
      commit('UPDATE_REACTIONS', { postId, reactions })
      axios
        .put(`https://dummyjson.com/posts/${postId}`, {
          reactions: reactions,
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  getters: {
    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    },
  },
})
