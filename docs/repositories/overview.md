---
id: overview
title: CovidGraph Repositories
sidebar_label: Overview
slug: /overview
---
import Mermaid from '@theme/Mermaid'

<Mermaid chart={`
%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
  graph LR
    %%
    %%===Data Sources===
    PM([PubMed])-->C19{{data_cord19}}
    GTex([GTex])-->DBio{{data_biobase}}
    GO([GeneOntology])-->DBio
    ReO([Reactome])-->DBio
    NcbiT([NcbiTaxonomy])-->DBio
    NcbiG([NcbiGene])-->DBio
    BWL([BigWordList])-->DBio
    ENS([Ensembl])-->DBio
    RSeq([RefSeq])-->DBio
    UP([Uniprot])-->DBio
    Lens([Lens.org])-->Patents{{covid19-patents}}
    CTG([ClinicalTrials.gov])-->Trials{{data_clinical-trials-gov}}
    JHU([Johns Hopkins])-->Stats{{data_jhu_population}}
    UN([UN Statistics])-->Stats
    %%
    %%===Data Loading Repos===
    C19-->CG[(CovidGraph)]
    DBio-->CG
    Patents-->CG
    Trials-->CG
    Stats-->CG
    %%
    %%===Application Repos
    CG-->VGE{{"Visual Graph Explorer"}}
    CG-->RA{{"React App"}}
    CG-->SA{{Structr App}}
    %%
    %%===Graph Processing Repos
    FTI([fulltext-indexes])-->CG
    Frag([fragmentize_text])-->CG
    TGM([text_gene_match])-->CG
    BioBert([data-biobert])-->CG
    %%
    %%===Sub Graphs===
        subgraph "data sources"
          PM
          GTex
          GO
          ReO
          NcbiT
          NcbiG
          BWL
          ENS
          RSeq
          UP
          Lens
          CTG
          JHU
          UN
        end
        subgraph "data loading repos"
          C19
          DBio
          Patents
          Trials
          Stats
        end
        subgraph "graph processing repos"
          FTI
          Frag
          TGM
          BioBert
        end
        subgraph "application repos"
          VGE
          RA
          SA
        end
    %%
    %%===Links===
    click HE href "https://healthecco.org" "The HealthECCO Website"
    click CG href "https://covidgraph.org" "The CovidGraph Website"
    `}/>
