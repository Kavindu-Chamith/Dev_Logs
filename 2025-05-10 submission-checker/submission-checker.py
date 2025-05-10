 full_list = {
    "21CSE0190": "Rashmika", "22CSE0346": "Kalindu", "22CSE0348": "Heshan", "22CSE0349": "Dumindi",
    "22CSE0350": "Jayami", "22CSE0351": "Kalana", "22CSE0352": "Nirmal", "22CSE0353": "Nayana",
    "22CSE0354": "Yasindu", "22CSE0355": "Kasuni", "22CSE0356": "Janith Sasindu", "22CSE0358": "Udith",
    "22CSE0359": "Nisal", "22CSE0360": "Dilshan", "22CSE0361": "Achini", "22CSE0362": "Rusith",
    "22CSE0363": "Thirushi", "22CSE0364": "Navindu", "22CSE0365": "Hemalsha", "22CSE0366": "Sadeepa",
    "22CSE0367": "Avishka Nishada", "22CSE0368": "Dasun Kavinda", "22CSE0369": "Luthira", "22CSE0370": "Parami",
    "22CSE0371": "Janith Chamodya", "22CSE0372": "Kasun", "22CSE0373": "Dasun Praveena", "22CSE0374": "Suneth",
    "22CSE0375": "Kanishka", "22CSE0376": "Nusna", "22CSE0377": "Rumeshika", "22CSE0378": "Irosha",
    "22CSE0379": "Avishka Weerasinghe", "22CSE0380": "Thimaya", "22CSE0381": "Dilhara", "22CSE0382": "Nadun",
    "22CSE0383": "Pathum Jayasiri", "22CSE0384": "Vishwa", "22CSE0385": "Thidushan", "22CSE0386": "Malith",
    "22CSE0387": "Tharusha", "22CSE0388": "Pathum Piyumal", "22CSE0389": "Saajith", "22CSE0390": "Nistha",
    "22CSE0391": "Samni Hasnath", "22CSE0392": "Keshomigha", "22CSE0393": "Pavithar", "22CSE0394": "Mogith",
    "22CSE0395": "Renujaan", "22CSE0396": "Kajanika", "22CSE0397": "Nuha", "22CSE0398": "Rubashalini",
    "22CSE0400": "Abisegan", "22CSE0401": "Kathirsan", "22CSE0587": "Chamith", "22CSE0588": "Isuri",
    "22CSE0589": "Asma", "22CSE0595": "Lochani"
}

print("""
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃      STUDENT FORM SUBMISSION CHECKER       ┃
┃         Created by: Kavindu Chamith        ┃
┃          Version: 1.0                      ┃
┃      Check missing student submissions     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
""")

# Get submitted student numbers from user input
def get_submitted_students():
    submitted_list = set()
    print("Enter submitted student numbers (one per line, type 'done' to finish):")
    while True:
        student = input().strip()
        if student.lower() == 'done':
            break
        submitted_list.add(student.upper())  # Convert to uppercase to ignore case differences
    return submitted_list

# Find students who have not submitted the form
def find_missing_students():
    submitted_students = get_submitted_students()
    missing_students = {s.upper() for s in full_list.keys()} - submitted_students
    
    print("\nStudents who have not submitted the form:")
    for student in sorted(missing_students):
        print(f"{student} - {full_list[student]}")
      
find_missing_students()
