<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <span><</span>
      </div>
      <div slot="center" class="detail_navbar">
        <div v-for="(item, index) in title" class="detail_navbar_item"
        :class="{active: index === currentIndex}" @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 导入 NavBar 最上面的导航栏
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'GoodsDetailNavbar',
  components: {
    NavBar,
  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    // 点击最上面的切换栏 切换选项
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    // 点击返回按钮 返回上一页面
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .detail_navbar {
    display: flex;
    font-size: 16px;
  }
  .detail_navbar .detail_navbar_item {
    flex: 1;
  }
  .back span {
    font-size: 26px;
    text-align: center;
    line-height: 44px;
  }
  .active {
    color: var(--color);
  }
</style>