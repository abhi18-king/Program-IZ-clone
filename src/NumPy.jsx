import React from 'react';

function NumPy() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #e8f5e9, #e3f2fd)',
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
        <h1 style={styles.title}>💡 NumPy — Definition and Examples</h1>

        <p style={styles.paragraph}>
          <strong>NumPy</strong> (short for <strong>Numerical Python</strong>) is a powerful open-source
          Python library used for <strong>scientific and mathematical computing</strong>. It provides
          support for <strong>large multidimensional arrays</strong> and <strong>matrices</strong>,
          along with a collection of <strong>mathematical functions</strong> for efficient computation.
        </p>

        <h2 style={styles.subtitle}>⚙️ Key Features</h2>
        <ul style={styles.list}>
          <li>⚡ High-speed array operations written in C</li>
          <li>📊 N-dimensional array objects (ndarray)</li>
          <li>🔢 Built-in mathematical, statistical, and algebraic functions</li>
          <li>🔁 Broadcasting support for arrays of different shapes</li>
          <li>🔍 Seamless integration with Pandas, TensorFlow, and Scikit-learn</li>
        </ul>

        <h2 style={styles.subtitle}>🧩 Example 1: Basic Array Operations</h2>
        <pre style={styles.codeBlock}>
{`import numpy as np

# Creating a NumPy array
arr = np.array([1, 2, 3, 4, 5])

# Performing operations
print("Array:", arr)
print("Sum:", np.sum(arr))
print("Mean:", np.mean(arr))`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Array: [1 2 3 4 5]
Sum: 15
Mean: 3.0`}
        </pre>

        <h2 style={styles.subtitle}>🧮 Example 2: 2D Array Operations</h2>
        <pre style={styles.codeBlock}>
{`import numpy as np

matrix = np.array([[1, 2], [3, 4]])
print("Matrix:\\n", matrix)

# Matrix operations
print("Transpose:\\n", np.transpose(matrix))
print("Sum of elements:", np.sum(matrix))`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Matrix:
 [[1 2]
  [3 4]]
Transpose:
 [[1 3]
  [2 4]]
Sum of elements: 10`}
        </pre>

        <h2 style={styles.subtitle}>🔢 Example 3: Array Slicing and Broadcasting</h2>
        <pre style={styles.codeBlock}>
{`import numpy as np

arr = np.array([10, 20, 30, 40, 50])
print("Original:", arr)

# Slicing
print("First 3 elements:", arr[:3])

# Broadcasting
arr = arr + 5
print("After adding 5:", arr)`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Original: [10 20 30 40 50]
First 3 elements: [10 20 30]
After adding 5: [15 25 35 45 55]`}
        </pre>

        <h2 style={styles.subtitle}>🧠 Example 4: Statistical Functions</h2>
        <pre style={styles.codeBlock}>
{`import numpy as np

data = np.array([2, 4, 6, 8, 10])

print("Max:", np.max(data))
print("Min:", np.min(data))
print("Standard Deviation:", np.std(data))`}
        </pre>

        <p><strong>Output:</strong></p>
        <pre style={styles.codeBlock}>
{`Max: 10
Min: 2
Standard Deviation: 2.8284271247461903`}
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
              <td style={styles.td}>Core Structure</td>
              <td style={styles.td}>ndarray (N-dimensional array)</td>
              <td style={styles.td}>np.array([1,2,3])</td>
            </tr>
            <tr>
              <td style={styles.td}>Speed</td>
              <td style={styles.td}>Faster than Python lists</td>
              <td style={styles.td}>Vectorized operations</td>
            </tr>
            <tr>
              <td style={styles.td}>Mathematical Ops</td>
              <td style={styles.td}>Math, stats, algebra</td>
              <td style={styles.td}>np.mean(), np.dot()</td>
            </tr>
            <tr>
              <td style={styles.td}>Broadcasting</td>
              <td style={styles.td}>Works on arrays of different shapes</td>
              <td style={styles.td}>arr + 5</td>
            </tr>
            <tr>
              <td style={styles.td}>Integration</td>
              <td style={styles.td}>Compatible with ML libraries</td>
              <td style={styles.td}>Pandas, TensorFlow, etc.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NumPy
