<template>
  <div class="container mx-auto p-3">
    <Header />
    <div class="content px-4 sm:px-8 mt-10">
      <div class="flex justify-between">
        <Search />
        <ToggleDownload />
      </div>

      <TableSong :items="songs" @success="getAllSong()" />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue"
import Search from "./components/Search.vue"
import ToggleDownload from "./components/ToggleDownload.vue"
import TableSong from "./components/TableSong.vue"
import useSong from "./hooks/useSong"
import { onMounted } from "vue"
const { addSong, songs, getAllSong } = useSong()

onMounted(() => {
  addSong()
})
</script>

<style scoped></style>
