<template>
  <div class="home-container">
    <!-- :fixed="true"  等同于 fixed -->
    <van-nav-bar title="头条" fixed placeholder />

  <!-- 导入，注册，并使用 ArticleInfo 组件 -->
  <!-- <p>{{ artList.length }}</p> -->
  <van-pull-refresh :disabled="finished" v-model="refreshLoading" @refresh="onRefresh">
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
      <ArticleInfo
      v-for="item in artList"
      :key="item.art_id"
      :title="item.title"
      :aut_name="item.aut_name"
      :comm_count="item.comm_count"
      :pubdate="item.pubdate"
      :cover="item.cover"
      ></ArticleInfo>
    </van-list>
  </van-pull-refresh>

  </div>
</template>

<script>
// 导入 request.js
// import request from '@/utils/requst.js'

// 按需导入 API 接口
import { getArticleListAPI } from '@/api/articleAPI.js'

import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      // 页码值。从 1 开始
      page: 1,
      // 每页展示的数据条数。
      limit: 10,
      // 文章列表
      artList: [],
      // 是否正在加载下一页，如果 loading 为 true，则不会反复触发 load 事件
      // 每当下一页数据请求回来 改成 false
      loading: true,
      // 所有数据是否加载完毕了，如果没有更多数据了，改成 true
      finished: false,
      // 是否正在下拉刷新
      refreshLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      // 发起 GET 请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      if (res.length === 0) {
        // 没有下一页数据
        this.finished = true
        this.refreshLoading = false
        return
      }
      console.log(res)
      // 如果上拉加载，则 [旧数据，新数据]
      if (isRefresh) {
        this.artList = [...res, ...this.artList]
        this.refreshLoading = false
      } else {
        // 如果下拉加载，则 [新数据，旧数据]
        this.artList = [...this.artList, ...res]
        this.loading = false
      }
    },
    // 只要 onLoad 被调用，就请求下一页数据
    onLoad() {
      console.log('触发了 onLoad')
      // 1. 让页码值加 1
      this.page++
      // 2. 重新获取数据
      this.initArticleList()
    },
    onRefresh() {
      console.log('触发了 onRefresh')
      // 让页码值 +1
      this.page++
      // 重新获取数据
      this.initArticleList(true)
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    /deep/ .van-nav-bar__content {
      background-color: #007bff;
    }
    /deep/ .van-nav-bar__title {
      color: white;
    }
  }
</style>
