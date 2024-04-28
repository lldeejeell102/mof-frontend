<template>
    <div class="toggle-wrapper">
      <label class="toggle">
        <input 
            type="checkbox" 
            :checked="(mode === 'dark') ? 'checked' : false "
            @change="$emit('toggle')"
        />
        <span class="toggler round"></span>
    </label>
    <img src="../assets/darktheme.svg" width="25">
    </div>
</template>

<script>
    export default {
        props: ['mode']
    }
</script>

<style>
</style>