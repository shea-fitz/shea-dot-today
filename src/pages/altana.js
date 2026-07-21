import React from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';
import Image from '../components/Image';
import Back from '../components/Back';

import before from '../media/altana/before.webp';
import hero from '../media/altana/hero.webp';
import basicSearch from '../media/altana/basic-search.webp';
import naturalLanguage from '../media/altana/natural-language.webp';
import advancedSearch from '../media/altana/advanced-search.webp';
import results from '../media/altana/results.webp';
import node from '../media/altana/node.webp';
import nodeGroup from '../media/altana/node-group.webp';
import knowledgeGraph from '../media/altana/knowledge-graph.webp';

  
const Altana = () => {
  return (
    <Fade>
    <div className="page-wrapper">

    <div className="back-button">
    <Back/>
    </div>


        <div className="page-content">
          <PageHeader
              title='Altana'
              type='Product Design (contracted as an agency worker)'
              year='2022'
            />

        <Image
          source={hero}
        />

        <h3>Client</h3>

        <p className="paragraph">
        <a href="https://altana.ai/" target="_blank">Altana</a> seeks to be a <span className="highlight">source of truth for global trade,</span> mapping relationships between companies, facilities, and the goods that move between them.
        </p>


        <h3>Ask</h3>

        <p className="paragraph">
        Altana's existing search interface was a single input field that <span className="highlight">couldn't support the complexity of analysts’ needs</span>. The goals were to:

        <ol>
          <li>Redesign the search experience to support the complexity of Altana’s data model</li>
          <li>Design a visual Knowledge Graph that lets analysts explore company relationships at scale</li>
          <li>Update the visual design to align with Altana's brand</li>
        </ol>
        </p>
        

        <div className="details">
          <div className="detail-column">
            <h3 className="reset-margin">Timeline</h3>
            6 months
          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Collaborators</h3>
            <ul>
              <li>Myself (product designer)</li>
              <li>Technical Product Manager</li>
              <li>Engineer</li>
            </ul>
          </div>

          <div className="detail-column">
            <h3 className="reset-margin">Tools</h3>
            Figma
        </div>

        </div>

        <Image
          source={before}
          caption='Before: original search interface'
        />


        <h3>Natural Language Search</h3>

        <p className="paragraph last-p">
        I designed a structured natural language form: <br /><br />
        "I'd like to search for a [company] in this [place] that trades these [goods] in this [industry]." Each term is an interactive input, <span className="highlight">making the query readable rather than technical.</span> <br /><br />
        Advanced search extended this with an integrated map, letting analysts draw geographic bounding boxes or upload shapefiles — critical for intelligence use cases where regional trade patterns were the focus. </p>

<Image
          source={basicSearch}
          caption='Basic search'
        />


        <Image
          source={advancedSearch}
          caption='Advanced search with map selection'
        />

        <Image
          source={results}
          caption='Search results with filters'
        />

        <h3>Knowledge Graph</h3>

        <p className="paragraph last-p">
        Once a user found a company of interest, the Knowledge Graph let them explore its connections with an <span className="highlight">interactive node-based diagram</span>:<br /><br />
        <ul>
          <li>Trading partner</li>
          <li>Owned companies</li>
          <li>Facilities</li>
        </ul> 
          </p>

          <Image
          source={knowledgeGraph}
        />

          <h3>Node Grouping</h3>
          <p className="paragraph last-p">
          The hardest problem was scale. A single company might have 250 trading partners or 100 owned subsidiaries. Rendering everything at once made the graph unreadable. <br /><br />

          I designed a node grouping system that <span className="highlight">collapsed high-connection nodes into labeled group nodes with pagination</span>, letting analysts drill into relationships progressively.
          </p>

          

          <Image
          source={nodeGroup}
        />

        </div>
      
    </div>
    </Fade>
  );
};
  
export default Altana;
