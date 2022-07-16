<template>
  <!-- 分类 category -->
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      scroll: null
    }
  },

  // 生命周期函数 创建时触发 created
  created() {
    // this.scroll = new BetterScroll('.wrapper', {

    // })
  },
  // 生命周期函数 挂载dom mounted
  mounted() {
    // this.scroll = new BetterScroll('.wrapper', { 
    this.scroll = new BetterScroll(document.querySelector('.wrapper'), {    // 也可以通过ref获取标签div
      // probe 侦测 0,1不侦测实际位置 2 不侦测手指离开后滚动的位置 3 只要是滚动都侦测
      probeType: 3,
      click: true,            // 默认按钮不能点击
      pullUpLoad: true,        // 是否上拉加载
    })
    // 监听当前滚动位置坐标
    this.scroll.on('scroll', (position) => {
      console.log(position)             // 打印坐标
    }),
    // 上拉加载更多  默认只能请求一次
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
      // 可以请求多次
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 2000);
    })
  },
  methods: {
    btnClick() {
      console.log('--------')
    }
  }
  
}
</script>

<style>
  .wrapper {
    height: 200px;
    background-color: #f3f3f3;

    /* overflow: hidden; */
    /* overflow: scroll; */
  }
</style>