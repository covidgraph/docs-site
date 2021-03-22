---
id: data-loading-repos
title: Data Loading Repositories
sidebar_label: Data Loading Repos
slug: /data-loading-repos
---
import Mermaid from '@theme/Mermaid'

## data_cord19

A collection of COVID-19 related scientific papers with metadata like authors, affiliations, references transformed from the [COVID-19 Open Research Dataset Challenge](https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge/data)

<Mermaid chart={`
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
  graph LR
    Repo{{data_cord19}}-->|"loads"|Node1((Paper))
    Repo-->|"maintained by"|Maintainer([Tim Bleimehl])    
    Node1-->Node2(("BodyText"))
    Node1-->Node3(("Abstract"))
    Node1-->Node4(("Author"))
        subgraph "primary nodes"
          Node1
          Node2
          Node3
          Node4
        end
    click Maintainer href "https://github.com/motey" "GitHub Maintainer Profile" _blank
    click Repo href "https://github.com/covidgraph/data_cord19" "GitHub Repo" _blank
    click Node1 href "/docs/api/objects/paper"
    click Node2 href "/docs/api/objects/body-text"
    click Node3 href "/docs/api/objects/abstract"
    click Node4 href "/docs/api/objects/author"
    `}/>

## data_biobase

The base biomedical concepts from Gtex, GeneOntology, Reactome, NcbiTaxonomy, NcbiGene, BigWordList, Ensembl, Refseq, Uniprot

<Mermaid chart={`
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
  graph LR
    Repo{{data_biobase}}-->|"loads"|Node1((Gene))
    Repo-->|"maintained by"|Maintainer([Martin Preusse])
    Node1-->Node2(("Transcripts"))
    Node1-->Node3(("Proteins"))
        subgraph "primary nodes"
          Node1
          Node2
          Node3
        end
    click Maintainer href "https://github.com/mpreusse" "GitHub Maintainer Profile" _blank
    click Repo href "https://github.com/covidgraph/data_biobase" "GitHub Repo" _blank
    click Node1 href "/docs/api/objects/gene"
    click Node2 href "/docs/api/objects/transcript"
    click Node3 href "/docs/api/objects/protein"
    `}/>

## data_jhu_population

Covid case statistics from Jonhs Hopkins University and UN World Population data

<Mermaid chart={`
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
  graph LR
    Repo{{data_jhu_population}}-->|"loads"|Node1((DailyReport))
    Repo-->|"maintained by"|Maintainer1([Martin Preusse])
    Repo-->|"maintained by"|Maintainer2([Tim Bleimehl])
    Node1-->Node2(("Province"))
    Node1-->Node3(("Country"))
        subgraph "primary nodes"
          Node1
          Node2
          Node3
        end
    click Maintainer1 href "https://github.com/mpreusse" "GitHub Maintainer Profile" _blank
    click Maintainer href "https://github.com/motey" "GitHub Maintainer Profile" _blank
    click Repo href "https://github.com/covidgraph/data_jhu_population" "GitHub Repo" _blank
    `}/>


## data-lens-org-covid19-patents

Data transformed from the Lens.org Covid19 Patent Dataset

<Mermaid chart={`
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
  graph LR
    Repo{{data-lens-org-covid19-patents}}-->|"loads"|Node1((Patent))
    Repo-->|"maintained by"|Maintainer([Tim Bleimehl])
    Node1-->Node2(("PatentTitle"))
    Node1-->Node3(("PatentAbstract"))
        subgraph "primary nodes"
          Node1
          Node2
          Node3
        end
    click Maintainer href "https://github.com/motey" "GitHub Maintainer Profile" _blank
    click Repo href "https://github.com/covidgraph/data-lens-org-covid19-patents" "GitHub Repo" _blank
    click Node1 href "/docs/api/objects/patent"
    click Node2 href "/docs/api/objects/patent-title"
    click Node3 href "/docs/api/objects/patent-abstract"
    `}/>

## Clinical Trials

Data transformed from ClinicalTrials.gov. For additional information see this [related blog post](https://www.s-cubed-global.com/news/covidgraph-nerds-response-to-the-pandemic) by Kirsten Langendorf

<Mermaid chart={`
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
  graph LR
    Repo{{data_clinical-trials-gov}}-->|"loads"|Node1((ClinicalTrial))
    Repo-->|"maintained by"|Maintainer([KirstenLangendorf])
    Node1-->Node2(("StudyType"))
    Node1-->Node3(("Inclusion <br/>Criteria"))
    Node1-->Node4(("Exclusion <br/>Criteria"))
        subgraph "primary nodes"
          Node1
          Node2
          Node3
          Node4
        end
    click Maintainer href "https://github.com/KirstenLangendorf" "GitHub Maintainer Profile" _blank
    click Repo href "https://github.com/covidgraph/data-lens-org-covid19-patents" "GitHub Repo" _blank
    click Node1 href "/docs/api/objects/clinical-trial"
    click Node2 href "/docs/api/objects/study-type"
    click Node3 href "/docs/api/objects/inclusion-criteria"
    click Node4 href "/docs/api/objects/exclusion-criteria"
    `}/>

## helomics/data_hetionet



https://github.com/helomics/data_hetionet
