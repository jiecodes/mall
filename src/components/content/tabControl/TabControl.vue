<template>
  <!-- tab 控制栏 -->
  <div class="tab_control ">
    <!-- 给索引为0 添加active属性 -->
    <div class="tab_control_item" v-for="(item, index) in title" :key="index"
    v-bind:class="{active: index === indexCurrent}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
 
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: {
        retrun: []
      }
    }
  },
  data() {
    return {
      indexCurrent: 0
    }
  },
  methods: {
    itemClick(index) {
      // 点击切换 tab切换栏
      this.indexCurrent = index
      // 点击切换栏 内容发生改变   子传父
      this.$emit('tabClick', index)
    },
    
  }
}
</script>

<style scoped lang="scss" >
  .tab_control {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 9;
    span {
      padding: 3px;
    }
  }
  .active {
    color: var(--color);
    span {
      border-bottom: 3px solid var(--color);
    }
  }
  
  
</style>  
