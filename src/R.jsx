import React from 'react';

function R() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #E8F5E9, #FFFDE7)',
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
      color: '#2E7D32',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#558B2F',
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
      backgroundColor: '#2E7D32',
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
        <h1 style={styles.title}>🧮 R — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>R</strong> is a <strong>programming language and environment</strong> primarily used for 
          <strong> statistical computing, data analysis, and visualization</strong>. It is widely used among 
          <strong> data scientists and statisticians</strong> for its powerful mathematical and graphical capabilities.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>📊 Excellent for data analysis and statistics</li>
          <li>📈 Supports advanced data visualization (e.g., ggplot2)</li>
          <li>🧩 Extensive library support for machine learning and AI</li>
          <li>⚙️ Open-source and cross-platform</li>
          <li>💡 Integrates easily with Python, SQL, and C++</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Basic Arithmetic</h2>
        <pre style={styles.codeBlock}>
{`# R arithmetic operations
x <- 10
y <- 5
sum <- x + y
product <- x * y
print(sum)
print(product)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`[1] 15
[1] 50`}
        </pre>

        <h2 style={styles.subtitle}>📊 Example 2: Creating a Vector</h2>
        <pre style={styles.codeBlock}>
{`# Create a numeric vector
numbers <- c(10, 20, 30, 40, 50)
mean(numbers)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`[1] 30`}
        </pre>

        <h2 style={styles.subtitle}>📈 Example 3: Data Frame</h2>
        <pre style={styles.codeBlock}>
{`# Create a data frame
students <- data.frame(
  Name = c("Abhilash", "Alekya", "Ravi"),
  Score = c(85, 90, 78)
)

print(students)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`     Name Score
1 Abhilash    85
2   Alekya    90
3     Ravi    78`}
        </pre>

        <h2 style={styles.subtitle}>📉 Example 4: Plotting Data</h2>
        <pre style={styles.codeBlock}>
{`# Simple plot
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 6, 8, 10)
plot(x, y, type="b", col="blue", main="Simple Line Plot")`}
        </pre>

        <h2 style={styles.subtitle}>📘 Summary Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Function</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>c()</td>
              <td style={styles.td}>Create a vector</td>
              <td style={styles.td}>c(1,2,3)</td>
            </tr>
            <tr>
              <td style={styles.td}>mean()</td>
              <td style={styles.td}>Calculate average</td>
              <td style={styles.td}>mean(c(1,2,3))</td>
            </tr>
            <tr>
              <td style={styles.td}>data.frame()</td>
              <td style={styles.td}>Create a data frame</td>
              <td style={styles.td}>data.frame(Name, Age)</td>
            </tr>
            <tr>
              <td style={styles.td}>plot()</td>
              <td style={styles.td}>Create visual graph</td>
              <td style={styles.td}>plot(x, y)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default R
