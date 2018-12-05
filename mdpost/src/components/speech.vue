<template>
  <div class="col s12">
    <div class="row sp">
      <div  class="col s2 valign-wrapper sp">
        <div v-bind:class="btn_class">
          <i
            class="material-icons large"
            v-on:click="finalize('')"
            v-bind:id="mic_state">
            mic
          </i>
        </div>
      </div>
      <div class="col s10 sp">
        <h3 class="grey-text">
          <span v-if="interim.length == 0">
            ...
          </span>
          <span v-else>
            🐹  {{ interim }}
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "speech",
  computed: {
    btn_class: function() {
      if (this.mic_state == "mic_off") {
        return "btn-floating btn-large blue"
      } else {
        return "btn-floating btn-large disabled pulse"
      }
    }
  },
  created: function() {
    this.start()
  },
  methods: {
    init_api: function() {
      this.api = new webkitSpeechRecognition()
      this.api.continuous = true
      this.api.interimResults = true
      this.api.lang = this.lang
      this.interim = ''
      this.finalim = ''
      var vm = this
      this.api.onstart = function() {
        vm.mic_state = "mic_on"
        vm.finalizing = false
      }
      this.api.onerror = function(event) {
        // vm.start()
      }
      this.api.onend = function() {
        vm.mic_state = "mic_off"
        if (vm.finalizing == false) {
          vm.start()
        }
      }

      this.api.onsoundstart = function() {
        vm.sound = 'sound start'
      }
      this.api.onsoundend = function() {
        vm.sound = 'sound end'
      }
      this.api.onaudiostart = function() {
        vm.audio = 'audio start'
      }
      this.api.onaudioend = function() {
        vm.audio = 'audio end'
      }
      this.api.onspeechstart = function() {
        vm.speech = 'speech start'
      }
      this.api.onspeechend = function() {
        vm.speech = 'speech end'
      }

      this.api.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            vm.finalim = event.results[i][0].transcript;
            vm.finalize(vm.finalim)
          } else {
            vm.interim = event.results[i][0].transcript;
            if (vm.interim.length > vm.too_long) {
              vm.finalize(vm.interim)
            }
          }
        }
      }
    },
    finalize: function(t) {
      this.finalizing = true
      if (t.length != 0) {
        this.$emit('c_finalim', t)
      }
      this.start()
    },
    start: function() {
      this.init_api()
      this.api.start()
    },
    switch_lang: function() {
      if (this.lang == 'ja-JP') {
        this.lang = 'en-US'
      } else {
        this.lang = 'ja-JP'
      }
      this.start()
    }
  },
  data () {
    return {
      api: {},
      finalizing: false,
      sound: '',
      audio: '',
      speech: '',
      too_long: 100,
      mic_state: 'mic_off',
      lang: 'ja-JP',
      interim: '',
      finalim: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sp {
  min-height: 100px;
}
</style>
