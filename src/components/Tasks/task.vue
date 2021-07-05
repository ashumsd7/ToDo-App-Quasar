<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-red-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side tap>
      <q-checkbox v-model="task.completed" color="teal" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="task.completed ? 'text-strikethrough' : ''"
        >{{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon class="q-mr-xs" size="18px" name="date_range" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{
            task.dueDate
          }}</q-item-label>
          <small>
            <q-item-label class="row justify-end" caption
              >{{ task.dueTime }}
            </q-item-label></small
          >
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
     <div class="row">
        <q-btn  @click.stop="deletePop(id)" color="red" flat dense  round icon="clear" />
        <!-- <q-btn  @click.stop="showEditTask=true" color="primary" flat dense  round icon="edit" /> -->
     </div>
    </q-item-section>

    <!-- <q-dialog v-model="showEditTask">
     <EditTask @close="showEditTask=false"></EditTask>
    </q-dialog> -->
  </q-item>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  data() {
    return {
      // showEditTask:false
    }
  },
  components: {
    
    // EditTask: require("components/Modals/AddTasks.vue").default,
  },
  methods: {
    //   ...mapActions('tasks',['updateTask'])
    updateTask(payload) {
      this.$store.dispatch("tasks/updateTask", payload);
    },
    deletePop(id){

      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$store.dispatch("tasks/deleteTask", id);
      })
    
    }
  },
};
</script>

<style lang="scss" scoped>
</style>