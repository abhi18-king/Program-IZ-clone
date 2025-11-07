import React from 'react';

function C() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #FFF8E1, #E8F5E9)',
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
      color: '#388E3C',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#2E7D32',
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
      backgroundColor: '#388E3C',
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
        <h1 style={styles.title}>🔹 C — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>C</strong> is a <strong>high-level, procedural programming language</strong> developed in the 1970s.  
          It is widely used for <strong>system programming, embedded systems,</strong> and <strong>developing operating systems</strong>.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>⚡ Procedural programming language</li>
          <li>🧩 Efficient and fast, suitable for system-level programming</li>
          <li>📦 Supports functions, structures, and pointers</li>
          <li>🌐 Portable across platforms</li>
          <li>💻 Foundation for many languages (C++, Java, C#)</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Hello World</h2>
        <pre style={styles.codeBlock}>
{`#include <stdio.h>

int main() {
    printf("Hello, C!\\n");
    return 0;
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Hello, C!`}</pre>

        <h2 style={styles.subtitle}>💡 Example 2: Variables and Data Types</h2>
        <pre style={styles.codeBlock}>
{`int age = 21;
char name[] = "Abhilash";
float score = 95.5;

printf("Name: %s\\n", name);
printf("Age: %d\\n", age);
printf("Score: %.1f\\n", score);`}
        </pre>

        <h2 style={styles.subtitle}>📦 Example 3: Conditional Statement</h2>
        <pre style={styles.codeBlock}>
{`int num = 10;
if (num % 2 == 0) {
    printf("%d is even\\n", num);
} else {
    printf("%d is odd\\n", num);
}`}
        </pre>

        <h2 style={styles.subtitle}>🔁 Example 4: Loop</h2>
        <pre style={styles.codeBlock}>
{`for (int i = 1; i <= 5; i++) {
    printf("Number: %d\\n", i);
}`}
        </pre>

        <h2 style={styles.subtitle}>🧩 Example 5: Function</h2>
        <pre style={styles.codeBlock}>
{`int add(int a, int b) {
    return a + b;
}

int sum = add(10, 20);
printf("Sum: %d\\n", sum);`}
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
              <td style={styles.td}>Functions</td>
              <td style={styles.td}>Reusable blocks of code</td>
              <td style={styles.td}>int add(int a,int b){}</td>
            </tr>
            <tr>
              <td style={styles.td}>Pointers</td>
              <td style={styles.td}>Store memory addresses</td>
              <td style={styles.td}>int *p = &age;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default C;
