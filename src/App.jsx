import React from 'react';
import Header from './components/layout/Header/Header';
import AnimationGrid from './components/animations/AnimationGrid';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimationGrid />
      </main>
    </div>
  );
}

export default App;