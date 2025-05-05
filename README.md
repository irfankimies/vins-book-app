📚 Vins Book App
A Next.js application and SQL task submission developed for the Software Engineer Technical Test at Vin's Automotive Group.

This app fetches and displays book data from the FakerAPI, and includes SQL tasks demonstrating database querying and schema design.

📦 Part 1: Next.js Application
✨ Features
📖 Book List Page
Displays 10 books in a table format, including title, author, genre, description, ISBN, published date, and publisher. Each title links to its detailed page.

🔍 Book Detail Page
Shows comprehensive details for a selected book, including a cover image.

⚠️ Error Handling
Gracefully handles fetch failures and missing data with user-friendly messages.

📱 Responsive Design
Styled with Tailwind CSS for a clean and responsive UI.

⚙️ Tech Stack
Area	Technology
Framework	Next.js
API	FakerAPI
Styling	Tailwind CSS
Date Utility	date-fns
Language	TypeScript

🛠 Setup Instructions
✅ Prerequisites
Node.js (v16 or higher)

npm or yarn

📥 Installation
bash
Copy
Edit
git clone https://github.com/irfankimies/vins-book-app.git
cd vins-book-app

# Install dependencies
npm install

# Start the development server
npm run dev
Open http://localhost:3000/book in your browser.

🗂 Project Structure
txt
Copy
Edit
app/book/page.tsx        - Book list page
app/book/[id]/page.tsx   - Book detail page
app/globals.css          - Global styles (Tailwind CSS)
💡 Notes on Implementation
Dynamic Mock Data
FakerAPI returns different data on each fetch. Detail pages use _seed=${params.id} for consistency, though variations may still occur.

Image Source
Uses Picsum Photos with book ID as seed.

Potential Improvement
To stabilize book data, a local JSON file or API caching could be used.

⚠️ Known Limitations
Data inconsistency due to FakerAPI’s dynamic nature.

Requires an internet connection to fetch book data.

🧪 How to Test
Visit /book to view the book list.

Click a book title to view details (e.g., /book/1).

Test error handling by:

Disconnecting your internet.

Navigating to an invalid book ID (e.g., /book/9999).

🧾 Part 2: SQL Tasks
SQL scripts demonstrate data retrieval and schema design using a MySQL-compatible database.

📊 Task 3a_i: Department Employee Count
File: task_3a_i.sql

Description: Counts employees in each department.

🔍 Features
Joins Employee and Department tables.

Groups by Department.Code.

Outputs: DepartmentCode, TotalEmployees.

💰 Task 3a_ii: Employee Salary Filter
File: task_3a_ii.sql

Description: Lists employees with salary between 3000–4000.

🔍 Features
Joins Employee and Department.

Filters with BETWEEN 3000 AND 4000.

Orders by Department.Code and Employee.Name.

Outputs: EmployeeCode, Name, Salary, DepartmentCode.

🎓 Task 3b: Academic Database Schema
File: task_3b.sql

Description: Schema for managing subjects, classes, students, and enrollments.

🏗 Tables
Subjects: Subject names (auto-increment ID).

Semesters: Year, term number, date ranges.

Classes: Subject, semester, class number, timing.

Students: Name, email, DOB.

Enrollments: Student enrollment status (active, dropped, completed).

🛡 Constraints
Primary & foreign keys

Unique constraints

Checks for valid data (e.g., term_number BETWEEN 1 AND 4)

🧪 Sample Data
Default subjects inserted: Math, Science, English

Sample semester insert is commented out for flexible testing.

🧪 How to Test SQL Tasks
🧱 Database Setup
Use a MySQL-compatible database.

Run task_3b.sql to set up schema and data.

📈 Execute Queries
Ensure Employee and Department tables exist.

Run task_3a_i.sql and task_3a_ii.sql in a SQL client.

🧪 Verify Schema
Check constraints, data types, and sample data.

Try inserting additional sample rows to test integrity.

📬 Contact
For questions or feedback, please reach out via [your email] or open an issue in the repository.