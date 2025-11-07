import React from 'react';

function Rust() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #fff8e1, #e3f2fd)',
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
      color: '#BF360C',
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
      backgroundColor: '#BF360C',
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
        <h1 style={styles.title}>🦀 Rust — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>Rust</strong> is a <strong>systems programming language</strong> developed by
          <strong> Mozilla Research</strong> in <strong>2010</strong>. It is known for providing
          <strong> memory safety, high performance,</strong> and <strong>thread safety</strong> without
          a garbage collector. Rust is commonly used for <strong>operating systems, game engines,</strong>
          and <strong>web assembly</strong>.
        </p>

        <h2 style={styles.subtitle}>⚙️ Key Features</h2>
        <ul style={styles.list}>
          <li>🧠 Memory Safety through Ownership system</li>
          <li>⚡ High performance comparable to C and C++</li>
          <li>🔒 Thread-safe concurrency</li>
          <li>🧩 Cross-platform (Windows, macOS, Linux)</li>
          <li>🧱 Compiled for fast and efficient binaries</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Hello World</h2>
        <pre style={styles.codeBlock}>
{`fn main() {
    println!("Hello, World!");
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Hello, World!`}</pre>

        <h2 style={styles.subtitle}>💬 Example 2: Variables and Data Types</h2>
        <pre style={styles.codeBlock}>
{`fn main() {
    let name = "Abhilash"; // Immutable variable
    let mut age = 21;       // Mutable variable

    println!("Name: {}", name);
    println!("Age: {}", age);

    age = 22;
    println!("Updated Age: {}", age);
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Name: Abhilash
Age: 21
Updated Age: 22`}
        </pre>

        <h2 style={styles.subtitle}>🔢 Example 3: Functions in Rust</h2>
        <pre style={styles.codeBlock}>
{`fn add(a: i32, b: i32) -> i32 {
    return a + b;
}

fn main() {
    let sum = add(10, 20);
    println!("Sum is: {}", sum);
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Sum is: 30`}</pre>

        <h2 style={styles.subtitle}>🧩 Example 4: Control Flow</h2>
        <pre style={styles.codeBlock}>
{`fn main() {
    let number = 10;

    if number % 2 == 0 {
        println!("{} is even", number);
    } else {
        println!("{} is odd", number);
    }
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`10 is even`}</pre>

        <h2 style={styles.subtitle}>🧱 Example 5: Loops</h2>
        <pre style={styles.codeBlock}>
{`fn main() {
    for i in 1..6 {
        println!("Number: {}", i);
    }
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Number: 1
Number: 2
Number: 3
Number: 4
Number: 5`}
        </pre>

        <h2 style={styles.subtitle}>🧠 Example 6: Ownership Concept</h2>
        <pre style={styles.codeBlock}>
{`fn main() {
    let s1 = String::from("Rust");
    let s2 = s1; // Ownership moves to s2

    // println!("{}", s1); // ❌ Error: s1 no longer valid
    println!("{}", s2); // ✅ Works fine
}`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Rust`}</pre>

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
              <td style={styles.td}>Systems programming language</td>
              <td style={styles.td}>Compiled</td>
            </tr>
            <tr>
              <td style={styles.td}>Memory Safety</td>
              <td style={styles.td}>No garbage collector</td>
              <td style={styles.td}>Ownership system</td>
            </tr>
            <tr>
              <td style={styles.td}>Concurrency</td>
              <td style={styles.td}>Thread-safe operations</td>
              <td style={styles.td}>std::thread</td>
            </tr>
            <tr>
              <td style={styles.td}>Performance</td>
              <td style={styles.td}>Comparable to C++</td>
              <td style={styles.td}>Native binaries</td>
            </tr>
            <tr>
              <td style={styles.td}>Developed By</td>
              <td style={styles.td}>Mozilla Research</td>
              <td style={styles.td}>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rust;
