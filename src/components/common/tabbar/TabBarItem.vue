<template>
  <!-- slot 插槽会被App.vue 里面的 slot='name' 的替换掉     <slot></slot>会被替换掉 -->
  <div class="tab-bar-item"  @click="itemClick">
    <!-- <img src="@/assets/image/tabbar/_home.png" alt="">
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div v-bind:class="{active : isActive}"><slot name="item-text"></slot></div> -->

    <!-- 动态决定文字颜色 计算属性 -->
    <div v-bind:style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  // 父组件 传递 子组件
  props: {
    // 动态判断点击哪个
    path: String,
    // 动态改变文字颜色
    activeColor: {
      path: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
      // path: '/home'     这样值就是固定的,每次都是首页 用上面的props
    }
  },
  methods: {
    itemClick() {
      // console.log('itemClick')
      // this.$router.replace(this.path).catch(err => err)      // 不可以返回 replace()
      this.$router.push(this.path)         // 可以返回 push() 
    }
  },
  // 动态判断点击的是 那个 isActive为动态的     $route 判断那个路由处于活跃状态
  computed: {
    isActive() {
      // 判断点击的path是否等于当前path
      // return this.$route.path == this.path
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 文字颜色为动态的
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}


/* .active {
  color: red;
} */
</style>