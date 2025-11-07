import React from 'react';

function Ruby() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #ffe0e0, #fff3e0)',
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
      color: '#D32F2F',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#1976D2',
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
      backgroundColor: '#D32F2F',
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
        <h1 style={styles.title}>💎 Ruby — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>Ruby</strong> is a <strong>high-level, interpreted</strong>, and
          <strong> object-oriented programming language</strong> created by <strong>Yukihiro Matsumoto</strong> (Matz)
          in <strong>1995</strong>. It focuses on simplicity and productivity with an elegant syntax that is easy to read and write.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>🧠 Fully Object-Oriented — Everything is an object.</li>
          <li>⚡ Dynamic Typing and Duck Typing.</li>
          <li>💬 Easy-to-read syntax similar to English.</li>
          <li>🌐 Used in Web Development with Ruby on Rails.</li>
          <li>🔄 Automatic memory management (Garbage Collection).</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Hello World</h2>
        <pre style={styles.codeBlock}>
{`puts "Hello, World!"`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Hello, World!`}</pre>

        <h2 style={styles.subtitle}>💬 Example 2: Variables and Strings</h2>
        <pre style={styles.codeBlock}>
{`name = "Abhilash"
age = 21

puts "Name: #{name}"
puts "Age: #{age}"`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Name: Abhilash
Age: 21`}
        </pre>

        <h2 style={styles.subtitle}>🧩 Example 3: Methods in Ruby</h2>
        <pre style={styles.codeBlock}>
{`def add(a, b)
  return a + b
end

puts "Sum is: #{add(10, 20)}"`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`Sum is: 30`}</pre>

        <h2 style={styles.subtitle}>🔢 Example 4: Conditional Statements</h2>
        <pre style={styles.codeBlock}>
{`number = 10

if number % 2 == 0
  puts "#{number} is even"
else
  puts "#{number} is odd"
end`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>{`10 is even`}</pre>

        <h2 style={styles.subtitle}>🔁 Example 5: Loops in Ruby</h2>
        <pre style={styles.codeBlock}>
{`for i in 1..5
  puts "Number: #{i}"
end`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Number: 1
Number: 2
Number: 3
Number: 4
Number: 5`}
        </pre>

        <h2 style={styles.subtitle}>🧱 Example 6: Classes and Objects</h2>
        <pre style={styles.codeBlock}>
{`class Student
  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def display
    puts "Name: #{@name}, Grade: #{@grade}"
  end
end

s1 = Student.new("Abhilash", "A")
s1.display`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Name: Abhilash, Grade: A`}
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
              <td style={styles.td}>Type</td>
              <td style={styles.td}>Interpreted, Object-Oriented</td>
              <td style={styles.td}>Ruby</td>
            </tr>
            <tr>
              <td style={styles.td}>Created By</td>
              <td style={styles.td}>Yukihiro Matsumoto (Matz)</td>
              <td style={styles.td}>1995</td>
            </tr>
            <tr>
              <td style={styles.td}>Web Framework</td>
              <td style={styles.td}>Ruby on Rails</td>
              <td style={styles.td}>Server-side apps</td>
            </tr>
            <tr>
              <td style={styles.td}>Typing</td>
              <td style={styles.td}>Dynamic</td>
              <td style={styles.td}>Duck Typing</td>
            </tr>
            <tr>
              <td style={styles.td}>Use Case</td>
              <td style={styles.td}>Web Development, Automation</td>
              <td style={styles.td}>Rails, Sinatra</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ruby;
