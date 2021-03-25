---
id: intro
title: Connecting the Docs
sidebar_label: Introduction
slug: /
---
import ServerStatus from '../../src/components/server-status';
import Mermaid from '@theme/Mermaid'


<ServerStatus />

Welcome to the HealthECCO Documentation Server. The HealthECCO ecosystem has several component parts. At its heart is a Neo4j knowledge graph which is built up using controlled Docker pipelines to load the various data sources. This knowledge graph is publicly accessible and is used as the basis for all of the HealthECCO front end applications.


<Mermaid chart={`
  graph TB
    CG-->|abstracts|GQL("GraphQL")
    DS("Data Sources")-->DP("Docker Pipelines")
    DP-->CG
    CG-->Neo4j("Neo4j Browser")
    CG[(CovidGraph)]-->|"bolt+s"|VGE("Visual Graph Explorer")
    CG-->|"bolt+s"|SA("Structr App")
        subgraph applications
          VGE
          SA
          RA("React App")
        end
        subgraph api
          GQL-->RA
        end
    `}/>
