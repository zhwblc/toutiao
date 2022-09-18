// 文章相关的 API 接口，都封装到这个模块
import request from '@/utils/requst'

// 向外按需导出一个 API 函数
export const getArticleListAPI = function(_page, _limit) {
  return request.get('/articles', {
    // 请求参数
    params: { _page, _limit }
  })
}
