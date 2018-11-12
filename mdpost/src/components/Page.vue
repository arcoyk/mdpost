<template>
  <div>
    <div>
      <span v-if="editmode">
        <textarea autofocus placeholder="title" v-model=page.title>{{ page.title }}</textarea>
        <textarea placeholder="markdown available" style="height: 1000px" v-model=page.content></textarea>
      </span>
      <span v-else>
        <h3>{{ page.title }}</h3>
        <p>{{ ("" + page.updated_at).split('T')[0] }}</p>
        <p class="content"></p>
      </span>
    </div>
    <div class="controler">
      <a v-if="newpage" class="btn-floating btn-flat blue" v-on:click="postPage()">
        <i class="material-icons">save</i>
      </a>
      <a v-else-if="editmode == false" class="btn-floating btn-flat blue" v-on:click="editmode = true">
        <i class="material-icons">edit</i>
      </a>
      <a v-else class="btn-floating btn-flat blue" v-on:click="editPage()">
        <i class="material-icons">save</i>
      </a>
      <vue-headful :title="'mdpost ' + page.title"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as api from '../js/api'
import markdown from 'markdown'
import vueHeadful from 'vue-headful'

export default {
  name: 'Page',
  components: {
    vueHeadful
  },
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
    initContent: function() {
      let c = document.querySelector('.content')
      c.innerHTML = markdown.markdown.toHTML(this.page.content)
    },
    loadPage: function() {
      let vm = this
      axios.get(api.s + 'pages/' + vm.$route.params.id, {
      })
      .then(function (res) {
        vm.page = res.data
        vm.initContent()
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
        setTimeout(vm.initContent, 1)
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
        vm.editmode = false
        setTimeout(vm.initContent, 1)
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
img {
  width: 100%;
}
.controler {
  position: fixed;
  right: 15%;
  top: 10%;
}
textarea {
  min-height: 80px;
  border: none;
  outline: none;
  resize: none;
  font-size: 20px;
}
</style>

