<template>
  <h3 v-if="student==null">暂无数据</h3>
  <h2 v-else>{{ JSON.stringify(student) }}</h2>
</template>

<script setup lang="ts">

import {useRequest} from "vue-request";
import axios from "axios";
import {computed} from "vue";

interface Student
{
  id: number,
  name?: string,
  sex?: string,
  age?: number,
}

const {data, loading, error} = useRequest<Student>(() => axios.get('/api/student/10001'),
    {
      loadingDelay: 500,
    })

const student = computed(() =>
{
  return data?.value || null
})
</script>

<style scoped>

</style>
