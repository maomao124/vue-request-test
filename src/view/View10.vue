<template>
  <h3 v-if="student==null">暂无数据</h3>
  <h2 v-else>{{ JSON.stringify(student) }}</h2>
  <h2>id:{{ id }}</h2>
  <button @click="run(id++)">请求</button>
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

const id = ref(100);

const {data, loading, error, run} = useRequest<Student>((id: number) =>
        axios.get('/api/student/10001', {
          params: {
            id: id
          }
        }),
    {
      throttleInterval:500,
      manual: true,
      defaultParams: [id]
    })
const student = computed(() =>
{
  return data?.value || null
})
</script>

<style scoped>

</style>
