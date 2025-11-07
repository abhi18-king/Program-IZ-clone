import React from 'react';

function JavaScript() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #FFF3E0, #E1F5FE)',
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
        <h1 style={styles.title}>⚡ JavaScript — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>JavaScript (JS)</strong> is a <strong>high-level, interpreted programming language</strong> 
          used to make web pages <strong>interactive</strong>. It works alongside HTML and CSS to create dynamic content.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>🌐 Runs in web browsers and server-side (Node.js)</li>
          <li>⚡ Interpreted, dynamic, and lightweight</li>
          <li>🧩 Supports object-oriented, functional, and event-driven programming</li>
          <li>🔄 Manipulates HTML & CSS via DOM</li>
          <li>📦 Large ecosystem: frameworks like React, Angular, Vue</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Hello World</h2>
        <pre style={styles.codeBlock}>
{`console.log("Hello, JavaScript!");`}
        </pre>

        <h2 style={styles.subtitle}>💡 Example 2: Variables</h2>
        <pre style={styles.codeBlock}>
{`let name = "Abhilash";
const age = 21;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);`}
        </pre>

        <h2 style={styles.subtitle}>📦 Example 3: Function</h2>
        <pre style={styles.codeBlock}>
{`function add(a, b) {
  return a + b;
}
console.log("Sum:", add(10, 20));`}
        </pre>

        <h2 style={styles.subtitle}>🔁 Example 4: Loop</h2>
        <pre style={styles.codeBlock}>
{`for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}`}
        </pre>

        <h2 style={styles.subtitle}>⚙️ Example 5: Conditional</h2>
        <pre style={styles.codeBlock}>
{`let num = 10;
if (num % 2 === 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}`}
        </pre>

        <h2 style={styles.subtitle}>🧱 Example 6: Object</h2>
        <pre style={styles.codeBlock}>
{`const student = {
  name: "Abhilash",
  grade: "A",
  display: function() {
    console.log("Name:", this.name, "Grade:", this.grade);
  }
};
student.display();`}
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
              <td style={styles.td}>let, const, var</td>
            </tr>
            <tr>
              <td style={styles.td}>Functions</td>
              <td style={styles.td}>Reusable blocks of code</td>
              <td style={styles.td}>function add(a,b){}</td>
            </tr>
            <tr>
              <td style={styles.td}>Objects</td>
              <td style={styles.td}>Key-value pairs</td>
              <td style={styles.td}>{`{name:"Abhilash"}`}</td>
            </tr>
            <tr>
              <td style={styles.td}>Loops</td>
              <td style={styles.td}>Execute code repeatedly</td>
              <td style={styles.td}>for, while</td>
            </tr>
            <tr>
              <td style={styles.td}>Conditional</td>
              <td style={styles.td}>Decision making</td>
              <td style={styles.td}>if-else</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JavaScript;
