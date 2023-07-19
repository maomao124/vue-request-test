<template>
  <h3 v-if="student==null">暂无数据</h3>
  <h2 v-else>{{ JSON.stringify(student) }}</h2>
  <h2>请求id：{{ id }}</h2>
  <br>
  <button @click="id--">-1</button>
  <button @click="id++">+1</button>
</template>

<script setup lang="ts">

import {useRequest} from "vue-request";
import axios from "axios";
import {computed, ref} from "vue";

interface Student
{
  id: number,
  name?: string,
  sex?: string,
  age?: number,
}

const id = ref(10001)

const {data, loading, error} = useRequest<Student>(() => axios.get('/api/student/' + id.value),
    {
      refreshDeps: id,
    })

const student = computed(() =>
{
  return data?.value || null
})
</script>

<style scoped>

</style>
