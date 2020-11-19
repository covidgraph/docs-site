import React, { FunctionComponent } from 'react'; // importing FunctionComponent


const SchemaDiagram: FunctionComponent = () => <aside>

  <img src="../../docs/images/schema.svg"></img>  {/* Rename latest schema: schema.svg */}


  <svg viewBox="0 0 362 232" version="1.1">
  <g stroke="none" stroke-width="1" fill="none"
    fill-rule="evenodd">
    <a href="https://alligator.io">
      <polygon fill="#CA3030"
        points="..."></polygon>
    </a>
    <a href="https://www.w3.org/TR/SVG/"
	  target="_blank">
      <circle id="circle" fill="#30C3CA"
        cx="211.5" cy="139.5" r="56.5">
      </circle>
    </a>
    <a href="https://ponyfoo.com/"
	  target="_blank">
      <rect fill="#F79134"
        transform="..."
        x="..." y="..."
        width="94" height="94">
      </rect>
    </a>
    <a href="#code">
      <text
        transform="..."
        font-family="..." font-size="54"
        font-weight="normal" fill="#008F68">
          <tspan x="..." y="...">
            Some Text
          </tspan>
      </text>
    </a>
  </g>
</svg>

</aside>

export default SchemaDiagram;
