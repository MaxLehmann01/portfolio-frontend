import { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import particlesJSConfig from "../../assets/particles.js.json";

const LayoutBackground = () => {
  const [ init, setInit ] = useState<boolean>(false);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // const options: ISourceOptions = useMemo(() => particlesJSConfig, [])

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particlesJSConfig as ISourceOptions}
    />
  );

  return <></>;
}

export default LayoutBackground;