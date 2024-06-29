import Surreal, {RecordId, Table} from "surrealdb.js";

import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const db = new Surreal();

    // Function to initialize SurrealDB connection
    const initializeDB = async () => {
      try {
        await db.connect("http://127.0.0.1:8000/rpc"); // Adjust URL as per your SurrealDB setup
        await db.use({ namespace: "test", database: "test" }); // Optional: Select namespace/database
        await db.signin({ username: "root", password: "root" }); // Sign in if required
      } catch (error) {
        console.error("Error connecting to SurrealDB:", error);
      }
    };

    // Initialize SurrealDB on component mount
    onMounted(() => {
      initializeDB();
    });

    // Example functions to interact with SurrealDB
    const createPerson = async () => {
      try {
        let created = await db.create("person", {
          title: "Founder & CEO",
          name: { first: "Tobie", last: "Morgan Hitchcock" },
          marketing: true,
        });
        console.log("Created:", created);
      } catch (error) {
        console.error("Error creating person:", error);
      }
    };

    const updatePerson = async () => {
      try {
        let updated = await db.merge(new RecordId('person', 'jaime'), {
          marketing: true,
        });
        console.log("Updated:", updated);
      } catch (error) {
        console.error("Error updating person:", error);
      }
    };

    const selectPeople = async () => {
      try {
        let people = await db.select("person");
        console.log("People:", people);
      } catch (error) {
        console.error("Error selecting people:", error);
      }
    };

    return {
      createPerson,
      updatePerson,
      selectPeople,
    };
  },
});
