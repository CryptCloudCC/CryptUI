<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Login</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink></NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  
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