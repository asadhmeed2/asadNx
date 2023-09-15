import React from 'react';
import { Image, Tab, Tabs } from 'react-bootstrap';

import cn from 'classnames';

import { Layout } from '../../shared/layout';
import { ExpCardList, InfoCard, ProjectsCardList } from '../components';

import reactBg from '../../assets/images/react-bg.jpg';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <Layout>
      <div className={cn(' w-100', styles.imageWrapper)}>
        <Image
          src={reactBg}
          className={cn('z-0 position-absolute', styles.bgImage)}
        />
        <div
          className={cn('pt-5 d-flex align-items-center w-100', styles.bgImage)}
        >
          <Tabs
            defaultActiveKey="info"
            id="uncontrolled-tab-example"
            className={cn(
              'mb-3 mt-5 text-color d-flex flex-column  position-relative  z-1'
            )}
          >
            <Tab
              eventKey="info"
              title="Info"
              className="position-relative  z-1 text-white w-100 h-100"
            >
              <InfoCard />
            </Tab>
            <Tab
              eventKey="exp"
              title="Experience"
              className=" position-relative z-1 w-100 h-100 "
            >
              <h2 className="text-center text-color">Experience</h2>
              <ExpCardList />
            </Tab>
            <Tab
              eventKey="projects"
              title="Projects"
              className="position-relative  z-1"
            >
              <h2 className="text-center text-color">
                projects that i take part of{' '}
              </h2>
              <ProjectsCardList />
            </Tab>

            <Tab
              eventKey="play"
              title="Play Ground"
              className="position-relative  z-1"
            >
              <h2 className="text-center text-color">play ground </h2>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};
