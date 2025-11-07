import React from 'react';

function TypeScript() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #E3F2FD, #FFFDE7)',
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
      color: '#1976D2',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#1565C0',
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
      backgroundColor: '#1976D2',
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
        <h1 style={styles.title}>🟦 TypeScript — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>TypeScript</strong> is a <strong>superset of JavaScript</strong> that adds 
          <strong> static typing</strong> and <strong>compile-time error checking</strong>.  
          It is designed to improve large-scale application development and works seamlessly with JavaScript code.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>⚡ Adds static typing to JavaScript</li>
          <li>🧩 Supports interfaces, classes, and modules</li>
          <li>🔄 Compiles to plain JavaScript</li>
          <li>📦 Improves maintainability in large projects</li>
          <li>💻 Compatible with JavaScript libraries and frameworks</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Variables and Types</h2>
        <pre style={styles.codeBlock}>
{`let name: string = "Abhilash";
let age: number = 21;
let isStudent: boolean = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);`}
        </pre>

        <h2 style={styles.subtitle}>💡 Example 2: Function with Type Annotations</h2>
        <pre style={styles.codeBlock}>
{`function add(a: number, b: number): number {
  return a + b;
}
console.log("Sum:", add(10, 20));`}
        </pre>

        <h2 style={styles.subtitle}>📦 Example 3: Interface</h2>
        <pre style={styles.codeBlock}>
{`interface Student {
  name: string;
  grade: string;
}

const s1: Student = { name: "Abhilash", grade: "A" };
console.log(s1);`}
        </pre>

        <h2 style={styles.subtitle}>🔁 Example 4: Array with Type</h2>
        <pre style={styles.codeBlock}>
{`let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);`}
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
              <td style={styles.td}>Static Typing</td>
              <td style={styles.td}>Type errors caught at compile time</td>
              <td style={styles.td}>let x: number = 10;</td>
            </tr>
            <tr>
              <td style={styles.td}>Interface</td>
              <td style={styles.td}>Defines object structure</td>
              <td style={styles.td}>interface Student{`{}`}</td>
            </tr>
            <tr>
              <td style={styles.td}>Function Types</td>
              <td style={styles.td}>Defines parameter and return types</td>
              <td style={styles.td}>{`function add(a:number, b:number): number{}`}</td>
            </tr>
            <tr>
              <td style={styles.td}>Array Types</td>
              <td style={styles.td}>Specifies array element type</td>
              <td style={styles.td}>let arr: string[]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TypeScript;
