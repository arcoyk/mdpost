<template>
  <div>
    <textarea v-model=page.title>{{ page.title }}</textarea>
    <p>{{ page.updated_at }}</p>
    <textarea v-model=page.content></textarea>
    <button v-if="newpage" v-on:click="postPage()">post</button>
    <button v-else v-on:click="editPage()">save</button>
  </div>
</template>

<script>
import axios from 'axios'
import * as api from '../js/api'

export default {
  name: 'Page',
  mounted: function() {
    this.initPage()
  },
  methods: {
    initPage: function() {
      if (this.$route.params.id == "new") {
        this.newpage = true
      } else {
        this.loadPage()
      }
    },
    loadPage: function() {
      let vm = this
      axios.get(api.s + 'pages/' + vm.$route.params.id, {
      })
      .then(function (res) {
        vm.page = res.data
      })
      .catch(function (e) {
      })
    },
    postPage: function() {
      let vm = this
      axios.post(api.s + 'pages', {
        title: vm.page.title,
        content: vm.page.content
      })
      .then(function (res) {
        vm.$router.push('' + res.data.id)
        vm.page = res.data
        vm.newpage = false
      })
      .catch(function (e) {
      })
    },
    editPage: function() {
      let vm = this
      axios.put(api.s + 'pages/' + vm.page.id, {
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
      axios.delete(api.s + 'pages/' + vm.page.id, {
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
      page: {'title': '', 'content': ''},
      newpage: false
    }
  }
}
</script>

