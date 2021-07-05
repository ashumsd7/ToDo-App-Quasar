<template>
  <q-item
    clickable
    :to="to"
    exact class="text-grey-5"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

   

    icon: {
      type: String,
      default: ''
    },
    to:{
      type:String,
      default:'fact_check'
    }
  }
}
</script>

<style lang="scss" scoped>


.q-drawer {
.q-router-link--exact-active{
  color: rgb(255, 255, 255) !important;
}
}
</style>
