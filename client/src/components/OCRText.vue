<template>
    <div class="info">
        <h1>Advices</h1>
        <span v-show="enLang" style="white-space: pre;">
            {{tesseract}}
        </span>
        <div class="loader" v-if="loading"></div>
        <span v-show="!enLang" style="white-space: pre;">
            {{translateData}}
        </span>
        <button class="trans" @click="translate" v-show="!translateData">Translate</button>
        <button class="trans" @click="toggle">Toggle Language</button>
    </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name: 'OCRText',
    data() {
        return {
            loading: false,
            translateData: '',
            enLang: true
        }
        
    },
    computed: {
        ...mapState([
            'tesseract'
        ])
    },
    methods: {
        toggle () {
            this.enLang = !this.enLang
        },
        translate () {
            this.loading = true
            const formData = new FormData()
            formData.append('txt', this.tesseract)

            axios.post('http://127.0.0.1:5000/translate', formData)
            .then(res => {
                this.translateData = res.data
                this.enLang = false
                this.loading = false
            }) 
            .catch(err => {
                this.error = err
            })
        }
    }
}
</script>

<style>
    .trans {
        background-color: #4c9596;
        border-width: 0px;
        color: white;
        margin-top: 10px;
        padding: 5px;
        box-shadow: #403f3f 4px 3px 9px 0px;
        margin-left: 20px;
    }
    .trans:active {
        box-shadow: white 0px 0px 0px;
    }
    .loader {
        position: fixed;
        top: 40%;
        left: 50%;
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
