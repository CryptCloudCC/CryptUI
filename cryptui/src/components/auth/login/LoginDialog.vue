<script setup lang="ts">
    import Dialog from '@/components/ui/dialog/Dialog.vue'

</script>


<template>
<Dialog>
    <DialogTrigger>
      Login
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Login to CryptHub</DialogTitle>
        <DialogDescription>
          Use your CryptHub account credentials to login.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button variant="outline">
          Login
        </Button>
      </DialogFooter>
    </DialogContent>
</Dialog>

</template>