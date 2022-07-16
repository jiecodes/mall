<template>
  <div class="recommend">
    <!-- coderwhy的接口首页推荐 -->
    <div v-for="item in recommends" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
    <!-- <div v-for="item in recommends">
      <a :href="item.navigator_url">
        <img :src="item.image_src" alt="">
        <div>{{item.name}}</div>
      </a>
    </div> -->
  </div>

</template>

<script>
export default {
  // 父传子
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .item {
    flex: 1;
  }
  .item img {
    width: 90%;
  }
  .item div {
    margin-top: 10px;
  }

</style>
