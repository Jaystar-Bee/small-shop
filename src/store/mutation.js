export default {
    addToCart(state, payload) {
        const productExistIndex = state.cart.items.find(item => item.productId === payload.id)

        if (productExistIndex) {
            productExistIndex.qty++
            console.log('found')
        } else {
            console.log('nor-fond')
            const newItem = {
                productId: payload.id,
                title: payload.title,
                image: payload.image,
                price: payload.price,
                qty: 1,
            }
            state.cart.items.unshift(newItem)
        }
        state.cart.qty++
        state.cart.total += payload.price
        state.cart.total.toFixed(2)
    },
    deleteProduct(state, payload) {
        const productItem = state.cart.items.find(item => item.productId === payload.id)

        state.cart.qty -= productItem.qty
        state.cart.total -= (productItem.price * productItem.qty)

        state.cart.items = state.cart.items.filter(item => item.productId !== payload.id)

    },
    auth(state, payload) {
        state.isLoggedIn = payload.authState
    }


}