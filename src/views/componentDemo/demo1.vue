<template>
  <div class="demo1">
    <div>Hello demo1</div>
    <CardList :cardList="cardList"
              @showAlert="showAlert">
      <template slot="footer">
        <button>关闭</button>
      </template>
    </CardList>
  </div>
</template>
<script>
import CardList from '@/components/CardList'
export default {
  props: {
  },
  data () {
    return {
      cardList: [
        {name: 'name1-1', id: 1},
        {name: 'name1-2', id: 2},
        {name: 'name1-3', id: 3},
        {name: 'name1-4', id: 4}
      ]
    }
  },
  components: {
    CardList
  },
  methods: {
    showAlert: function (name) {
      console.log('father')
      alert("this is father's alert messages + " + name)
    }
  }
}
</script>
