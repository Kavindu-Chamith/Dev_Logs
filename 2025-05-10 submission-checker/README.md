# Student Form Submission Checker

This is a simple Python script I wrote as the **Batch Representative** of the Software Engineering department to help manage student submissions for Google Forms.

---

## 📋 Description

When I share Google Forms with my batch, it’s sometimes difficult to track **which students have not filled out the form on time**.  
Manually checking who’s missing takes time — so this script helps automate that process.

You provide:
✅ A list of student numbers who submitted the form (Since I’m getting the students’ numbers from the Google Form, I only need to copy and paste all the numbers into this)  
✅ The script compares against the full class list

It then shows you:
🚨 **Which students have NOT submitted yet**

---

## 💡 How It Works

- The script has a predefined `full_list` dictionary with:
    - Student numbers (like `22CSE0346`)
    - Student names (like `Kalindu`)

- You run the script and type:
    - Each student number who has already submitted (one per line)
    - Type `done` when finished

- The script calculates who’s missing and prints:
    ```
    Students who have not submitted the form:
    22CSE0350 - Jayami
    22CSE0352 - Nirmal
    ...
    ```

---
