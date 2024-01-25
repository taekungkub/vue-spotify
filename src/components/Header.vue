<template>
  <div>
    <div class="sm:flex items-end">
      <div>
        <div class="avatar w-full max-w-[250px] block mx-auto">
          <div class="w-full rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>

      <div class="px-4 sm:px-8 flex-1">
        <div class="text-base text-white tracking-wider">PLAYLIST</div>
        <div class="text-6xl text-white font-bold">Driving</div>
        <div class="text-sm mt-4 text-gray-400">Pop jams for the car</div>
        <div class="text-sm mt-2 text-gray-400">Created by: <span class="text-white">Ari Vaniderstine</span> 28 songs, 1 hr 38 min</div>
        <div class="flex justify-between items-center mt-6">
          <div class="flex gap-4 items-center"><ButtonPlay /> <ButtonInfo /></div>

          <div class="text-gray-400 text-sm">
            <span class="tracking-wider">FOLLOWERS</span>
            <br />
            <span class="float-right">0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPlay from "./ButtonPlay.vue"
import ButtonInfo from "./buttonInfo.vue"
</script>

<style lang="scss" scoped></style>
