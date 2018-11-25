// category: ""
// href: "https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/queries/examples#Cats"
// query: "SELECT ?item ?itemLabel \nWHERE \n{\n  ?item wdt:P31 wd:Q146.\n  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n}"
// tags: Array [ "P31", "Q146" ]
// title: "Cats"

window.invExamples = [
  {
    title: 'Works by Stefan Zweig',
    query: 'SELECT ?book WHERE {\n  ?book wdt:P50 wd:Q78491 .\n  }',
    tags: [ 'P31', 'Q78491' ],
    href: 'waitforit.com'
  }
]
