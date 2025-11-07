import React from "react";

function Chash() {
  return (
    <div>
      {/* === Internal Styling === */}
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #d3f8ff, #f8d9ff);
          color: #333;
          margin: 0;
          padding: 0;
        }

        .csharp-container {
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
      <div className="csharp-container">
        <h1>💻 C# Definition and Examples</h1>

        <section className="highlight">
          <h3>Definition:</h3>
          <p>
            <strong>C# (C-Sharp)</strong> is a modern, object-oriented programming language developed by 
            <strong> Microsoft </strong> in 2000 as part of the <strong>.NET framework</strong>.
          </p>
          <p>
            It was designed by <strong>Anders Hejlsberg</strong> and is used to build web, mobile, desktop, 
            and game applications.
          </p>
        </section>

        <h3>⚙️ Key Features:</h3>
        <ul>
          <li>Object-Oriented (supports classes, objects, and inheritance)</li>
          <li>Type Safe (prevents runtime type errors)</li>
          <li>Automatic Garbage Collection</li>
          <li>Component-Oriented and Cross-Platform</li>
        </ul>

        <h3>🧠 Example 1: Hello World</h3>
        <pre>
{`using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`}
        </pre>
        <div className="output">Output: Hello, World!</div>

        <h3>🧮 Example 2: Adding Two Numbers</h3>
        <pre>
{`using System;

class Addition
{
    static void Main()
    {
        int a, b, sum;
        Console.Write("Enter first number: ");
        a = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter second number: ");
        b = Convert.ToInt32(Console.ReadLine());

        sum = a + b;
        Console.WriteLine("The sum is: " + sum);
    }
}`}
        </pre>
        <div className="output">
          Enter first number: 10 <br />
          Enter second number: 20 <br />
          The sum is: 30
        </div>

        <h3>🏫 Example 3: Class and Object Example</h3>
        <pre>
{`using System;

class Student
{
    public string name;
    public int age;

    public void DisplayInfo()
    {
        Console.WriteLine("Name: " + name);
        Console.WriteLine("Age: " + age);
    }
}

class Program
{
    static void Main()
    {
        Student s1 = new Student();
        s1.name = "Abhilash";
        s1.age = 21;
        s1.DisplayInfo();
    }
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
              <td>Microsoft</td>
            </tr>
            <tr>
              <td>First Released</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>High-level, Object-Oriented</td>
            </tr>
            <tr>
              <td>Platform</td>
              <td>.NET</td>
            </tr>
            <tr>
              <td>Used For</td>
              <td>Web, Desktop, Mobile, and Game Development</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chash
