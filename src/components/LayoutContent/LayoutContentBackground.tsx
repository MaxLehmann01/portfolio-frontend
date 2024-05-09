import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { memo, useEffect, useState } from "react";
import particlesJSConfig from "../../assets/particles.js.json";

const ParticlesComponent = memo(({ options }: { options: ISourceOptions}) => (
  <Particles
    id="tsparticles"
    options={options}
  />
));

const LayoutContentBackground = () => {
  const [ init, setInit ] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if(!init) return null;

  return (
    <ParticlesComponent
      options={particlesJSConfig as ISourceOptions}
    />
  );
}

export default LayoutContentBackground;