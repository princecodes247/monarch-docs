import Link from 'next/link';
import Hero from './_components/hero';
import Hero2 from './_components/hero2';

export default function HomePage() {
  return (
    <main>
      {/* <Hero/> */}
      <Hero2/>
      <section className="section w-full  mt-0 relative">
        <h2>Features</h2>
        <div>

          <div>
            <h3>Type Safety</h3>
            <p>Ensure your code is reliable with strong type enforcement.</p>
          </div>
          <div>
            <h3>Schema Flexibility</h3>
            <p>Work with dynamic or fixed schemas, your choice.</p>
          </div>
          <div>
            <h3>Direct MongoDB Queries</h3>
            <p>Get full control with direct query access when you need it.</p>
          </div>
          <div>
            <h3>Seamless Integration</h3>
            <p>Easy to integrate with existing codebases and tools.</p>
          </div>
          <div>
            <h3>Lean and Efficient</h3>
            <p>No unnecessary overhead, just the features you need.</p>
          </div>
          <div>
            <h3>Framework-Agnostic</h3>
            <p>Seamlessly integrates with any framework in the JavaScript ecosystem.</p>
          </div>
          <div>
            <h3>Framework-Agnostic</h3>
            <p>Seamlessly integrates with any framework in the JavaScript ecosystem.</p>
          </div>
          <div>
            <h3>Dedicated Browser Data Visualizer</h3>
            <p>Gain insights and debug faster with a built-in data visualizer.</p>
          </div>
        </div>

      </section>
      <section className="section w-full  mt-0 relative">
      <h2>Speed That Surpasses Expectations</h2>
      <p>Our ORM is meticulously optimized for high performance. Compare it to the leading ORMs like Mongoose and Prisma, and see how it consistently outperforms in query execution, startup time, and memory usage.</p>
      </section>
      <section className="section w-full  mt-0 relative">
      <h2>Why Choose Us Over Mongoose and Prisma?</h2>
      <p>
      While Mongoose and Prisma are powerful tools, they come with trade-offs in performance and type-safety. Our ORM is built to deliver only what you need—no more, no less.
      </p>

Comparison Table:

<table className="w-full mt-4">
  <thead>
    <tr>
      <th className="border px-4 py-2">Feature</th>
      <th className="border px-4 py-2">Our ORM</th>
      <th className="border px-4 py-2">Mongoose/Prisma</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">Type Safety</td>
      <td className="border px-4 py-2">Full</td>
      <td className="border px-4 py-2">Partial</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Performance</td>
      <td className="border px-4 py-2">X% Faster</td>
      <td className="border px-4 py-2">Standard</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Size</td>
      <td className="border px-4 py-2">Lightweight</td>
      <td className="border px-4 py-2">Heavy</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Startup Time</td>
      <td className="border px-4 py-2">10ms</td>
      <td className="border px-4 py-2">3 seconds</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Memory Footprint</td>
      <td className="border px-4 py-2">Significantly reduced, with minimal dependencies</td>
      <td className="border px-4 py-2">Standard</td>
    </tr>
  </tbody>
</table>

      </section>

      <section className="section w-full  mt-0 relative">
      <h2>When should you really use Monarch?</h2>
      <p>Lol. Everytime you use MongoDB.</p>
      <p>Monarch is perfect for every MongoDB project, Whether you're building microservices, a complex enterprise application, or a simple API, our ORM fits your needs. It's designed for projects where speed, reliability, and simplicity are paramount.</p>
      </section>

      <section className="section w-full  mt-0 relative">
      
      <h2>Start Coding in FIVE seconds</h2>
      <p>Getting started with our ORM is a breeze. With clear documentation and easy-to-follow examples, you'll be up and running in no time.</p>

    <div>
    Steps:

Install via npm/yarn
Configure your MongoDB connection
Define your models
Start querying with confidence
    </div>
      </section>

      <section className="section w-full  mt-0 relative">
      <h2>Join the amazing Community</h2>
<p>Get the help you need, when you need it. Whether it's through our documentation, GitHub discussions, or community Slack, support is always available.</p>
<div>
Documentation
GitHub Repository
Community Slack/Discord
</div>
      </section>

      <section className="section w-full  mt-0 relative">
      <h2>Ready to Build Faster?</h2>
<p>Try our ORM today and experience the difference. Whether you're migrating from another tool or starting fresh, you'll love the simplicity and speed.</p>

<div>

"Get Started Now"
"View Documentation"
"See the Benchmarks"
</div>
      </section>
    </main>
  );
}
