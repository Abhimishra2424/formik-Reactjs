import { db } from "./firebase";

// add data to firebase

 export const addfirebaseData = (values) => db.collection("student").add(values);


