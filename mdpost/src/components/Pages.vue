<template>
  <div>
    <div v-for="page in pages" :key="page.id">
      <a :href="'/page/' + page.id">{{ page.title }}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import page from './Page'

export default {
  name: 'Pages',
  components: {
    page
  },
  mounted: function() {
    this.loadPages()
    this.newPage()
  },
  methods: {
    newPage: function() {
      let vm = this
      axios.get('http://localhost:3000/pages/new', {
      })
      .then(function(res) {
        console.log(res)
      })
      .catch(function(e) {
      })
    },
    loadPages: function() {
      let vm = this
      axios.get('http://localhost:3000/pages', {
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

