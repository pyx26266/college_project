<template>
    <div class="image-preview">
        <img v-if="url" :src="url" id="image" alt="">
        <br>
        <span class="name">{{file.name}}</span>
    </div>
</template>

<script>
/* eslint-disable */ 
import {mapState} from 'vuex'

export default {
    name: 'preview',
    data: {
        url: null
    },
    computed: {
        ...mapState([
        'file'
        ])
    },
    created() {
        if (this.file) {
            this.url = URL.createObjectURL(this.file)
        }
        
    }
}
</script>

<style scoped>
    .image-preview {
        float: left;
        margin: 20px;
        box-shadow: #adacac 6px 3px 5px 0px;
    }
    #image {
        width: 150px;
        height: auto;
    }
    .name {
        font-size: .8em;
    }
</style>
