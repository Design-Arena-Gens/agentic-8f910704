'use client'

import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ThemeToggle from './components/ThemeToggle'
import SearchResults from './components/SearchResults'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    setHasSearched(true)

    // Simulate search results
    const mockResults = [
      {
        id: 1,
        title: query,
        description: 'A comprehensive overview of the topic with detailed information and context.',
        url: '#'
      },
      {
        id: 2,
        title: `Understanding ${query}`,
        description: 'Deep dive into the concepts, principles, and applications of this subject.',
        url: '#'
      },
      {
        id: 3,
        title: `${query} - Technical Documentation`,
        description: 'Official technical documentation and reference materials for developers.',
        url: '#'
      },
      {
        id: 4,
        title: `Best Practices for ${query}`,
        description: 'Industry-standard best practices and recommendations from experts.',
        url: '#'
      },
      {
        id: 5,
        title: `${query} Tutorial`,
        description: 'Step-by-step tutorial for beginners and intermediate users.',
        url: '#'
      }
    ]

    setResults(mockResults)
  }

  return (
    <main className="min-h-screen relative">
      <ThemeToggle />

      <div className={`flex flex-col transition-all duration-500 ${
        hasSearched ? 'pt-8 px-8' : 'items-center justify-center min-h-screen'
      }`}>
        <div className={`w-full max-w-3xl ${hasSearched ? '' : 'mx-auto'}`}>
          <div className="flex items-center justify-between mb-8">
            <h1 className={`font-bold tracking-tight transition-all duration-500 ${
              hasSearched ? 'text-2xl' : 'text-5xl mb-12 text-center w-full'
            }`}>
              Grokpedia
              <span className="version-badge ml-3">v0.1</span>
            </h1>
          </div>

          <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
        </div>

        {hasSearched && (
          <div className="w-full max-w-3xl mt-8">
            <SearchResults results={results} query={searchQuery} />
          </div>
        )}
      </div>
    </main>
  )
}
