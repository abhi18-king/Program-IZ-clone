import React from "react";

function Swift() {
  return (
    <div>
      {/* === Internal Styling === */}
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #e0f7fa, #ffe0f0);
          color: #333;
          margin: 0;
          padding: 0;
        }

        .swift-container {
          padding: 40px;
          max-width: 900px;
          margin: 50px auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        h1, h3 {
          text-align: center;
          color: #006994;
        }

        h3 {
          margin-top: 25px;
          color: #0077b6;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          margin: 10px 0;
        }

        ul {
          margin: 10px 0 20px 40px;
        }

        li {
          margin: 8px 0;
        }

        .highlight {
          background: #ffffffb8;
          border-left: 5px solid #0077b6;
          padding: 15px 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
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
          border-left: 5px solid #0077b6;
          padding: 10px 15px;
          font-family: monospace;
          border-radius: 6px;
          margin-top: 10px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #0077b6;
          color: white;
        }
      `}</style>

      {/* === Swift Page Content === */}
      <div className="swift-container">
        <h1>🦋 Swift Definition and Examples</h1>

        <section className="highlight">
          <h3>Definition:</h3>
          <p>
            <strong>Swift</strong> is a powerful, open-source, and modern programming language developed by 
            <strong> Apple Inc. </strong> in <strong>2014</strong>. It is mainly used for developing 
            <strong> iOS</strong>, <strong>macOS</strong>, <strong>watchOS</strong>, and <strong>tvOS</strong> applications.
          </p>
          <p>
            Swift was designed to be safe, fast, and expressive — combining the best features of 
            <strong> Objective-C</strong> and other modern programming languages.
          </p>
        </section>

        <h3>⚙️ Key Features of Swift:</h3>
        <ul>
          <li>🚀 Fast and Efficient – Compiled for high performance</li>
          <li>🧠 Safe and Reliable – Prevents null pointer crashes</li>
          <li>💡 Modern Syntax – Easy to read and write</li>
          <li>🔁 Interoperable with Objective-C</li>
          <li>🌐 Cross-platform – Works on macOS, iOS, Linux, and Windows</li>
        </ul>

        <h3>🧠 Example 1: Hello World</h3>
        <pre>
{`import Foundation

print("Hello, World!")`}
        </pre>
        <div className="output">Output: Hello, World!</div>

        <h3>🧮 Example 2: Adding Two Numbers</h3>
        <pre>
{`import Foundation

print("Enter first number:")
if let input1 = readLine(), let num1 = Int(input1) {
    print("Enter second number:")
    if let input2 = readLine(), let num2 = Int(input2) {
        let sum = num1 + num2
        print("The sum is \\(sum)")
    }
}`}
        </pre>
        <div className="output">
          Enter first number: 10 <br />
          Enter second number: 20 <br />
          The sum is 30
        </div>

        <h3>🔧 Example 3: Function Example</h3>
        <pre>
{`func add(a: Int, b: Int) -> Int {
    return a + b
}

let result = add(a: 5, b: 7)
print("Sum is \\(result)")`}
        </pre>
        <div className="output">Sum is 12</div>

        <h3>🏫 Example 4: Class Example</h3>
        <pre>
{`class Student {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    func displayInfo() {
        print("Name: \\(name)")
        print("Age: \\(age)")
    }
}

let s1 = Student(name: "Abhilash", age: 21)
s1.displayInfo()`}
        </pre>
        <div className="output">
          Name: Abhilash <br />
          Age: 21
        </div>

        <h3>📘 Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Developer</td>
              <td>Apple Inc.</td>
            </tr>
            <tr>
              <td>First Released</td>
              <td>2014</td>
            </tr>
            <tr>
              <td>Type System</td>
              <td>Statically Typed</td>
            </tr>
            <tr>
              <td>Execution</td>
              <td>Compiled</td>
            </tr>
            <tr>
              <td>Used For</td>
              <td>iOS, macOS, watchOS, tvOS, and Server-side Apps</td>
            </tr>
            <tr>
              <td>Interoperable With</td>
              <td>Objective-C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Swift
