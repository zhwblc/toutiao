<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="item" alt="" class="thumb" v-for="(item, index) in cover.images" :key="index">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{ aut_name }} &nbsp;&nbsp; {{ comm_count }} 评论 &nbsp;&nbsp; 发布日期 {{ pubdate }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    // 文章标题
    title: {
      type: String,
      default: ''
    },
    // 作者的名字
    aut_name: {
      type: String,
      default: ''
    },
    // 评论数
    comm_count: {
      // 通过数组形式，为当前属性定义多个可能的类型
      type: [Number, String],
      default: 0
    },
    // 发布日期
    pubdate: {
      type: String,
      default: ''
    },
    // 封面的信息对象
    cover: {
      type: Object,
      // object 的默认值比较特殊
      default: function() { return { type: 0 } }
    }
  }
}
</script>

<style lang="less" scoped>
  .label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .thumb {
    // 矩形黄金比例：0.618
    width: 113px;
    height: 70px;
    background-color: #f8f8f8;
    object-fit: cover;
  }

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .thumb-box {
    display: flex;
    justify-content: space-between;
  }
</style>
