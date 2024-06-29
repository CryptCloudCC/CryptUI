<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        Register
      </CardTitle>
      <CardDescription>
        Fill in the details below to create a new account.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid gap-2">
        <Label for="name">Name</Label>
        <Input id="name" type="text" placeholder="Your Name" required />
      </div>
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" placeholder="********" required />
      </div>
      <div class="grid gap-2">
        <Label for="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" placeholder="********" required />
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">
        Register
      </Button>
    </CardFooter>
  </Card>
</template>
