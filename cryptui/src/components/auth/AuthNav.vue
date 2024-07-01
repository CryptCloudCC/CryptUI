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
import { Button } from '@/components/ui/button'
import ForgotPassword from '@/pages/auth/ForgotPassword.vue';
import Register from '@/pages/auth/Register.vue';
import Login from '@/pages/auth/Login.vue';

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
          <NavigationMenuLink>
            <RouterLink to="/login">
                Login
            </RouterLink>
          </NavigationMenuLink>

        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Register</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>
            <RouterLink to="/register">
                Register
            </RouterLink>
          </NavigationMenuLink>
    </NavigationMenuList>
  </NavigationMenu>
  

</template>