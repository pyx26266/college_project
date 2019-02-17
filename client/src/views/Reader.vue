<template>
  <div class="reader">
    <b-container class="bv-example-row">
      <b-row>
        <b-col><Preview /></b-col>
        <b-col cols="5" class="text-left"><OCRText /></b-col>
        <b-col> <h3>Medicines</h3></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */ 
import Preview from '@/components/Preview'
import OCRText from '@/components/OCRText'

export default {
  name: 'reader',
  components: {
    Preview,
    OCRText
  }
}
</script>

<style>

</style>
