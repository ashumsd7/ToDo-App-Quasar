import Vue from 'vue'
//above import is used for deleting task look at delete mutation it is used there
import { uid } from "quasar";
//this u-id is used when we are adding task




const state = {
  tasks: {
    'ID1': {
  
      name: "Go to shop",
      completed: false,
      dueDate: "2019/05/18",
      dueTime: "18:30"
    },
    'ID2': {
 
      name: "Go to Market",
      completed: false,
      dueDate: "2019/05/19",
      dueTime: "16:20"
    },
    'ID3': {
    
      name: "Go to Twitter",
      completed: false,
      dueDate: "2019/05/22",
      dueTime: "14:20"
    }
  },

 
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
    // console.log(state, tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    // delete state.tasks[id];
    Vue.delete(state.tasks, id);
  },
    AddTask(state, payload) {
     Vue.set(state.tasks,payload.id,payload.task)
  }
};

const actions = {
  updateTask({ commit }, payload) {
    // console.log(payload);
    commit("updateTask", payload);
    // alert("action")
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
    AddTask({ commit },taskData) {
      console.log(taskData);
        let payload = {
          id: uid(),
          task: taskData
        };
        commit('AddTask',payload)
  }
};

const getters = {
    tasks(state) {
        return state.tasks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
