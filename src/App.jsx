import AboutMe from "./components/AboutMe";
import MeDuck from "./components/MeDuck";

export default function App() {
  return (
    <div className="bg-gray-800 h-screen text-gray-700">
      <div className="flex flex-col w-[70%] items-center m-auto my-10 p-10 bg-amber-100">
        <div className="p-4 bg-blue-300 w-[80%]">
          <h1 className="text-gray-800 font-bold">React Project Starter</h1>
        </div>
        <div className="p-4 bg-violet-300 mt-4 w-[80%]">
          <h2 className="font-bold text-gray-800">Tech Stack</h2>
          <ol className="list-inside list-disc font-semibold">
            <li>Vite</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Tailwind</li>
          </ol>
        </div>
        <div className="bg-pink-200 mt-8 w-[80%] text-center">
          <h2 className="mt-8 font-bold">Test component</h2>
          <AboutMe/>
          <MeDuck bgColor="bg-red-400"/>
        </div>
      </div>
    </div>
  );
}
