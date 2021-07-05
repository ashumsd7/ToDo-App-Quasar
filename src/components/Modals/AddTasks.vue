<template>
    <q-card>
      <q-card-section class="row">
        <div  class="text-h6">ADD TASK</div>
        <q-space />
        <q-btn push  v-close-popup round icon="close" />
      </q-card-section>

      <form @submit.prevent="submitData">
        <q-card-section class="q-pt-none">
          <div class="row q-mb-sm">
            <q-input
              square
              filled
              v-model="tasksData.name"
              :rules="[(val) => !!val || 'You are here to add task!']"
              class="col"
              ref="name"
              label="Task Name"
              autofocus
            />
          </div>

          <div class="row q-mb-sm">
            <q-input label="Due Date" square filled v-model="tasksData.dueDate">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="tasksData.dueDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div   class="row q-mb-sm">
            <q-input  label="Due Time" square filled v-model="tasksData.dueTime">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="tasksData.dueTime">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            type="submit"
           
            label="ADD TASK"
            color="primary"
            
          />
        </q-card-actions>
      </form>
    </q-card>

</template>

<script>
export default {
    emits:['close'],
  data() {
    return {
      tasksData: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false,
      },
    };
  },

  methods: {
    submitData() {
      this.$refs.name.validate();
      if(!this.$refs.name.hasError){
          this.submitTask();
      }
    },
    submitTask(){
          this.$store.dispatch("tasks/AddTask", this.tasksData);
          this.$emit('close')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>