'use client'

interface SearchResult {
  id: number
  title: string
  description: string
  url: string
}

interface SearchResultsProps {
  results: SearchResult[]
  query: string
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12 opacity-60">
        <p>No results found for "{query}"</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 pb-12">
      <p className="opacity-60 mb-6">
        Found {results.length} results for "{query}"
      </p>
      {results.map((result) => (
        <div key={result.id} className="result-card">
          <h2 className="result-title">{result.title}</h2>
          <p className="result-description">{result.description}</p>
        </div>
      ))}
    </div>
  )
}
