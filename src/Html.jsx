import React from 'react';

function Html() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #FFF8E1, #E1F5FE)',
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
      color: '#0288D1',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#F57F17',
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
      backgroundColor: '#0288D1',
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
        <h1 style={styles.title}>🌐 HTML — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>HTML (HyperText Markup Language)</strong> is the <strong>standard markup language</strong> used to create and structure content on the web.  
          It defines <strong>elements, headings, paragraphs, links, images, forms,</strong> and other content displayed in web browsers.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>📝 Defines structure of web pages</li>
          <li>🔗 Supports hyperlinks and multimedia content</li>
          <li>⚙️ Works with CSS and JavaScript for styling and functionality</li>
          <li>🌐 Standard for all web browsers</li>
          <li>📄 Uses tags and attributes to mark up content</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Basic HTML Structure</h2>
        <pre style={styles.codeBlock}>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, HTML!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
        </pre>

        <h2 style={styles.subtitle}>💡 Example 2: Adding Links and Images</h2>
        <pre style={styles.codeBlock}>
{`<a href="https://www.google.com">Visit Google</a>
<img src="image.jpg" alt="Sample Image" width="200">`}
        </pre>

        <h2 style={styles.subtitle}>📦 Example 3: Lists</h2>
        <pre style={styles.codeBlock}>
{`<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>`}
        </pre>

        <h2 style={styles.subtitle}>🧩 Example 4: Forms</h2>
        <pre style={styles.codeBlock}>
{`<form>
  Name: <input type="text" name="name"><br>
  Email: <input type="email" name="email"><br>
  <input type="submit" value="Submit">
</form>`}
        </pre>

        <h2 style={styles.subtitle}>📘 Summary Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Element</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>h1-h6</td>
              <td style={styles.td}>Headings</td>
              <td style={styles.td}>{`<h1>Hello</h1>`}</td>
            </tr>
            <tr>
              <td style={styles.td}>p</td>
              <td style={styles.td}>Paragraph</td>
              <td style={styles.td}>{`<p>Text here</p>`}</td>
            </tr>
            <tr>
              <td style={styles.td}>a</td>
              <td style={styles.td}>Link</td>
              <td style={styles.td}>{`<a href="#">Link</a>`}</td>
            </tr>
            <tr>
              <td style={styles.td}>img</td>
              <td style={styles.td}>Image</td>
              <td style={styles.td}>{`<img src="img.jpg">`}</td>
            </tr>
            <tr>
              <td style={styles.td}>form</td>
              <td style={styles.td}>Form Input</td>
              <td style={styles.td}>{`<form>...</form>`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Html;
