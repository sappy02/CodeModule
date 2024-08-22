// app.mjs
import { array1 } from "./data1.mjs";
import { array2 } from "./data2.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("dropdown");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    // Populate dropdown with items from array1
    array1.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        dropdown.appendChild(option);
    });

  // Button 1 action: Log selected item from array1
  button1.addEventListener('click', () => {
    const selectedId = dropdown.value;
    const selectedItem = array1.find(item => item.id == selectedId);
    console.log('Selected item from array1:', selectedItem);
  });

  // Button 2 action: Log all items from array2
  button2.addEventListener('click', () => {
    console.log('All items from array2:', array2);
  });
});


