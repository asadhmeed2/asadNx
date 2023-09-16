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
        <div className={cn('pt-5 d-flex align-items-center w-100 flex-1')}>
          <Tabs
            defaultActiveKey="info"
            id="uncontrolled-tab-example"
            className={cn(
              ' text-color d-flex flex-column  position-relative  z-1'
            )}
          >
            <Tab
              eventKey="info"
              title="Info"
              className={cn('position-relative  z-1 text-white  h-100 ')}
            >
              <div className={styles.tab}>
                <InfoCard />
              </div>
            </Tab>
            <Tab
              eventKey="exp"
              title="Experience"
              className={cn(' position-relative z-1 h-100 ', styles.content)}
            >
              <div className={styles.tab}>
                <h2 className="text-center text-color">Experience</h2>
                <ExpCardList />
              </div>
            </Tab>
            <Tab
              eventKey="projects"
              title="Projects"
              className="position-relative  z-1"
            >
              <div className={styles.tab}>
                <h2 className="text-center text-color">
                  projects that i take part of{' '}
                </h2>
                <ProjectsCardList />
              </div>
            </Tab>

            <Tab
              eventKey="play"
              title="Play Ground"
              className={cn('position-relative  z-1', styles.content)}
            >
              <div className={styles.tab}>
                <h2 className="text-center text-color">play ground </h2>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};
