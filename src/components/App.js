import data from "../data/video.js";
import IFrame from "./IFrame.js";
// import VideoContainer from "./VideoContainer.js";

function App() {
  console.log("Here's your data:", data);

  return (
    <div className="App">
      {Object.values({ data })?.map((video) => {
        return <IFrame key={video.id} {...video} />;
      })}
    </div>
  );
}

export default App;
