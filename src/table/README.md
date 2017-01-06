# Table

class: Table
selector: `cdl-table`
@Inputs
| Input   | Type          | Default Value |
| ------- | ------------- | ------------- |
| rows    | Array<Object> | `[]`          |
| striped | boolean       | `false`       |

@Outputs
| Output    | Event                                             |
| --------- | ------------------------------------------------- |
| selectAll | `{selected: boolean, rows: Array<Object>}`        |
| selectRow | `{selected: boolean, row: Object, index: number}` |

Expects a set of `cdl-column`s 

class: Column
selector: `cdl-column`
@Inputs
| Input | Type   | Default Value |
| ----- | ------ | ------------- |
| key   | string |               |
| title | string |               |
| width | string |               |

@Outputs
| Output | Event                              |
| ------ | ---------------------------------- |
| sort   | `{key: string, direction: string}` |

Expects a `template` which recives `data` as an argument and will be instantiated into cells
ex: `<template let-data="data">col 1 {{data}}</template>`