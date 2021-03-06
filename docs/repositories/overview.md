---
id: overview
title: CovidGraph Repositories
sidebar_label: Overview
slug: /overview
---
import Mermaid from '@theme/Mermaid'


<Mermaid chart={`
  graph LR
    %%
    %%===Data Sources===
    PM([PubMed])-->C19{{data_cord19}}
    BioMed([BioMedical x 9])-->DBio{{data_biobase}}
    Lens([Lens.org])-->Patents{{covid19-patents}}
    CTG([ClinicalTrials.gov])-->Trials{{data_clinical-trials-gov}}
    JHU([Johns Hopkins])-->Stats{{data_jhu_population}}
    UN([UN Statistics])-->Stats
    SEMS([SEMS MaSyMoS])-->MaMs
    %%
    %%===Data Loading Repos===
    DL{{"Motherlode"}}-.->CG
    C19-->CG[(CovidGraph)]
    DBio-->CG
    Patents-->CG
    Trials-->CG
    Stats-->CG
    MaMs{{"data_MaSyMoS"}}-->CG
    %%
    %%===Application Repos
    CG-->VGE{{"Visual Graph Explorer"}}
    CG-->RA{{"React App"}}
    CG-->SA{{Structr App}}
    %%
    %%===Graph Processing Repos
    FTI{{fulltext-indexes}}-->CG
    Frag{{fragmentize_text}}-->CG
    TGM{{text_gene_match}}-->CG
    BioBert{{data-biobert}}-->CG
    %%
    %%===Infrastructure===
    I{{"Infrastructure"}}
    %%
    %%===Sub Graphs===
        subgraph "data sources"
          PM
          BioMed
          Lens
          CTG
          JHU
          UN
          SEMS
        end
        subgraph "data loading repos"
          C19
          DBio
          Patents
          Trials
          Stats
          DL
          MaMs
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
        subgraph "infrastructure repos"
          I
        end
    %%
    %%===Links===
    click HE href "https://healthecco.org" "The HealthECCO Website"
    click CG href "https://covidgraph.org" "The CovidGraph Website"
    click C19 href "/docs/data-loading-repos#data_cord19"
    `}/>
