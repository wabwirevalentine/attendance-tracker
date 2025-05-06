# 👩🏾‍🏫👨🏾‍🏫 Classroom Attendance Tracker

A simple React app to practice **state**, **callbacks**, and **event handling** using a classroom analogy.

## 🧑‍🤝‍🧑 Group Task

Your goal is to finish this attendance tracker app by completing the TODOs in each file.

The video below will give you a quick sneak into how your app is expected to look like:



---

## 🛠️ TODO Checklist

- [ ] In `App.jsx`, maintain a list of students and track attendance state for each.
- [ ] In `StudentList.jsx`, pass a callback to `Student` to handle attendance toggle.
- [ ] In `Student.jsx`, wire up a button or checkbox to call the toggle function via `props`.
- [ ] Display a summary: total present and absent students.
- [ ] Add styling to highlight who is present or absent.

---

## 🚀 Bonus

- [ ] Add a “Reset Attendance” button in `App.jsx`.
- [ ] Animate a student card when marked present.

---

## 📚 Group Reflection Questions

Each group should take time to reflect on these questions and discuss and document their understanding:

### ✅ 1. State Management (`useState`)

- What is the purpose of `useState` in this app?
- Why do we use a copy of the array (`prev.map(...)`) instead of modifying it directly?
- What happens if you call `setState` with the exact same object?

---

### ✅ 2. Events

- What event is triggered when you click the "Mark Present/Absent" button?
- How is this event connected to the `App` component's state?
- Can you describe the full flow from the button click to the UI update?

---

### ✅ 3. Props and Callbacks

- What props are passed from `App` → `StudentList` → `Student`?
- How does the `Student` component know what to do when the button is clicked?
- Why do we use callbacks instead of directly modifying state inside `Student.jsx`?

---

### ✅ 4. Component Design

- Which component is responsible for managing attendance data?
- Which component is *stateless*? Why?
- If we added a filter (e.g., "Show only present students"), where would the filtering logic go?

---

### ✅ 5. Bonus Thinking

- How would you implement a "Reset Attendance" feature?
- What could go wrong if we used the `index` of a student in the array as the React `key`?
- How would you modify this app to allow adding/removing students dynamically?

---


Happy coding! 🎯
