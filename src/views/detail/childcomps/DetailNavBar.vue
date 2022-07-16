<template>
  <!-- detailNavBar 详情页的导航栏  从Detail.vue抽离出来-->
  <div id="detail">
    <!-- 导航栏 NavBar -->
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="@/assets/image/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" 
        class="itemTitles" :class="{active: index === currentIndex}" @click="titlesClick(index)">
        <span>{{item}}</span></div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 使用组件 1 导入
//                                                components/common
import NavBar from 'components/common/navbar/NavBar.vue'



export default {
  name: 'DetailNavBar',
  data() {
    return {
      // 标题
      titles: ['商品','参数','评论','推荐'],
      // (选中)当前的index
      currentIndex: 0
    }
  },
  methods: {
    // 切换标题
    titlesClick(index) {
      this.currentIndex = index
      this.$emit('titlesClick', index)
    },
    // 点击返回按钮
    backClick() {
      this.$router.back()
      // this.$router.go(-1)
    }
  },
  // 2 注册组件
  components: {
    NavBar
  },
}
</script>

<style scoped>
  .titles {
    display: flex;
    font-size: 14px;
  }
  .titles span {
    padding: 5px;
  }
  .itemTitles {
    flex: 1;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
  .left img{
    /* margin-top: 10px;  */
    /* 图片上下居中 */
    vertical-align: middle;
  }
  
</style>