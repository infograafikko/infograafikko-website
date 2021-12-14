import Illustrator from './illustrator.svg';
import Indesign from './indesign.svg';
import CreativeCloud from './cc.svg';
import JS from './js.svg';
import React from './react.svg';
import AWS from './aws.svg';
import D3 from './d3.svg';
import Node from './node.svg';
import R from './r.svg';
import HTML from './html.svg';
import CSS from './css.svg';

const dir = '/img/home/'
const imgDir = new URL(dir, import.meta.url).href;

export default [
    {
        imgDir,
        img: 'tech.svg#illustrator',
        alt: "Adobe Illustratorin logo"
    },
    {
        imgDir,
        img: 'tech.svg#indesign',
        alt: "Adobe Indesignin logo"
    },
    {
        imgDir,
        img: 'tech.svg#cc',
        alt: "Adobe Creative Cloudin logo"
    },
    {
        imgDir,
        img: 'tech.svg#js',
        alt: "Javascriptin logo"
    },
    {
        imgDir,
        img: 'tech.svg#react',
        alt: "Reactin logo"
    },
    {
        imgDir,
        img: 'tech.svg#aws',
        alt: "Amazon Webservicesin logo"
    },
    {
        imgDir,
        img: 'tech.svg#d3',
        alt: "D3-kirjaston logo"
    },
    {
        imgDir,
        img: 'tech.svg#node',
        alt: "Node.js:n logo"
    },
    {
        imgDir,
        img: 'tech.svg#r',
        alt: "R-ohjelmointikielen logo"
    },
    {
        imgDir,
        img: 'tech.svg#html',
        alt: "HTML5-logo"
    },
    {
        imgDir,
        img: 'tech.svg#css',
        alt: "CSS:n logo"
    },
];