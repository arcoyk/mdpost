<template>
  <div>
    <div v-for="page in pages" :key="page.id">
      <a v-bind:href="'/page/' + page.id">{{ page.title }}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import page from './Page'
import * as api from '../js/api'

export default {
  name: 'Pages',
  components: {
    page
  },
  mounted: function() {
    this.loadPages()
  },
  methods: {
    newPage: function() {
      let vm = this
      axios.get(api.s + '/new', {
      })
      .then(function(res) {
        console.log(res)
      })
      .catch(function(e) {
      })
    },
    loadPages: function() {
      let vm = this
      axios.get(api.s + 'pages', {
      })
      .then(function(res) {
        vm.pages = res.data
      })
      .catch(function(e) {
      })
    }
  },
  data () {
    return {
      pages: []
    }
  }
}
</script>

