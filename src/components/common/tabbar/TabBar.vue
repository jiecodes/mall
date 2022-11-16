<template>
  <div id="tabbar">
    <slot></slot>
    <!-- <div id="tabbar">
      <div class="tab-bar-item">
        <img src="@/assets/image/tabbar/_home.png" alt="">
        shouye
      </div>
      <div class="tab-bar-item">
        <img src="@/assets/image/tabbar/_img.png" alt="">
        shouye
      </div>
      <div class="tab-bar-item">
        <img src="@/assets/image/tabbar/_my.png" alt="">
        shouye
      </div>
      <div class="tab-bar-item">
        <img src="@/assets/image/tabbar/_search.png" alt="">
        shouye
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#tabbar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0; 
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 5px rgba(0,0,0,.2);

  z-index: 9;
}

</style>