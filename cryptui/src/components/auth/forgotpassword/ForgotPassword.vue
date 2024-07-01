<script setup lang="ts">
import Dialog from '@/components/ui/dialog/Dialog.vue'

</script>


<template>
      <Dialog>
    <DialogTrigger>
      Forgot Password
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogDescription>
          Enter your email address and we will send you a link to reset your password.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button variant="outline">
          Forgot Password
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>