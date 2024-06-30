<script setup lang="ts">

// Import Layouts

// Import Components
import { RouterView } from 'vue-router';
import Card from '@/components/ui/card/Card.vue';
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb.vue';


</script>

<template>
    <div class="w-[450px]">
      <AspectRatio :ratio="16 / 9">
        <img src="..." alt="Image" class="rounded-md object-cover">
        
      </AspectRatio>
    </div>
</template>