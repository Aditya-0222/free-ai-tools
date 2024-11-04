import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
          <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">
            {tool.category}
          </span>
        </div>
        <p className="mt-3 text-gray-600">{tool.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.features.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm rounded-md bg-gray-100 text-gray-700"
            >
              {feature}
            </span>
          ))}
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
        >
          Try it now
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}