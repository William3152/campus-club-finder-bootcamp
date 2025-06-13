export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About Campus Club Finder</h1>
      <p className="mb-4">
        This application helps students discover and join various clubs available on campus. 
      </p>
      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <ul className="list-disc list-inside">
        <li>Vite (Bundler)</li>
        <li>React (UI Library) </li>
        <li>React Router (Navigation)</li>
        <li>Tailwind CSS (Styling) </li>
      </ul>
    </div>
  );
}