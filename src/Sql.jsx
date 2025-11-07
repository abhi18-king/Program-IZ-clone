import React from 'react';

function Sql() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #E3F2FD, #FFF3E0)',
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
      color: '#1565C0',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#E65100',
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
      backgroundColor: '#1565C0',
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
        <h1 style={styles.title}>🗄️ SQL — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>SQL (Structured Query Language)</strong> is a <strong>standard language</strong> used for
          <strong> managing and manipulating databases</strong>. It allows users to <strong>create, read, update,</strong> 
          and <strong>delete</strong> data (CRUD operations) within relational databases like <strong>MySQL, PostgreSQL, and SQLite</strong>.
        </p>

        <h2 style={styles.subtitle}>✨ Key Features</h2>
        <ul style={styles.list}>
          <li>🧩 Used for relational databases</li>
          <li>📊 Performs CRUD operations</li>
          <li>⚙️ Standardized across multiple systems</li>
          <li>🔍 Powerful querying using SELECT statements</li>
          <li>🔒 Controls access with user permissions</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Create Table</h2>
        <pre style={styles.codeBlock}>
{`CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Grade CHAR(1)
);`}
        </pre>

        <h2 style={styles.subtitle}>💬 Example 2: Insert Data</h2>
        <pre style={styles.codeBlock}>
{`INSERT INTO Students (ID, Name, Age, Grade)
VALUES (1, 'Abhilash', 21, 'A');`}
        </pre>

        <h2 style={styles.subtitle}>🔍 Example 3: Select Data</h2>
        <pre style={styles.codeBlock}>
{`SELECT * FROM Students;`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`ID | Name      | Age | Grade
---|-----------|-----|------
1  | Abhilash  | 21  | A`}
        </pre>

        <h2 style={styles.subtitle}>🧱 Example 4: Update Record</h2>
        <pre style={styles.codeBlock}>
{`UPDATE Students
SET Grade = 'B'
WHERE ID = 1;`}
        </pre>

        <h2 style={styles.subtitle}>🗑️ Example 5: Delete Record</h2>
        <pre style={styles.codeBlock}>
{`DELETE FROM Students WHERE ID = 1;`}
        </pre>

        <h2 style={styles.subtitle}>📘 Summary Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Command</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>CREATE</td>
              <td style={styles.td}>Create a new table</td>
              <td style={styles.td}>CREATE TABLE</td>
            </tr>
            <tr>
              <td style={styles.td}>SELECT</td>
              <td style={styles.td}>Retrieve data</td>
              <td style={styles.td}>SELECT * FROM</td>
            </tr>
            <tr>
              <td style={styles.td}>UPDATE</td>
              <td style={styles.td}>Modify existing data</td>
              <td style={styles.td}>UPDATE Students</td>
            </tr>
            <tr>
              <td style={styles.td}>DELETE</td>
              <td style={styles.td}>Remove data</td>
              <td style={styles.td}>DELETE FROM</td>
            </tr>
            <tr>
              <td style={styles.td}>INSERT</td>
              <td style={styles.td}>Add new records</td>
              <td style={styles.td}>INSERT INTO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sql;
