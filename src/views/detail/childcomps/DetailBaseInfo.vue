<template>
  <!-- 通过key判断对象里面是否有值  -->
  <div>
    <div class="goods_name">{{goods.goods_name}}</div>
    <div>{{  | showDate}}</div>
    <div>
      <span>{{goods.goods_price}}</span>
      <span>{{goods.goods_number}}</span>
    </div>
    <div v-for="(item,index) in goods.attrs" :key="index">
      <span>{{item.attr_name}}</span>
    </div>
    <div v-html="goods.goods_introduce"></div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'

export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: String,
      default() {
        return ''
      }
    }
  },
  filters: {
    showDate(value) {
    // 1 将时间戳转换为Date对象
    const date = new Date(value * 1000)
    // 2 将date进行格式化
    return formatDate(date, 'yyyy-MM-dd')
  }
  }
  
  
}
</script>

<style scoped>
  .goods_name {
    font-size: 24px;
    font-weight: 500;
  }

</style>