<template>
    <div class="info">
        <h1>Medicines</h1>
        <ul><h3>Tabs:</h3>
            <li>{{merki.drugs.drug.drugName}}</li>
        </ul>
            <li>{{merki.drugs.drug.surroundingText}}</li>
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

                axios.post('http://localhost:5001/merki', formData)
                .then(res => {
                    this.merki = res.data
                    console.log(res.data)
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
