import Vuex from 'vuex'
import db from '~/components/firebaseInit'
import Vue from 'vue'
const createStore = () => {
    return new Vuex.Store({
        state: {
            counter: 100,
            loggedIn: false,
            shopping: false,
            cart: [],
            firestoreShopItems: [],
            shopItems: [
                {
                  itemName: 'Carrot',
                  itemShrtName: 'carrot',
                  itemImg: '/thumbs/carrot_thumb.jpg',
                  itemDetailImgs: [
                    '/hires/carrot/carrot_01.jpeg',
                    '/hires/carrot/carrot_02.jpeg',
                    '/hires/carrot/carrot_03.jpeg',
                  ],
                  price: '$28/dozen',
                  visible: true,
                  description: 'carrot cupcakes with a vanilla bean cream cheese frosting',
                  url: '/shop/carrot'
                },
                {
                  itemName: 'S\'mores',
                  itemShrtName: 'smores',
                  itemImg: '/thumbs/smores.png',
                  itemDetailImgs: [
                    '/hires/smores/smores1.png',
                    '/hires/smores/smores2.png',
                    '/hires/smores/smores3.png',
                  ],
                  price: '$28/dozen',
                  visible: true,
                  description: 's’mores brownie cups with a graham cracker crust topped with homemade marshmallow fluff',
                  url: '/shop/smores'
                },
                {
                  itemName: 'Red Velvet',
                  itemShrtName: 'red-velvet',
                  itemImg: '/thumbs/redvelvet.jpg',
                  itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                  ],
                  price: '$25/dozen',
                  visible: true,
                  description: 'red velvet with cream cheese frosting',
                  url: '/shop/red-velvet'
                },
                {
                  itemName: 'Ferrero',
                  itemShrtName: 'ferrero',
                  itemImg: '/thumbs/ferrero_01.jpg',
                  itemDetailImgs: [
                    '/hires/ferrero/ferrero_01.jpg',
                    '/hires/ferrero/ferrero_02.jpg',
                    '/hires/ferrero/ferrero_03.jpg',
                  ],
                  price: '$28/dozen',
                  visible: true,
                  description: 'chocolate cupcakes stuff with ferrero rocher, topped with chocolate frosting, honey roasted hazelnuts and a drizzle of chocolate',
                  url: '/shop/ferrero'
                },
                {
                    itemName: 'Lemon Berry',
                    itemShrtName: 'lemon-berry',
                    itemImg: '/thumbs/yogurt.jpg',
                    itemDetailImgs: [
                        '/hires/yogurt/yogurt2.jpg',
                        '/hires/yogurt/yogurt3.jpg',
                        '/hires/yogurt/yogurt.jpg'
                    ],
                    price: '$28/dozen',
                    visible: true,
                    description: 'lemon cupcakes with berry cream cheese frosting',
                    url: '/shop/lemon-berry'
                },
                {
                    itemName: 'Mocha',
                    itemShrtName: 'mocha',
                    itemImg: '/thumbs/mocha.jpg',
                    itemDetailImgs: [
                        '/hires/mocha.jpg'
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'coffee infused chocolate cupcakes topped with mocha cream cheese frosting',
                    url: '/shop/mocha'
                },
                {
                    itemName: 'Snickers',
                    itemShrtName: 'snickers',
                    itemImg: '/thumbs/snicker.jpg',
                    itemDetailImgs: [
                        '/hires/snicker.jpg'
                    ],
                    price: '$28/dozen',
                    visible: true,
                    description: 'chocolate cupcakes filled with snickers, topped with cream cheese frosting, chopped snickers and a drizzle of caramel sauce',
                    url: '/shop/snickers'
                },
                {
                    itemName: 'Twix',
                    itemShrtName: 'twix',
                    itemImg: '/thumbs/twix.jpg',
                    itemDetailImgs: [
                        '/hires/twix.jpg'
                    ],
                    price: '$28/dozen',
                    visible: true,
                    description: 'chocolate cupcakes filled with twix, topped with cream cheese frosting, chopped shortbread cookies, a drizzle of both chocolate ganache and caramel sauce',
                    url: '/shop/twix'
                },
                {
                    itemName: 'Tres Leches',
                    itemShrtName: 'tresleches',
                    itemImg: '/thumbs/tres.jpg',
                    itemDetailImgs: [
                        '/hires/tres.jpg'
                    ],
                    price: '$25',
                    visible: false,
                    description: 'a light & delicate sponge cake soaked with condensed milk, evaporated milk and heavy cream topped with a cloud of whipped cream',
                    url: '/shop/tresleches'
                },
            ],
            testItems: [
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
                {
                    itemName: 'Red Velvet',
                    itemShrtName: 'red-velvet',
                    itemImg: '/temp-02.png',
                    itemDetailImgs: [
                    '/hires/red-velvet/red-velvet-03.jpg',
                    '/hires/red-velvet/red-velvet-02.jpg',
                    '/hires/red-velvet/red-velvet-01.jpg',
                    ],
                    price: '$25/dozen',
                    visible: true,
                    description: 'red velvet with cream cheese frosting',
                    url: '/shop/red-velvet'
                },
            ],
        },
        mutations: {
            increment(state) {
                state.counter++
            },
            toggleLogin(state) {
                state.loggedIn = !state.loggedIn
            },
            logIn(state) {
                state.loggedIn = true
            },
            logOut(state) {
                state.loggedIn = false
            },
            addItemToCart(state, payload) {
                state.cart.push(payload)
            },
            clearStateItems(state) {
                state.firestoreShopItems.length = 0
            },
            updateFirestoreItems(state, { item, itemID }) {
                // Vue.set(item, 'itemID', itemID)
                // console.log('ADD: ' + item.index)

                // console.log('Setting: ' + itemIndex)
                // Vue.set(state.firestoreShopItems, item.index, item);

                // state.firestoreShopItems.push(item)
            },
            deleteFirestoreItem(state, {itemID, index}) {
                // alert('Deleting... ' + itemID)

                // db.collection("items").doc(itemID).delete().then(function () {
                //     console.log("Document successfully deleted!");
                // }).catch(function (error) {
                //     console.error("Error removing document: ", error);
                // });

                // state.counter++
                // state.firestoreShopItems.splice(index, 1)
            }
        }
    })
}

export default createStore