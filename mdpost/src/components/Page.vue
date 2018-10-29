<template>
  <div>
    <textarea v-model=page.title>{{ page.title }}</textarea>
    <p>{{ page.updated_at }}</p>
    <textarea v-model=page.content></textarea>
    <button v-on:click="editPage()">save</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Page',
  mounted: function() {
    this.loadPage()
  },
  methods: {
    loadPage: function() {
      let vm = this
      axios.get('http://localhost:3000/pages/' + vm.$route.params.id, {
      })
      .then(function (res) {
        vm.page = res.data
      })
      .catch(function (e) {
      })
    },
    postPage: function() {
      let vm = this
      axios.post('http://localhost:3000/pages', {
        title: 'This is ' + Math.random() * 10,
        content: 'Oh this is new...'
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (e) {
      })
    },
    editPage: function() {
      let vm = this
      axios.put('http://localhost:3000/pages/' + vm.page.id, {
        title: vm.page.title,
        content: vm.page.content
      })
      .then(function (res) {
        vm.page = res.data
      })
      .catch(function (e) {
      })
    },
    deletePage: function() {
      let vm = this
      axios.delete('http://localhost:3000/pages/3', {
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (e) {
      })
    }
  },
  data () {
    return {
      page: {}
    }
  }
}
</script>

