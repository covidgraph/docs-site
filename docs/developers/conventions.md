---
id: conventions
title: Conventions
sidebar_label: Conventions
slug: /conventions
---


Needs editing - copied from wiki

### Data Loading Template
* See [covidgraph/data_template](https://github.com/covidgraph/data_template) which serves as a template for developers writing scripts to load data into covidgraph.

### Nodes and Relationships
* See [Naming conventions](https://github.com/covidgraph/documentation/wiki/Adding-your-own-data-to-the-graph#2-follow-the-suggested-naming-conventions-for-the-nodes-and-relationships-you-create) for the suggested naming conventions for the nodes and relationships you create.

### Look and Feel
* See [Data Presentation](https://github.com/covidgraph/documentation/wiki/Data-Presentation) for information about theme conventions.

### Documentation
* Documentation that is specific to a repo should be contained in that repo's README.
* The main documentation wiki is for project level or general guidance.
* Any questions or bugs about a specific repo should be raised through [ZenHub](https://app.zenhub.com/workspaces/the-covidgraph-board-5e9c02aa9ff5df3379cdec8c/board) and logged against the relevant repo.
* If you feel you have any general, helpful queries or tips please add these to a suitable place in the main wiki.
* Markdown is preferred as this will allow documentation to be consistently extracted via the GitHub API

### Issue Labels
The standard GitHub labels are used along with several custom labels. Please note the following conventions when using labels:
* data source - please only use this label to tag an epic as an actual data source. Related issues can be linked to the epic.
* suggested - please use this label to tag suggested data sources. If you use the Data Source template this will be automatically added.
* use case - please only use this label to tag an epic as an actual use case. Related issues can be linked to the epic.
* numeric - this is used to tag a data source as numeric. The focus of CovidGraph is not necessarily to replicate many of the existing websites and dashboards presenting numeric data but feel free to log and tag as numeric any such data sources as there may be a use for them.
