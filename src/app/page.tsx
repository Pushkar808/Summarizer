import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="h-full w-full ">
        <div className="relative bg-white pb-[80px]">
          <img
            src="/images/bg.png"
            alt="Background"
            className="w-full h-full object-contain"
          />

          <div className="absolute flex flex-col gap-10 top-20 w-full px-4 text-white z-10 items-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center">
              Instantly Summarize any Blogs <br /> with AI
            </h1>
            <p className="text-lg md:text-xl px-24 text-center">
              Paste any blog URL and get a crisp, AI-powered summary — perfect for quick reading, sharing, or saving time. <br /> Powered by OpenAI & optimized for modern readers.
            </p>
            <div>
              <a href="#startNow" className="text-white bg-black hover:bg-white hover:text-black font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 focus:outline-none cursor-pointer ">Start Summarize</a>
            </div>
          </div>
          <div className="w-full h-full absolute top-1/2">
            <img src={"/images/homeImg.png"} className="w-1/3 h-80 rounded-2xl mx-auto border-[1.5px] border-black" />
          </div>

        </div>
      </section>

      <section className="py-16 text-center px-6 relative w-full  bg-[#019bff] clip-diagonal">
        <h2 className="text-3xl font-bold mb-10">Why Use Our Summarizer ?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-xl border-[1.5px]">
            <h3 className="text-xl font-semibold mb-2">Fast & Accurate</h3>
            <p className="text-gray-600">Summaries in seconds using advanced AI — skip the fluff and get straight to the point.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl  border-[1.5px]">
            <h3 className="text-xl font-semibold mb-2">SEO-Ready Output</h3>
            <p className="text-gray-600">Perfect for bloggers and content creators who want to repurpose content quickly.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl  border-[1.5px]">
            <h3 className="text-xl font-semibold mb-2">Chat With the Blog</h3>
            <p className="text-gray-600">Coming soon: interact with the blog content like ChatGPT — ask questions, clarify points, and more!</p>
          </div>
        </div>
      </section>


      <section className="h-full w-full bg-white py-16 text-center flex flex-col items-center gap-4" id="startNow">
        <h3 className="text-3xl font-bold mb-4">Start Summarizing Smarter</h3>
        <input type="text" placeholder="https://link-to-your-blog" className="w-1/2 h-10 px-2 border-[1.5px] border-gray-500 rounded-xl " />
        <p>No sign-up required. It's free, fast, and built for content junkies like you.</p>
        <div>
          <Link href={"/result"} className="text-white bg-black hover:bg-white hover:text-black hover:border-[1.5px] border-black font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 focus:outline-none cursor-pointer ">Summarize This</Link>
        </div>
      </section>




      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Summarizer Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🚀 Super Fast Summaries</h3>
            <p className="text-gray-600">Don't waste time reading long posts. Get summaries instantly.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🔐 No Signup Required</h3>
            <p className="text-gray-600">Just paste and summarize. No emails. No hassle.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🧠 GPT-4o Powered</h3>
            <p className="text-gray-600">Backed by the smartest models available for text understanding.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🌐 SEO Friendly Output</h3>
            <p className="text-gray-600">Useful for bloggers, content creators & marketers.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Students</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Bloggers</span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Researchers</span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">Marketers</span>
          <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full">Founders</span>
        </div>
      </section>

      <section className="py-16 bg-amber-400">
        <h2 className="text-center text-3xl font-bold mb-12">Loved by Users</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic">“Summarizer saved me hours every week!”</p>
            <span className="text-sm text-gray-500 mt-2 block">— Anjali, Content Writer</span>
          </blockquote>
        </div>
      </section>




    </main>

  );
}
