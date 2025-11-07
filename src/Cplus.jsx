import React from 'react';

function Cplus() {
  return (
    <div>
      {/* === Internal Styling === */}
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #cfe9ff, #f9e0ff);
          color: #333;
          margin: 0;
          padding: 0;
        }

        .cpp-container {
          padding: 40px;
          max-width: 900px;
          margin: 50px auto;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        h1, h3 {
          color: #2a2a72;
          text-align: center;
        }

        h3 {
          margin-top: 30px;
          color: #3b3b98;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
        }

        ul {
          margin: 10px 0 20px 40px;
        }

        li {
          margin: 8px 0;
        }

        .highlight {
          background: #ffffffb8;
          border-left: 4px solid #3b3b98;
          padding: 15px 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        pre {
          background-color: #1e1e2f;
          color: #f1f1f1;
          padding: 15px;
          border-radius: 10px;
          font-family: 'Consolas', monospace;
          font-size: 15px;
          overflow-x: auto;
          margin-top: 10px;
        }

        .output {
          background: #f3f3f3;
          border-left: 5px solid #2a2a72;
          padding: 10px 15px;
          font-family: monospace;
          border-radius: 6px;
          margin-top: 10px;
        }
      `}</style>

      {/* === Page Content === */}
      <div className="cpp-container">
        <h1>🧩 C++ Definition and Example</h1>

        <section className="highlight">
          <h3>Definition:</h3>
          <p>
            <strong>C++</strong> is a high-level, general-purpose programming language developed by 
            <strong> Bjarne Stroustrup</strong> in 1979 as an extension of the C language.
          </p>
          <p>
            It supports both <strong>procedural</strong> and <strong>object-oriented programming</strong> — making it a 
            <em> multi-paradigm</em> language.
          </p>
        </section>

        <h3>⚙️ Key Features:</h3>
        <ul>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Compiled and Portable</li>
          <li>Rich Standard Library</li>
          <li>Manual Memory Management</li>
        </ul>

        <h3>🧠 Example 1: Hello World</h3>
        <pre>
{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`}
        </pre>
        <div className="output">
          Output: Hello, World!
        </div>

        <h3>🧮 Example 2: Sum of Two Numbers</h3>
        <pre>
{`#include <iostream>
using namespace std;

int main() {
    int a, b, sum;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    sum = a + b;
    cout << "The sum is: " << sum << endl;
    return 0;
}`}
        </pre>
        <div className="output">
          Enter two numbers: 5 7 <br />
          The sum is: 12
        </div>
      </div>
    </div>
  );
}

export default Cplus
