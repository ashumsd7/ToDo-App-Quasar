<template>
  <q-page class="q-pa-md q-ma-sm">
    <div class="absolute-top text-center">
      <q-btn  @click="showAddTask= true" round class="" color="green" icon="add" /> Add Task
    </div>

    <div class="q-pt-xl" >
      <q-list bordered separator>
        <mytask
          :id="key"
          :key="key"
          :task="task"
          v-for="(task, key) in tasks"
        ></mytask>
      </q-list>

     <!-- <q-banner dense class="bg-primary text-center text-white">
  !! No Task for now !!
      <template v-slot:action>
        <q-btn  @click="showAddTask= true"  color="green" label="Add a Task" />
 
      </template>
    </q-banner> -->
    </div>
    <q-dialog v-model="showAddTask">
     <addTask @close="showAddTask=false"></addTask>
    </q-dialog>
  </q-page>
</template>
  


<script>
import { mapGetters } from "vuex";
// import Task from '../components/Tasks/task.vue';
export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),

    // tasks(){
    //   return this.$store.getters['tasks/tasks'];
    // }
  },
  components: {
    mytask: require("components/Tasks/task.vue").default,
    addTask: require("components/Modals/AddTasks.vue").default,
  },

  data() {
    return {
      showAddTask:false
    };
  },
};
</script>

<style scoped>
</style>
