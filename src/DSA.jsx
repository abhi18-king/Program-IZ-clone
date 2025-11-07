import React from 'react';

function DSA() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
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
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#AD1457',
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
        <h1 style={styles.title}>💻 Data Structures and Algorithms (DSA)</h1>

        <p style={styles.paragraph}>
          <strong>DSA</strong> stands for <strong>Data Structures and Algorithms</strong>. It is a fundamental concept in computer science that focuses on
          <strong> how data is stored, organized, and processed efficiently</strong>.
        </p>

        <p style={styles.paragraph}>
          In simple terms:
          <br />✅ <strong>Data Structures</strong> → Ways to store and organize data.
          <br />✅ <strong>Algorithms</strong> → Step-by-step methods to solve problems using data.
        </p>

        <h2 style={styles.subtitle}>🌟 Why DSA Is Important</h2>
        <ul style={styles.list}>
          <li>🚀 Builds efficient and optimized programs</li>
          <li>🧠 Improves problem-solving and logic skills</li>
          <li>💡 Crucial for coding interviews and competitive programming</li>
          <li>⚙️ Used in AI, databases, networking, and software development</li>
        </ul>

        <h2 style={styles.subtitle}>⚙️ 1. Data Structures</h2>
        <p style={styles.paragraph}>
          A <strong>Data Structure</strong> is a way of <strong>organizing and storing data</strong> so it can be accessed and modified efficiently.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Example</th>
              <th style={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Array</td>
              <td style={styles.td}>[10, 20, 30, 40]</td>
              <td style={styles.td}>Stores elements in contiguous memory</td>
            </tr>
            <tr>
              <td style={styles.td}>Linked List</td>
              <td style={styles.td}>10 → 20 → 30 → NULL</td>
              <td style={styles.td}>Nodes connected using pointers</td>
            </tr>
            <tr>
              <td style={styles.td}>Stack</td>
              <td style={styles.td}>Push / Pop</td>
              <td style={styles.td}>LIFO structure (Last In, First Out)</td>
            </tr>
            <tr>
              <td style={styles.td}>Queue</td>
              <td style={styles.td}>Enqueue / Dequeue</td>
              <td style={styles.td}>FIFO structure (First In, First Out)</td>
            </tr>
            <tr>
              <td style={styles.td}>Tree</td>
              <td style={styles.td}>Binary Tree</td>
              <td style={styles.td}>Hierarchical data organization</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.subtitle}>🧠 Example 1: Stack using Array (C++)</h2>
        <pre style={styles.codeBlock}>
{`#include <iostream>
using namespace std;

int main() {
    int stack[5], top = -1;

    // Push operation
    stack[++top] = 10;
    stack[++top] = 20;

    // Pop operation
    cout << "Popped element: " << stack[top--] << endl;
    cout << "Top element: " << stack[top] << endl;

    return 0;
}`}
        </pre>

        <h2 style={styles.subtitle}>⚙️ 2. Algorithms</h2>
        <p style={styles.paragraph}>
          An <strong>Algorithm</strong> is a step-by-step logical procedure to solve a problem using data.  
          Common categories include Searching, Sorting, Recursion, and Graph Algorithms.
        </p>

        <h2 style={styles.subtitle}>🧮 Example 2: Linear Search (C++)</h2>
        <pre style={styles.codeBlock}>
{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {5, 8, 12, 20, 25};
    int n = 5, key = 12, found = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] == key) {
            cout << "Element found at index " << i;
            found = 1;
            break;
        }
    }

    if (!found)
        cout << "Element not found!";
}`}
        </pre>

        <h2 style={styles.subtitle}>⚡ Example 3: Bubble Sort (C++)</h2>
        <pre style={styles.codeBlock}>
{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = 5;

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                swap(arr[j], arr[j + 1]);
        }
    }

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}`}
        </pre>

        <h2 style={styles.subtitle}>📘 Summary Table</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Concept</th>
              <th style={styles.th}>Meaning</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Data Structure</td>
              <td style={styles.td}>Organizes data</td>
              <td style={styles.td}>Array, Stack, Queue</td>
            </tr>
            <tr>
              <td style={styles.td}>Algorithm</td>
              <td style={styles.td}>Steps to process data</td>
              <td style={styles.td}>Sorting, Searching</td>
            </tr>
            <tr>
              <td style={styles.td}>Goal</td>
              <td style={styles.td}>Efficiency in storage and computation</td>
              <td style={styles.td}>Fast access, less memory</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DSA;
