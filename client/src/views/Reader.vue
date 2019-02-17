<template>
  <div class="reader">
    <b-container class="bv-example-row">
      <b-row>
        <b-col><Preview /></b-col>
        <b-col cols="5" class="text-left"><OCRText /></b-col>
        <b-col class="text-left"> <Medicine /></b-col>
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

<style>

</style>
