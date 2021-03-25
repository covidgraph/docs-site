---
id: data-loading-pipeline
title: Data Loading Pipeline
sidebar_label: Data Loading Pipeline
slug: /data-loading-pipeline
---
import Mermaid from '@theme/Mermaid'

## motherlode
Motherlode is a special repository that manages the pipeline designed to run all of the data loading docker images and scripts in a controlled manner, resolving data loader dependencies, keeping track of which data loaders are already in the graph and tracking versions. The most up-to-date list of docker images and dependencies can always be found in [pipeline.yaml](https://github.com/covidgraph/motherlode/blob/master/pipeline.yaml)

<Mermaid chart={`
  graph LR
    JHU{{data_jhu_population}}-->|"depends on"|FTI{{Full Text Indexes}}
    TGM{{Text Gene Match}}-->|"depends on"|DBio{{data_biobase}}
    TGM{{Text Gene Match}}-->|"depends on"|Lens{{lens-patent-data}}
    Repo{{Motherlode}}-->|"maintained by"|Maintainer([Tim Bleimehl])
    click Maintainer href "https://github.com/motey" "GitHub Maintainer Profile" _blank    
    `}/>
