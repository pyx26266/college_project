import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' // need to be removed

Vue.use(Vuex, axios)
/* eslint-disable */ 
export default new Vuex.Store({
    state: {
        tesseract: null,
        merki: '',
        file: ''
    },
    getters: {},
    actions: {
        addImage: ({commit}, file) => {
            console.log(file.name)
            commit('insertFile', file)
        },
        storeOCR: ({commit}, res) => commit('storeOCR', res)
    },
    mutations: {
        insertFile (state, file) {
            console.log(file.name)
            state.file = file
        },
        storeOCR (state, res) {
            state.tesseract = res
        }
    }
})
