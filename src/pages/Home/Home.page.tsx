import React from 'react';
import { Content } from 'src/components/layout/Content';
import { CoinsWeMineSection } from 'src/sections/CoinsWeMine.section';
import { GetStartedSection } from 'src/sections/GetStarted.section';
import { Hero, WorldMap } from './Home.components';
import MapSvg from './world_map_dots.svg';

export const HomePage = () => {
  return (
    <>
      <Hero>
        <WorldMap src={MapSvg} alt="map" />
        <Content contentCenter>
          <h1>Mining pool that enables innovation</h1>
          <p>Better mining pool for modern cryptocurrency miners.</p>
        </Content>
      </Hero>
      <CoinsWeMineSection />
      <GetStartedSection />
    </>
  );
};
