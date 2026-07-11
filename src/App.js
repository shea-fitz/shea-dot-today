import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import './App.css';

// DATA
import {projects} from './data/projects';
import {writing} from './data/writing';
import client from './icons/client.svg';
import personal from './icons/personal.svg';
import shea from './media/leaves.png';

// COMPONENTS
import Project from './components/Project';
import Writing from './components/Writing';
import Info from './components/Info';

const DESKTOP_MIN_WIDTH = 901;

function App() {

  const [filter, setFilter] = useState(null);
  const [tagFilter, setTagFilter] = useState([]);
  const [sheaHeight, setSheaHeight] = useState(null);
  const [releaseSticky, setReleaseSticky] = useState(false);

  const leftRef = useRef(null);
  const infoRef = useRef(null);
  const writingRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  const isFiltered = filter !== null || tagFilter.length > 0;

  const projectMatches = (p) =>
    (filter === null || p.context === filter) &&
    (tagFilter.length === 0 || tagFilter.every(t => p.tags.includes(t)));

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setReleaseSticky(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const syncSheaHeight = () => {
      const info = infoRef.current;
      const writingEl = writingRef.current;
      const projectsEl = projectsRef.current;
      if (!info || !writingEl || !projectsEl) return;

      if (window.innerWidth < DESKTOP_MIN_WIDTH) {
        setSheaHeight(null);
        return;
      }

      const nextHeight = Math.max(
        projectsEl.offsetHeight - info.offsetHeight - writingEl.offsetHeight,
        0
      );
      setSheaHeight((prev) => (prev === nextHeight ? prev : nextHeight));
    };

    syncSheaHeight();

    const observer = new ResizeObserver(syncSheaHeight);
    observer.observe(projectsRef.current);
    observer.observe(infoRef.current);
    observer.observe(writingRef.current);
    window.addEventListener('resize', syncSheaHeight);

    const t1 = window.setTimeout(syncSheaHeight, 100);
    const t2 = window.setTimeout(syncSheaHeight, 500);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncSheaHeight);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="left-column" ref={leftRef}>
          <div className="info-slot" ref={infoRef}>
            <Fade>
              <div className="info">
                <div className="header">Shea Fitzpatrick</div>
                <Info />
              </div>
            </Fade>
          </div>

          <div
            className="shea-slot"
            style={sheaHeight != null ? { height: sheaHeight, flex: '0 0 auto' } : undefined}
          >
            <Fade>
              <a
                href="https://www.youtube.com/watch?v=bu58brYNRu0"
                target="_blank"
                className="shea"
                rel="noreferrer"
              >
                <img src={shea} alt="" />
                <div className="banner">"This reminded me of you"</div>
              </a>
            </Fade>
          </div>

          <div className="writing-slot" ref={writingRef}>
            <Fade>
              <div className="writing">
                <div className="header">Writing + Features</div>
                <div className="writing-list">
                  {writing.map(piece => (
                    <Writing
                      key={piece.title}
                      title={piece.title}
                      link={piece.link}
                      year={piece.year}
                      source={piece.source}
                    />
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="projects" ref={projectsRef}>
          <div className={`proj-controls${releaseSticky ? ' proj-controls-released' : ''}`}>
            <div className="header proj-header space-between">
              Projects
              <div className="categories">
                <span
                  className="category pointer"
                  onClick={() => setFilter(null)}
                  style={{ opacity: filter === null ? 1 : 0.8 }}
                >
                  <span className="icon">꩜</span>everything
                </span>

                <span
                  className="category pointer"
                  onClick={() => setFilter('client')}
                  style={{ opacity: filter === 'client' ? 1 : 0.65 }}
                >
                  <img className="icon" src={client} alt="" />client work
                </span>

                <span
                  className="category pointer"
                  onClick={() => setFilter('personal')}
                  style={{ opacity: filter === 'personal' ? 1 : 0.65 }}
                >
                  <img className="icon" src={personal} alt="" />personal
                </span>
              </div>
            </div>

            <div className="tag-filters">
              <span className="category">type:</span>
              <div className="tag-list">
                {['design', 'development', 'product', 'brand', 'music', 'illustration', 'animation'].map(tag => (
                  <span
                    key={tag}
                    onClick={() =>
                      setTagFilter(prev =>
                        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                      )
                    }
                    className={`tag pointer ${tagFilter.includes(tag) ? 'tag-active' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Fade>
            <div className="proj-list">
              {projects.map(project => (
                <Project
                  key={project.title}
                  cover={project.cover}
                  title={project.title}
                  type={project.type}
                  year={project.year}
                  description={project.description}
                  context={project.context}
                  link={project.link}
                  target={project.target}
                  caseStudy={project.case}
                  dimmed={isFiltered && !projectMatches(project)}
                  highlighted={isFiltered && projectMatches(project)}
                />
              ))}
            </div>
          </Fade>
        </div>
      </div>

      <div className="footer" ref={footerRef}>
        <span>
          ♫ I built this site from scratch with React.js and the Are.na API. For recent updates I used Cursor. Last updated July 10, 2026 ♫
        </span>
      </div>
    </>
  );
}

export default App;
