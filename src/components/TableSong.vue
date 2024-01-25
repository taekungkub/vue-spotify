<template>
  <div>
    <div class="overflow-x-auto">
      <table class="table !text-gray-400">
        <thead class="text-gray-500">
          <tr class="border-none">
            <th></th>
            <th class="tracking-wide">TITLE</th>
            <th class="tracking-wide">TITLE</th>
            <th class="tracking-wide">ALBUM</th>
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </th>
            <th class="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-y border-gray-700 p-2 hover:bg-[#3E3E3E]"
            v-for="(item, index) in props.items"
            :key="index"
            @click="handleUpdateSongToPlaylist(item)"
          >
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
                v-if="playList.find((v) => v.id === item.id)"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
                v-else
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </td>
            <td class="text-gray-300">
              {{ item.title }}
            </td>
            <td class="text-gray-300">
              {{ item.title }}
            </td>
            <td class="text-gray-300">
              {{ item.album }}
            </td>
            <td>
              {{ dayjs(item.daet).format("DD/MM/YYYY") }}
            </td>
            <td class="text-right">
              {{ item.time }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import useSong from "../hooks/useSong"
import dayjs from "dayjs"

const { playList, updateToPlayList } = useSong()

const props = defineProps({
  items: Array,
})

const emit = defineEmits(["success"])

async function handleUpdateSongToPlaylist(data) {
  try {
    await updateToPlayList(data)
    emit("success")
  } catch (error) {}
}
</script>

<style lang="scss" scoped></style>
