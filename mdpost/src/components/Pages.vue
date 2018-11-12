<template>
  <div>
    <div class="row" v-for="page in pages" :key="page.id">
      <div class="container" v-bind:href="'/page/' + page.id">
        <div class="row"> 
          <a class="black-text" v-bind:href="'/page/' + page.id"> 
            <h6>
              <b>
                {{ page.title }}
              </b>
            </h6>
          </a>
          {{ page.updated_at.split('T')[0] }}
        </div>
      </div>
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

