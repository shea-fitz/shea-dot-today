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
              type='Product Design'
              year='2022'
            />

        <Image
          source={hero}
        />

        <h3>Client</h3>

        <p className="paragraph">
        <a href="https://altana.ai/" target="_blank">Altana</a> seeks to be a source of truth for global trade, mapping relationships between companies, facilities, and the goods that move between them. Altana's primary users were US government analysts trying to answer questions like: who is connected to this company? What products are involved? Are there bad actors in this supply chain?

        <br /><br />

        I was contracted while working as a Product Designer at the agency Giant Machines, which has since been acquired by Deloitte.
        </p>


        <h3>Ask</h3>

        <p className="paragraph">
        Altana's existing search interface was a single input field that couldn't support the complexity of analysts’ needs. The underlying data required many permutations of search types, each with different results.   <br /><br />
        The goals were to:

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
        "I'd like to search for a [company] in this [place] that trades these [goods] in this [industry]." Each term is an interactive input, making the query readable rather than technical. <br /><br />
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
        Once a user found a company of interest, the Knowledge Graph let them explore its connections with an interactive node-based diagram:<br /><br />
        <ul>
          <li>Trading partner</li>
          <li>Owned companies</li>
          <li>Facilities</li>
        </ul> 
        <br /><br />

          I designed the node and edge system from scratch: three node types (searched company, company, facility), four edge types (sends to, receives from, sends and receives, operated by), and full state coverage for both. 
          </p>

          <Image
          source={knowledgeGraph}
        />

          <h3>Node Grouping</h3>
          <p className="paragraph last-p">
          The hardest problem was scale. A single company might have 250 trading partners or 100 owned subsidiaries — rendering everything at once made the graph unreadable. <br /><br />

          I designed a node grouping system that collapsed high-connection nodes into labeled group nodes with pagination, letting analysts drill into relationships progressively. <br /><br />

          Groups could also be created manually to consolidate duplicate company entries in the dataset.
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
