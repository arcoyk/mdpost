<template>
  <div id="app" class="row">
    <div class="col row s12">
      <div class="headtile col s4">
        <a href="/" class="black-text">
          <div class="mdpost">mdpost</div>
        </a>
      </div>
      <div class="headtile col s4">
      </div>
      <div class="headtile col s4">
      </div>
    </div>
    <div class="col s3">
    </div>
    <div class="col s6">
      <router-view/>
    </div>
    <div class="col s3">
    </div>
    <div class="footer col row s12">
      <a class="grey-text" href="https://mdpost2.herokuapp.com/page/18">what's mdpost</a>
    </div>
    <a class="add btn-floating blue btn-flat" href="/page/new">
      <i class="material-icons">add</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.headtile {
  text-align: center;
  padding: 10px 0px;
}
.mdpost {
  font-size: 27px;
}
.footer {
  margin-top: 100px;
  text-align: center;
}
.add {
  position: fixed;
  right: 10%;
  top: 10%;
}
</style>

