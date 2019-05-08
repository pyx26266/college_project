<template>
  <div class="home">
    <Header msg="Prescription Reader"/>
    <upload-file />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import UploadFile from '@/components/UploadFile'

export default {
  name: 'home',
  components: {
    Header,
    UploadFile
  }
}
</script>
<style scoped>
</style>
