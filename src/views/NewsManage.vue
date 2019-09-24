<template>
  <div>
    <button class="btn btn-primary mt-4">新增 +</button>
    <table class="w-100 mt-2 text-center table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">編號</th>
          <th scope="col">標題</th>
          <th scope="col">內容</th>
          <th scope="col">日期</th>
          <th scope="col">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>我是標題</td>
          <td>
            <div class="overflow-hidden">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, commodi?
            </div>
          </td>
          <td>2019-09-21</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-warning btn-sm">修改</button>
              <button class="btn btn-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>