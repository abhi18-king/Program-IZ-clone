import React from 'react';

function Kotlin() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #fce4ec, #e3f2fd)',
      minHeight: '100vh',
      padding: '40px',
      color: '#333',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      padding: '30px',
      maxWidth: '800px',
      margin: 'auto',
    },
    title: {
      color: '#6A1B9A',
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '15px',
    },
    subtitle: {
      color: '#1976D2',
      marginTop: '20px',
      fontSize: '1.3rem',
    },
    codeBlock: {
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '8px',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      marginTop: '10px',
    },
    list: {
      marginLeft: '20px',
      lineHeight: '1.8',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#6A1B9A',
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
        <h1 style={styles.title}>💜 Kotlin — Definition and Examples</h1>
        <p>
          <strong>Kotlin</strong> is a <strong>modern, statically typed, cross-platform</strong> programming language developed by <strong>JetBrains</strong> in <strong>2011</strong>.
          It runs on the <strong>Java Virtual Machine (JVM)</strong> and is <strong>fully interoperable with Java</strong>.
          Kotlin is officially supported by <strong>Google</strong> for Android app development.
        </p>

        <h2 style={styles.subtitle}>⚙️ Key Features</h2>
        <ul style={styles.list}>
          <li>✅ Interoperable with Java</li>
          <li>💡 Concise syntax and reduced boilerplate</li>
          <li>🧠 Null safety prevents runtime errors</li>
          <li>🔁 Supports object-oriented and functional programming</li>
          <li>🌐 Cross-platform (Android, Web, JVM, Native)</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Hello World</h2>
        <pre style={styles.codeBlock}>
{`fun main() {
    println("Hello, World!")
}`}
        </pre>

        <h2 style={styles.subtitle}>🧮 Example 2: Adding Two Numbers</h2>
        <pre style={styles.codeBlock}>
{`fun main() {
    print("Enter first number: ")
    val num1 = readLine()!!.toInt()

    print("Enter second number: ")
    val num2 = readLine()!!.toInt()

    val sum = num1 + num2
    println("The sum is: $sum")
}`}
        </pre>

        <h2 style={styles.subtitle}>🔧 Example 3: Function Example</h2>
        <pre style={styles.codeBlock}>
{`fun add(a: Int, b: Int): Int {
    return a + b
}

fun main() {
    val result = add(10, 25)
    println("Sum is: $result")
}`}
        </pre>

        <h2 style={styles.subtitle}>🏫 Example 4: Class Example</h2>
        <pre style={styles.codeBlock}>
{`class Student(val name: String, val age: Int) {
    fun displayInfo() {
        println("Name: $name")
        println("Age: $age")
    }
}

fun main() {
    val student1 = Student("Abhilash", 21)
    student1.displayInfo()
}`}
        </pre>

        <h2 style={styles.subtitle}>📘 Summary Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Developer</td>
              <td style={styles.td}>JetBrains</td>
            </tr>
            <tr>
              <td style={styles.td}>First Released</td>
              <td style={styles.td}>2011</td>
            </tr>
            <tr>
              <td style={styles.td}>Type System</td>
              <td style={styles.td}>Statically Typed</td>
            </tr>
            <tr>
              <td style={styles.td}>Execution</td>
              <td style={styles.td}>Runs on JVM</td>
            </tr>
            <tr>
              <td style={styles.td}>Used For</td>
              <td style={styles.td}>Android, Web, Desktop, Server-side</td>
            </tr>
            <tr>
              <td style={styles.td}>Interoperable With</td>
              <td style={styles.td}>Java</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Kotlin
