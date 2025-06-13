export default function AboutPage() {
  return (
    <div className="bg-gray-900 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 text-white">

        {/* --- Judul Utama --- */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Campus Club Finder
        </h1>

        {/* --- Cara Kerja Aplikasi --- */}
        <div className="my-16">
          <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Langkah 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">1. Explore</h3>
              <p className="text-gray-300">Browse and sort through a curated list of student clubs to see what's available on campus.</p>
            </div>
            {/* Langkah 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">2. Discover</h3>
              <p className="text-gray-300">View detailed information, upcoming events, and the mission of each club.</p>
            </div>
            {/* Langkah 3 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">3. Join</h3>
              <p className="text-gray-300">Found a club you love? Join with a single click and become part of the community!</p>
            </div>
          </div>
        </div>

        {/* --- Tech Stack --- */}
        <div className="max-w-md mx-auto my-16">
          <h2 className="text-3xl font-semibold text-center mb-6">Tech Stack Used </h2>
          <ul className="list-disc list-inside space-y-3 bg-gray-800 p-6 rounded-lg text-lg text-gray-300">
            <li><span className="font-semibold text-white">Vite:</span> For lightning-fast bundling and development. </li>
            <li><span className="font-semibold text-white">React:</span> To build a reactive and component-based user interface. </li>
            <li><span className="font-semibold text-white">React Router:</span> For seamless single-page application navigation. </li>
            <li><span className="font-semibold text-white">Tailwind CSS:</span> For a utility-first approach to styling without leaving HTML. </li>
          </ul>
        </div>

      </div>
    </div>
  );
}