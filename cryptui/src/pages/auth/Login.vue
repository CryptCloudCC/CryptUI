<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// Import SDKs
import { Surreal, RecordId, Table } from 'surrealdb.js';

const surrealDbInstance = new Surreal();

async function AuthenticateUserWithSurrealDB(surrealDbInstance: any, username: string, password: string) {

    try {
        await surrealDbInstance.connect("http://127.0.0.1:8000/rpc"); // Adjust URL as per your SurrealDB setup
        await surrealDbInstance.use({ namespace: "test", database: "test" }); // Optional: Select namespace/database
        await surrealDbInstance.signin({ username: username, password: password }); // Sign in if required
        console.log("Authenticated with SurrealDB");
    } catch (error) {
        console.error("Error connecting to SurrealDB:", error);
    }


}
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        Login
      </CardTitle>
      <CardDescription>
        Enter your email below to login to your account.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">
        Sign in
      </Button>
    </CardFooter>
  </Card>
</template>