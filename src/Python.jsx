import React from 'react';

function Python() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #e0f7fa, #fff3e0)',
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
      color: '#0277BD',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#F57C00',
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
      backgroundColor: '#0277BD',
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
        <h1 style={styles.title}>🐍 Python — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>Python</strong> is a <strong>high-level, interpreted</strong>, and 
          <strong> general-purpose programming language</strong> created by <strong>Guido van Rossum</strong> 
          in <strong>1991</strong>. It emphasizes <strong>code readability</strong> and supports multiple 
          paradigms including <strong>object-oriented, procedural,</strong> and <strong>functional programming</strong>.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>🧠 Easy to learn and read syntax</li>
          <li>⚡ Interpreted and dynamically typed</li>
          <li>🧩 Extensive libraries and frameworks</li>
          <li>🌐 Used in web development, AI, data science, automation</li>
          <li>💾 Open-source and cross-platform</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Hello World</h2>
        <pre style={styles.codeBlock}>
{`print("Hello, World!")`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Hello, World!`}</pre>

        <h2 style={styles.subtitle}>💬 Example 2: Variables and Data Types</h2>
        <pre style={styles.codeBlock}>
{`name = "Abhilash"
age = 21
is_student = True

print("Name:", name)
print("Age:", age)
print("Student:", is_student)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Name: Abhilash
Age: 21
Student: True`}
        </pre>

        <h2 style={styles.subtitle}>🔢 Example 3: Functions</h2>
        <pre style={styles.codeBlock}>
{`def add(a, b):
    return a + b

result = add(10, 20)
print("Sum is:", result)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Sum is: 30`}</pre>

        <h2 style={styles.subtitle}>🔁 Example 4: Loops</h2>
        <pre style={styles.codeBlock}>
{`for i in range(1, 6):
    print("Number:", i)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Number: 1
Number: 2
Number: 3
Number: 4
Number: 5`}
        </pre>

        <h2 style={styles.subtitle}>⚙️ Example 5: Conditional Statements</h2>
        <pre style={styles.codeBlock}>
{`num = 10

if num % 2 == 0:
    print(f"{num} is even")
else:
    print(f"{num} is odd")`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`10 is even`}</pre>

        <h2 style={styles.subtitle}>🧱 Example 6: Classes and Objects</h2>
        <pre style={styles.codeBlock}>
{`class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def display(self):
        print(f"Name: {self.name}, Grade: {self.grade}")

s1 = Student("Abhilash", "A")
s1.display()`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Name: Abhilash, Grade: A`}</pre>

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
              <td style={styles.td}>Type</td>
              <td style={styles.td}>High-level, Interpreted</td>
              <td style={styles.td}>Python</td>
            </tr>
            <tr>
              <td style={styles.td}>Created By</td>
              <td style={styles.td}>Guido van Rossum</td>
              <td style={styles.td}>1991</td>
            </tr>
            <tr>
              <td style={styles.td}>Paradigm</td>
              <td style={styles.td}>OOP, Functional, Procedural</td>
              <td style={styles.td}>Flexible</td>
            </tr>
            <tr>
              <td style={styles.td}>Use Case</td>
              <td style={styles.td}>AI, Web, Data Science</td>
              <td style={styles.td}>NumPy, Flask, TensorFlow</td>
            </tr>
            <tr>
              <td style={styles.td}>Typing</td>
              <td style={styles.td}>Dynamic</td>
              <td style={styles.td}>No need to declare variable types</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Python;
