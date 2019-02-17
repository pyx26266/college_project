<template>
  <div class="main">
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <div class="upload">
        <font-awesome-icon icon="upload" id="icon"/>
        <input type="file" @change="selectFile" ref="fileInput">
        <br>
        <button @click="$refs.fileInput.click()" id="select-btn">Pick a File...</button>
      </div>
      <span v-if="file" class="file-name">{{file.name}}</span>
      <br>
      <span v-if="error" class="file-error">{{error}}</span>
      <br>
      <button v-show="file" type="submit" id="upload-btn">Upload</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UploadFile',
  data () {
    return {
      error: ''
    }
  },
  computed: {
    ...mapState([
      'file'
    ])
  },
  methods: {
    selectFile (event) {
      this.$store.dispatch('addImage', event.target.files[0])
    },
    sendFile () {
      const formData = new FormData()
      formData.append('file', this.file)

      axios.post('http://127.0.0.1:5000/upload', formData, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
        }
      })
      .then(res => {
        console.log(res)
      }) 
      .catch(err => {
        this.error = err
      })
    }
  }
}
</script>

<style scoped>
  #icon {
    font-size: 4rem;
  }
  .main {
    top: 35%;
    width: 100%;
    position: absolute;
    text-align: -webkit-center;
  }
  .upload {
    padding-top: 30px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #46abf3;
    color: white;
  }
  input[type=file] {
    display: none;
  }
  #select-btn {
    margin-top: 10px;
    color: white;
    background-color: aqua;
    border-radius: 5px;
    padding: 9px;
    width: 130px;
    border-width: 0px;
    font-size: 1.2em;
  }
  #upload-btn {
    margin-top: 23px;
    width: 200px;
    color: white;
    background-color: #49b767;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 1.5em;
  }
  .file-error {
    color: #c70000;
  }
</style>
