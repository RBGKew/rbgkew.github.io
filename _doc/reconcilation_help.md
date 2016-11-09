# Using the Reconciliation Service

The recommended way to use the Reconciliation Service is with _OpenRefine_. This tool, previously called _Google Refine_, can query a _Web Service_ — a website that returns information in a form the computer can interpret — and record the results, whether that’s an exact match, a close match, a list of possible matches, or no match at all.

## [Software overview and installation](#installation)

Watch the three introductory videos — these instructions assume some familiarity with OpenRefine. There’s also [written documentation](http://openrefine.org/documentation.html).

*   [General introduction, editing messy data](https://www.youtube.com/watch?v=B70J_H_zAWM)
*   [Transforming semi-structured data into properly structured data](https://www.youtube.com/watch?v=cO8NVCs_Ba0)
*   [Calling a web service to supplement the dataset, reconciliation](https://www.youtube.com/watch?v=5tsyz3ibYzk)

**Users at Kew:** OpenRefine has been installed on the network. Go to `X:\apps\OpenRefine\` and double-click `OpenRefine.bat`. A black window should pop up, where any technical error messages appear. When you have finished with OpenRefine, click this window and press _Control C_ to close the program properly.

**Users elsewhere:** OpenRefine needs Java to run. If your computer supports it choose 64-bit Java — this allows working on larger datasets that consume more memory. A version of OpenRefine including the Kew extension is available [via GitHub](https://github.com/RBGKew/OpenRefine/releases/tag/2.6-beta.1-kew-preview.1) (recommended). Alternatively, download OpenRefine from [the download page](http://openrefine.org/download.html). Choose the development version, currently `2.6-beta1`. This does not include the [Kew extension](https://github.com/RBGKew/OpenRefine-Kew-Extension), so the functionality to extend data using The Plant List will not be available.

## [Data preparation](#data-preparation)

The services are easiest to use if the whole name (or value to be reconciled) is in a single column, like `Quercus alba L.` or `Quercus alba f. latiloba Sarg.`. Better results can sometimes be obtained with a column for each necessary part (e.g. generic epithet, species epithet, publication title etc). You can use OpenRefine to do this — see the videos — or any other program.

Optionally, use facets to limit which names you wish to match — for example, to select particular ranks to match. If you have a lot of names (over 1000) you could star 10 or so names and facet on them, for a trial run.

<spring:url var="about" value="/about">Find the configuration you want to use from the [list here](${about}). Note the two _endpoints_: the OpenRefine reconciliation service, and the <abbr title="JavaScript Object Notation">JSON</abbr> web service. These instructions will assume you have a list of plant names and wish to reconcile them against the <spring:url var="aboutIpniNameUrl" value="/about/IpniName">[IPNI Name reconciliation service](${aboutIpniNameUrl}).</spring:url></spring:url>

## [Querying the Reconciliation Service](#reconciling)

<spring:url var="reconcileIpniNameUrl" value="/reconcile/IpniName">

1.  If you have whole entities (e.g. full scientific names) in a single column, choose that column
2.  Otherwise, choose a column unique to each record, like an identifier.
3.  <spring:url var="img" value="/img/reconcile-start-reconciling.png">![](${img}) Click the column menu, and choose _Reconcile_ → _Start reconciling…_.</spring:url>
4.  If this is the first time you’ve reconciled against a particular service, you may need to click _Add Standard Service_. (Some services are already included.) Enter the URL from the Reconciliation Service website, for example `[http://${serverAndPort}${reconcileIpniNameUrl}](${reconcileIpniNameUrl})`, and click OK.
5.  Select the service from the list on the left. After a moment, the dialog is filled in with options.
6.  If you have columns for genus, species etc fill in the text boxes for _Also use relevant details from other columns_. The values to fill in come from those listed on the website describing the service (in this case, `epithet_1`, `epithet_2` etc, [listed here](${aboutIpniNameUrl}#properties)).  
    <spring:url var="img" value="/img/reconciling-select-properties.png">![](${img})</spring:url>
7.  Click _Start Reconciling_
8.  <spring:url var="img" value="/img/reconciling-results.png">![](${img})

    Results appear after a while. Where there’s a single possibility it will have been automatically selected. Otherwise, you can select the match using the tick boxes.

    It’s likely you will receive multiple results where IPNI has duplicate names. We hope to hide the duplicates from IPNI in the near future.

    </spring:url>
9.  If matching hasn’t worked you can also click _Search for match_ and adjust the query.  
    <spring:url var="img" value="/img/reconciling-suggest-entity.png">![](${img})</spring:url>
10.  <spring:url var="img" value="/img/add-column-based-on-this-column.png">![](${img})

    To get the identifiers: click the column’s menu and choose _Add column based on this column…_.

    Then use the expression `cell.recon.match.id`.

    <spring:url var="img" value="/img/add-column-cell-recon-match-id.png">![](${img})

    To get the name use `cell.recon.match.name` instead.

    These are GREL expressions — see the [GREL Functions Documentation](https://github.com/OpenRefine/OpenRefine/wiki/GREL-Functions) for more information.

    </spring:url></spring:url>

## [Extending data using the Metaweb Query Language service](#extending)

Data that has been (partially!) reconciled against IPNI and presented through a _MQL_ service can be added to your data. At present, only some data from [The Plant List](http://www.theplantlist.org/) is available in this way.

1.  Click a reconciled column heading and choose _Edit column_ → _Add column using MQL_.
2.  Select a service from the list on the left, or add a new one.
3.  This shows a list of available properties — choose one or more properties from this list and click OK. <spring:url var="img" value="/img/mql-tpl-example.png">![](${img})</spring:url>
4.  The data values are retrieved and added as extra columns. If they are entities themselves (for example, more plant names) then it’s possible to run further MQL queries from those columns.

## [Using the results](#exporting)

You can then export the results into standard formats, including CSV, using the _Export_ menu.

## [Troubleshooting](#troubleshooting)

This section will be completed as we discover problems — [please let us know](mailto:bi@kew.org?subject=Reconciliation%20service)! Allocating more memory may help, refer to the [OpenRefine documentation](https://github.com/OpenRefine/OpenRefine/wiki/FAQ:-Allocate-More-Memory) on this.

## [Advanced data preparation / manipulation](#advanced)

It's possible to use some of the transformers that are behind these reconciliation services to prepare your data. For example, you may wish to extract a year out of a field containing a whole reference. See the [String Transformers](https://github.com/RBGKew/String-Transformers#string-transformers) project for how to do this.

## [Source code](#sourcecode)

The source code is available on [Kew’s GitHub page](https://github.com/RBGKew/Reconciliation-and-Matching-Framework).
