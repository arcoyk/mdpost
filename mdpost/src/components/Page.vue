<template>
  <div class="row">
    <div class="col s11">
      <span v-if="editmode">
        <textarea v-model=page.title>{{ page.title }}</textarea>
        <p>{{ page.updated_at }}</p>
        <textarea v-model=page.content></textarea>
      </span>
      <span v-else>
        <h3>{{ page.title }}</h3>
        <p>{{ page.updated_at }}</p>
        <p class="content">{{ page.content }}</p>
      </span>
    </div>
    <div class="col s1">
      <a v-if="newpage" class="btn-floating btn-flat blue" v-on:click="postPage()">
        <i class="material-icons">save</i>
      </a>
      <a v-else-if="editmode == false" class="btn-floating btn-flat blue" v-on:click="editmode = true">
        <i class="material-icons">edit</i>
      </a>
      <a v-else class="btn-floating btn-flat blue" v-on:click="editPage()">
        <i class="material-icons">save</i>
      </a>
    </div>
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
        this.editmode = true
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
        vm.editmode = false
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
        console.log(res.data)
        vm.editmode = false
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
      newpage: false,
      editmode: false
    }
  }
}
</script>
<style>
.content {
  font-size: 18px;
}
</style>

