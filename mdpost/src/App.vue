<template>
  <div id="app" class="row grey">
    <div class="col row s12 pink">
      <div class="headtile col s4 blue">
        <a href="/" class="grey-text">
            <div class="mdpost">mdpost</div>
        </a>
      </div>
      <div class="headtile col s4">
      </div>
      <div class="headtile col s4 yellow">
        <a href="/page/new">New Page</a>
      </div>
    </div>
    <div class="col s3 red ">
    </div>
    <div class="col s6 orange">
      <router-view/>
    </div>
    <div class="col s3 yellow">
    </div>
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
  height: 50px;
}
.mdpost {
  font-size: 40px;
}
</style>
