<template>
  <div class="reader">
    <b-container class="bv-example-row">
      <b-row>
        <Preview class="isolate"/>
        <b-col cols="6" class="text" style="margin-left:120px;padding-left:60px;"><OCRText /></b-col>
        <b-col class="text"> <Medicine /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */ 
import Preview from '@/components/Preview'
import OCRText from '@/components/OCRText'
import Medicine from '@/components/Medicine'

export default {
  name: 'reader',
  components: {
    Preview,
    OCRText,
    Medicine
  }
}
</script>

<style scoped>
.isolate{
  position: absolute;
  z-index: 9;
}

.text {
  overflow: hidden;
  text-align: left;
  margin-left: 20px;
  margin-top: 2px;
  border-radius: 10px;
  background-color: #add8e6;
}

.text:hover {
  box-shadow: 3px 3px 9px 1px #00000069;
}
</style>

