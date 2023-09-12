import { useState,useRef,useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  return <h1>{status}</h1>;
};



function Map () {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
  <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
    <div ref={ref} />
  </Wrapper>
  )
    
}

export default Map