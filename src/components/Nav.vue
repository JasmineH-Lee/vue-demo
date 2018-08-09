<template>
  <div>
    <div>
      <div>
        <ul>
          <li>
            <a href="#" @click="navigateTo()">demo1</a>
          </li>
          <li>
            <a href="#">demo2</a>
          </li>
          <li>
            <a href="#">demo3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    // vue data是一个函数的返回值，也因此建立了同一个组件多次调用之间的独立性
    return {
      count: 0
    }
  },
  methods: {
    navigateTo: function () {
      this.count ++
      console.log(this.count)
    }
  }
}

</script>
