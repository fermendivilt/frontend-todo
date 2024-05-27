export default function Averages() {
  return (
    <div className="mx-auto w-full mb-4 p-4 border border-black grid grid-cols-2 gap-4">
      <div className="flex flex-col text-center justify-center">
        <h2 className="mb-1">Average time to finish tasks:</h2>
        <p>22:15 minutes</p>
      </div>
      <div className="flex flex-col text-center justify-center">
        <h2 className="mb-1">Average time to finish tasks by priority:</h2>
        <p>Low: 10:25 minutes</p>
        <p>Medium: 10:25 minutes</p>
        <p>High: 10:25 minutes</p>
      </div>
    </div>
  );
}
