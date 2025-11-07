import React from 'react';

function Css() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #E3F2FD, #FFF8E1)',
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
        <h1 style={styles.title}>🎨 CSS — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>CSS (Cascading Style Sheets)</strong> is a <strong>style sheet language</strong> used to describe the presentation of a webpage.  
          It controls the layout, colors, fonts, spacing, and visual design of HTML elements.  
          CSS helps separate <strong>content (HTML)</strong> from <strong>design</strong>.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>🎨 Controls the visual style of HTML elements</li>
          <li>🧩 Separates structure (HTML) and design (CSS)</li>
          <li>📱 Supports responsive web design</li>
          <li>⚡ Improves page loading speed and maintainability</li>
          <li>🌈 Enables animations and transitions</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Inline CSS</h2>
        <pre style={styles.codeBlock}>
{`<h1 style="color: blue; text-align: center;">Hello, CSS!</h1>`}
        </pre>

        <h2 style={styles.subtitle}>💡 Example 2: Internal CSS</h2>
        <pre style={styles.codeBlock}>
{`<style>
  body {
    background-color: #f0f8ff;
    font-family: 'Poppins', sans-serif;
  }
  h1 {
    color: #1976D2;
    text-align: center;
  }
</style>`}
        </pre>

        <h2 style={styles.subtitle}>📦 Example 3: External CSS</h2>
        <pre style={styles.codeBlock}>
{`/* style.css */
h1 {
  color: green;
  text-align: center;
}

p {
  font-size: 16px;
  color: #555;
}`}
        </pre>

        <h2 style={styles.subtitle}>🧩 Example 4: CSS Box Model</h2>
        <pre style={styles.codeBlock}>
{`div {
  width: 200px;
  padding: 10px;
  border: 2px solid #000;
  margin: 20px;
}`}
        </pre>

        <h2 style={styles.subtitle}>📘 Summary Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Concept</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Inline CSS</td>
              <td style={styles.td}>Applied directly to HTML elements</td>
              <td style={styles.td}>{`<h1 style="color:red">`}</td>
            </tr>
            <tr>
              <td style={styles.td}>Internal CSS</td>
              <td style={styles.td}>Written inside the &lt;style&gt; tag</td>
              <td style={styles.td}>{`<style>h1{color:blue;}</style>`}</td>
            </tr>
            <tr>
              <td style={styles.td}>External CSS</td>
              <td style={styles.td}>Linked via a .css file</td>
              <td style={styles.td}>{`<link rel="stylesheet" href="style.css">`}</td>
            </tr>
            <tr>
              <td style={styles.td}>Selectors</td>
              <td style={styles.td}>Target HTML elements</td>
              <td style={styles.td}>p, h1, .class, #id</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Css;
