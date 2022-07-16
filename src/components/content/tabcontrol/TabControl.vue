<template>
  <!-- tab control        首页 选项卡 -->
  <div class="tab-control" >
    <div v-for="(item, index) in titles" class="tab-control-item" 
    :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 父传子
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  // 点击哪个titles 哪个文字变色,加下划线
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 内部往外部传递数据  子传父
      this.$emit('tabClick', index)
    }
  }

}
</script>

<style scoped>
  .tab-control {
    display: flex;
    font-size: 16px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 7px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>