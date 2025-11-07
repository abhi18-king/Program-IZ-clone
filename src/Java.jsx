import React from 'react';

function Java() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #FFF3E0, #E8F5E9)',
      minHeight: '100vh',
      padding: '40px',
      color: '#333',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      padding: '30px',
      maxWidth: '900px',
      margin: 'auto',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      color: '#F57C00',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#EF6C00',
      marginTop: '25px',
      marginBottom: '10px',
    },
    paragraph: {
      lineHeight: '1.8',
      fontSize: '1rem',
    },
    list: {
      marginLeft: '20px',
      lineHeight: '1.8',
    },
    codeBlock: {
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      padding: '15px',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      marginTop: '10px',
      fontSize: '0.9rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#F57C00',
      color: 'white',
      padding: '10px',
      border: '1px solid #ccc',
    },
    td: {
      border: '1px solid #ccc',
      padding: '10px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>☕ Java — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>Java</strong> is a <strong>high-level, object-oriented, and platform-independent programming language</strong>.  
          It is widely used for <strong>web development, mobile apps, desktop applications,</strong> and <strong>enterprise software</strong>.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>☑ Object-Oriented Programming (OOP)</li>
          <li>⚡ Platform-independent (Write Once, Run Anywhere)</li>
          <li>🔄 Automatic memory management (Garbage Collection)</li>
          <li>📦 Rich standard library</li>
          <li>🌐 Widely used for enterprise, web, and Android applications</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Hello World</h2>
        <pre style={styles.codeBlock}>
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Hello, Java!`}</pre>

        <h2 style={styles.subtitle}>💡 Example 2: Variables and Data Types</h2>
        <pre style={styles.codeBlock}>
{`int age = 21;
String name = "Abhilash";
boolean isStudent = true;

System.out.println("Name: " + name);
System.out.println("Age: " + age);
System.out.println("Student: " + isStudent);`}
        </pre>

        <h2 style={styles.subtitle}>📦 Example 3: Loops</h2>
        <pre style={styles.codeBlock}>
{`for (int i = 1; i <= 5; i++) {
    System.out.println("Number: " + i);
}`}
        </pre>

        <h2 style={styles.subtitle}>🔁 Example 4: Conditional Statements</h2>
        <pre style={styles.codeBlock}>
{`int num = 10;
if (num % 2 == 0) {
    System.out.println(num + " is even");
} else {
    System.out.println(num + " is odd");
}`}
        </pre>

        <h2 style={styles.subtitle}>🧩 Example 5: Class and Object</h2>
        <pre style={styles.codeBlock}>
{`class Student {
    String name;
    String grade;

    Student(String name, String grade) {
        this.name = name;
        this.grade = grade;
    }

    void display() {
        System.out.println("Name: " + name + ", Grade: " + grade);
    }
}

Student s1 = new Student("Abhilash", "A");
s1.display();`}
        </pre>

        <h2 style={styles.subtitle}>📘 Summary Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Variables</td>
              <td style={styles.td}>Store data values</td>
              <td style={styles.td}>int age = 21;</td>
            </tr>
            <tr>
              <td style={styles.td}>Loops</td>
              <td style={styles.td}>Repeat code multiple times</td>
              <td style={styles.td}>for, while</td>
            </tr>
            <tr>
              <td style={styles.td}>Conditionals</td>
              <td style={styles.td}>Decision making</td>
              <td style={styles.td}>if-else</td>
            </tr>
            <tr>
              <td style={styles.td}>Classes & Objects</td>
              <td style={styles.td}>OOP structure</td>
              <td style={styles.td}>class Student {`{}`}</td>
            </tr>
            <tr>
              <td style={styles.td}>Methods</td>
              <td style={styles.td}>Reusable functions inside class</td>
              <td style={styles.td}>void display(){}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Java;
