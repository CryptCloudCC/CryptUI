<script setup lang="ts">
    import Dialog from '@/components/ui/dialog/Dialog.vue'
    
</script>


<template>
  <Dialog>
    <DialogTrigger>
      Register
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Register with CryptHub</DialogTitle>
        <DialogDescription>
          Create a new CryptHub account.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button variant="outline">
          Register
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>


</template>