import React from "react";

function Go() {
  return (
    <div>
      {/* === Internal Styling === */}
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #d0f4ff, #f8e1ff);
          color: #333;
          margin: 0;
          padding: 0;
        }

        .go-container {
          padding: 40px;
          max-width: 900px;
          margin: 50px auto;
          background: rgba(255, 255, 255, 0.92);
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

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          text-align: left;
        }

        th, td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #3b3b98;
          color: white;
        }
      `}</style>

      {/* === Page Content === */}
      <div className="go-container">
        <h1>🚀 Go (Golang) Definition and Examples</h1>

        <section className="highlight">
          <h3>Definition:</h3>
          <p>
            <strong>Go</strong>, also known as <strong>Golang</strong>, is an open-source, compiled, and statically typed programming language developed by 
            <strong> Google </strong> in <strong>2007</strong> (officially released in 2009).
          </p>
          <p>
            It was created by <strong>Robert Griesemer</strong>, <strong>Rob Pike</strong>, and <strong>Ken Thompson</strong> to build efficient, reliable, and highly concurrent software.
          </p>
        </section>

        <h3>⚙️ Key Features:</h3>
        <ul>
          <li>Compiled Language – Fast execution like C/C++</li>
          <li>Statically Typed with Garbage Collection</li>
          <li>Built-in Concurrency using Goroutines</li>
          <li>Cross-Platform and Open Source</li>
          <li>Simple Syntax and Fast Compilation</li>
        </ul>

        <h3>🧠 Example 1: Hello World</h3>
        <pre>
{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}
        </pre>
        <div className="output">Output: Hello, World!</div>

        <h3>🧮 Example 2: Adding Two Numbers</h3>
        <pre>
{`package main
import "fmt"

func main() {
    var a, b int
    fmt.Print("Enter first number: ")
    fmt.Scan(&a)

    fmt.Print("Enter second number: ")
    fmt.Scan(&b)

    sum := a + b
    fmt.Println("The sum is:", sum)
}`}
        </pre>
        <div className="output">
          Enter first number: 10 <br />
          Enter second number: 20 <br />
          The sum is: 30
        </div>

        <h3>🔧 Example 3: Function Example</h3>
        <pre>
{`package main
import "fmt"

func add(x int, y int) int {
    return x + y
}

func main() {
    result := add(15, 25)
    fmt.Println("Sum is:", result)
}`}
        </pre>
        <div className="output">Sum is: 40</div>

        <h3>🏫 Example 4: Struct Example</h3>
        <pre>
{`package main
import "fmt"

type Student struct {
    name string
    age  int
}

func main() {
    s1 := Student{name: "Abhilash", age: 21}
    fmt.Println("Name:", s1.name)
    fmt.Println("Age:", s1.age)
}`}
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
              <td>Google</td>
            </tr>
            <tr>
              <td>First Released</td>
              <td>2009</td>
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
              <td>Cloud Services, Servers, APIs, DevOps Tools</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Go
