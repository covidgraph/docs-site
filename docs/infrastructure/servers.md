---
id: servers
title: Server Details
sidebar_label: Server Details
slug: /servers
---
import ServerStatus from '../../src/components/server-status';
import Mermaid from '@theme/Mermaid'

<Mermaid chart={`
  graph RL
    VGEl("Live Visual Graph Explorer")-->|"connects to"|CGl[(Live CovidGraph)]
    VGEd("Dev Visual Graph Explorer")-->|"connects to"|CGd[(Dev CovidGraph)]
    RAl("Live React App")-->|"connects to"|CGl
    SAl("Structr App")-->|"connects to"|CGl
    GQL("GraphQL API")-->|"connects to"|CGl
    Doc("Docusaurus")
        subgraph Petesis
          CGl
        end
        subgraph First-Root.de
          CGd
        end
        subgraph yWorks
          VGEl
          VGEd
        end
        subgraph Structr
          SAl
        end
        subgraph Vercel
          GQL
        end
        subgraph Netlify
          Doc
        end
    click HE href "https://healthecco.org" "The HealthECCO Website"
    click CGl href "https://covidgraph.org" "The CovidGraph Website"
    `}/>

### Live CovidGraph Server

#### Neo4j browser:

https://db.covidgraph.org/browser

#### Bolt Connection
```
bolt+s://db.covidgraph.org
Port: 7687
```
#### Account details
```
user: public
password: corona
```

### Development CovidGraph Server

#### Neo4j browser:

https://db-dev.covidgraph.org/browser/

#### Bolt Connection
```
bolt+s://db-dev.covidgraph.org
Port: 7687
```
#### Account details
```
user: public
password: corona
```
