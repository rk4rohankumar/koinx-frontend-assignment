import React,{memo} from 'react';

const NavigationMenu = () => {
  const sections = [
    { name: 'Overview', id: 'overview' },
    { name: 'Performance', id: 'performance' },
    { name: 'Fundamentals', id: 'fundamentals' },
    { name: 'News Insights', id: 'news-insights' },
    { name: 'Sentiment', id: 'sentiment' },
    { name: 'Team', id: 'team' },
    { name: 'Technical', id: 'technical' },
    { name: 'Tokenomics', id: 'tokenomics' },
  ];

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto whitespace-nowrap">
          {sections.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-brightgray px-3 py-2 rounded-md font-medium flex-shrink-0"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default memo(NavigationMenu);
