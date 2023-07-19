<template>
  <h3 v-if="student==null">暂无数据</h3>
  <h2 v-else>{{ JSON.stringify(student) }}</h2>
  <h2>id:{{ id }}</h2>
  <button @click="run(id++)">请求</button>
</template>

<script setup lang="ts">

import {useRequest, clearCache} from "vue-request";
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
      manual: true,
      defaultParams: [id],
      cacheKey: "10001",
      cacheTime: 20 * 60 * 1000
    })
const student = computed(() =>
{
  return data?.value || null
})

function clearStudentCache(): void
{
  clearCache("10001")
}

function clearAllCache()
{
  clearCache();
}

</script>

<style scoped>

</style>
