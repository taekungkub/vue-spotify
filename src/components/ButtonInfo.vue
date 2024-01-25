<template>
  <div class="dropdown">
    <div tabindex="0" role="button">
      <div class="rounded-full border-2 border-gray-300 w-10 h-10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-0 rounded-md mt-2 shadow w-52 bg-[#3E3E3E]">
      <div v-for="(item, index) in items" :key="index">
        <li class="p-1">
          <a class="hover:text-gray-300 text-gray-300 hover:!bg-[#5e5d5d] active:!bg-[#575757] px-4"> {{ item.title }}</a>
        </li>
        <hr class="border-0.5 border-gray-600" v-if="item.end === true" />
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"

const items = ref([
  { title: "Go to Playlist Radio", end: true },
  { title: "Collaborative Playlist" },
  { title: "Make Secret", end: true },
  { title: "Edit Details" },
  { title: "Report" },
  { title: "Delete", end: true },
  { title: "Create Similar Playlist" },
  { title: "Download" },
  { title: "Share" },
])
</script>

<style lang="scss" scoped></style>
