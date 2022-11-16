<template>
    <!-- 推荐信息 -->
  <div class="recommend">
    <div v-for="item in recommends" class="recommend_item">
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  // 接收父组件传来的数据
  props: {
    recommends: {
      type: Array,
      default: {
        return: []
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .recommend {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 5px solid #eee;
    .recommend_item {
      width: 21%;
      img {
        width: 100%;
        padding: 10px 0;
      }
    }
  }


</style>