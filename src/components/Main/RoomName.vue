<script>
export default {
   props: ['index', 'name'],
};
</script>

<template>
   <div
      class="px-4 py-6 font-bold basis-1/5 flex-none border-b border-l border-black/40 flex items-center"
      :class="{ 'border-t': index === 0 }">
      {{ name }}
   </div>
</template>
