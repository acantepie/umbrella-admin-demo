import './highlightCode.scss'

import highlightJs from 'highlight.js/lib/core'

import yaml from 'highlight.js/lib/languages/yaml';
highlightJs.registerLanguage('yaml', yaml);

import javascript from 'highlight.js/lib/languages/javascript';
highlightJs.registerLanguage('js', javascript);

import json from 'highlight.js/lib/languages/json';
highlightJs.registerLanguage('json', json);

import xml from 'highlight.js/lib/languages/xml';
highlightJs.registerLanguage('xml', xml);

import php from 'highlight.js/lib/languages/php';
highlightJs.registerLanguage('php', php);

import twig from 'highlight.js/lib/languages/twig';
highlightJs.registerLanguage('twig', twig);

import bash from 'highlight.js/lib/languages/bash';
highlightJs.registerLanguage('bash', bash);

class HighlightCode extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        highlightJs.highlightElement(this)
    }
}

customElements.define('hl-code', HighlightCode);