import React from 'react';

function Pandas() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd, #e8f5e9)',
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
        <h1 style={styles.title}>🐼 Pandas — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>Pandas</strong> is an open-source <strong>Python library</strong> used for
          <strong> data manipulation, cleaning, and analysis</strong>. It provides fast and
          flexible data structures like <strong>Series</strong> (1D) and
          <strong> DataFrame</strong> (2D) to handle structured data efficiently.
        </p>

        <h2 style={styles.subtitle}>⚙️ Key Features</h2>
        <ul style={styles.list}>
          <li>📊 DataFrame for 2D tabular data</li>
          <li>🧮 Handles missing or duplicate values easily</li>
          <li>⚡ High performance and speed (built on NumPy)</li>
          <li>🔗 Works seamlessly with Matplotlib and Scikit-learn</li>
          <li>📁 Supports multiple file formats (CSV, Excel, JSON, SQL)</li>
        </ul>

        <h2 style={styles.subtitle}>🧠 Example 1: Creating a DataFrame</h2>
        <pre style={styles.codeBlock}>
{`import pandas as pd

data = {
    'Name': ['Abhilash', 'Alekya', 'Ravi'],
    'Age': [22, 21, 23],
    'City': ['Hyderabad', 'Chennai', 'Bangalore']
}

df = pd.DataFrame(data)
print(df)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`      Name  Age       City
0  Abhilash   22  Hyderabad
1    Alekya   21    Chennai
2      Ravi   23  Bangalore`}
        </pre>

        <h2 style={styles.subtitle}>📊 Example 2: Reading a CSV File</h2>
        <pre style={styles.codeBlock}>
{`import pandas as pd

df = pd.read_csv('students.csv')
print(df.head())`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`     Name  Age  Marks
0  Abhilash   22     88
1    Alekya   21     92
2      Ravi   23     85`}
        </pre>

        <h2 style={styles.subtitle}>🧮 Example 3: Filtering Data</h2>
        <pre style={styles.codeBlock}>
{`import pandas as pd

data = {'Name': ['Abhilash', 'Alekya', 'Ravi'],
        'Age': [22, 21, 23],
        'Marks': [88, 92, 85]}
df = pd.DataFrame(data)

# Filter students with Marks > 85
filtered = df[df['Marks'] > 85]
print(filtered)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`      Name  Age  Marks
0  Abhilash   22     88
1    Alekya   21     92`}
        </pre>

        <h2 style={styles.subtitle}>🔢 Example 4: Grouping and Aggregation</h2>
        <pre style={styles.codeBlock}>
{`import pandas as pd

data = {'Department': ['IT', 'IT', 'HR', 'HR'],
        'Salary': [50000, 60000, 40000, 45000]}
df = pd.DataFrame(data)

grouped = df.groupby('Department')['Salary'].mean()
print(grouped)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Department
HR    42500.0
IT    55000.0
Name: Salary, dtype: float64`}
        </pre>

        <h2 style={styles.subtitle}>🧩 Example 5: Handling Missing Data</h2>
        <pre style={styles.codeBlock}>
{`import pandas as pd
import numpy as np

data = {'Name': ['Abhilash', 'Alekya', 'Ravi'],
        'Marks': [88, np.nan, 85]}
df = pd.DataFrame(data)

# Fill missing values with mean
df['Marks'].fillna(df['Marks'].mean(), inplace=True)
print(df)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`      Name  Marks
0  Abhilash   88.0
1    Alekya   86.5
2      Ravi   85.0`}
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
              <td style={styles.td}>Series</td>
              <td style={styles.td}>1D labeled array</td>
              <td style={styles.td}>pd.Series([1,2,3])</td>
            </tr>
            <tr>
              <td style={styles.td}>DataFrame</td>
              <td style={styles.td}>2D table of labeled data</td>
              <td style={styles.td}>pd.DataFrame(data)</td>
            </tr>
            <tr>
              <td style={styles.td}>Aggregation</td>
              <td style={styles.td}>Summarize grouped data</td>
              <td style={styles.td}>.groupby()</td>
            </tr>
            <tr>
              <td style={styles.td}>Data Cleaning</td>
              <td style={styles.td}>Fill or remove missing values</td>
              <td style={styles.td}>.fillna()</td>
            </tr>
            <tr>
              <td style={styles.td}>I/O Tools</td>
              <td style={styles.td}>Read/write files</td>
              <td style={styles.td}>.read_csv(), .to_excel()</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pandas;
