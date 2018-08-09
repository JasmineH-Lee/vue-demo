<template>
  <div>
    <div v-for="items in dataList">
      <div v-model="items.name" class="card">
        <a @click="tellFather(items.name)">{{ items.name }}</a>
      </div>
    </div>
    <footer>
      <slot name="footer">提交</slot>
    </footer>
  </div>
</template>
<script>
import CardList from '@/components/CardList'
export default {
  props: {
    cardList: {
      default: _ => {
        return []
      },
      type: Array
    }
  },
  data () {
    return {
      // 在子组件中最好另外定义一个本地的变量使其初始值等于父组件传值
      dataList: this.cardList
    }
  },
  components: {
    CardList
  },
  methods: {
    tellFather: function (name) {
      console.log('123');
      this.$emit('showAlert', name)
    }
  }
}
</script>
<style>
  .card {
    width: 100px;
    height: 100px;
    border: 1px solid #333;
  }
</style>
