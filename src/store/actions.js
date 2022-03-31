export default {
    LoggedIn(context) {
        context.commit('auth', { authState: true })
        console.log('login')
    },
    loggedOut(context) {
        context.commit('auth', { authState: false })
        console.log('logout')
    }
}