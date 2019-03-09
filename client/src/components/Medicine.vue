<template>
    <div class="info">
        <h1>Medicines</h1>
        <ul><h3>Tabs:</h3>
            <li v-for="item in merki.drugs.drug" v-bind:key="item">{{item.drugName}}
                <ul>
                    <li v-if="item.freq">{{item.freq}}</li>
                    <li v-else>{{item.surroundingText.replace(/[^a-zA-Z 0-9]/g, " ")}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name: 'medicine',
    data () {
        return {
            merki: 'loading'
        }
    },
    computed: {
        ...mapState([
            'tesseract'
        ])
    },
    watch: {
        tesseract(newV, oldV) {
            if (newV) {
                const formData = new FormData()
                formData.append('txt', this.tesseract)

                axios.post('http://localhost:5000/merki', formData)
                .then(res => {
                    this.merki = res.data
                    console.log(res.data.drugs)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
}
</script>

<style>
    li {
        margin-left: 40px;
    }
</style>
