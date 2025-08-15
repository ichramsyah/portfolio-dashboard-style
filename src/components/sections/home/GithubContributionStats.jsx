import { useState, useEffect, useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../../../contexts/ThemeContext';

export default function GithubContributionStats({ username }) {
  const { theme } = useContext(ThemeContext);
  const [stats, setStats] = useState({
    total: 0,
    thisWeek: 0,
    best: 0,
    average: 0,
  });

  useEffect(() => {
    fetch(`https://github-contributions-api.deno.dev/${username}.json`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.contributions) return;

        // Flatten array 2D jadi array 1D
        const days = data.contributions.flat();

        const total = data.totalContributions;
        const thisWeek = days.slice(-7).reduce((sum, d) => sum + d.contributionCount, 0);
        const best = Math.max(...days.map((d) => d.contributionCount));
        const average = (total / days.length).toFixed(1);

        setStats({ total, thisWeek, best, average });
      })
      .catch((err) => console.error('Error fetching GitHub data:', err));
  }, [username]);

  return (
    <div className="w-full mx-auto mt-8 border-b border-gray-3 dark:border-gray-7 pb-8">
      {/* Header */}
      <div className="pb-7">
        <h3 className="flex items-center text-xl text-gray-9 dark:text-white pb-3">
          <FaGithub className="text-xl" />
          <span className="ml-2">GitHub Contributions</span>
        </h3>
        <p className="text-gray-5 dark:text-gray-4">My GitHub activity over the past year.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total" value={stats.total} highlight />
        <StatCard label="This Week" value={stats.thisWeek} highlight />
        <StatCard label="Best" value={stats.best} highlight />
        <StatCard label="Average" value={`${stats.average} / day`} highlight />
      </div>

      {/* Calendar */}
      <div className="overflow-x-auto">
        <GitHubCalendar username={username} colorScheme={theme === 'dark' ? 'dark' : 'light'} blockSize={14} blockMargin={4} fontSize={14} />
      </div>
    </div>
  );
}

function StatCard({ label, value, highlight }) {
  return (
    <div className="bg-gray-2 dark:bg-gray-8 rounded-lg p-4 text-center transition">
      <p className="text-gray-5 text-sm">{label}</p>
      <p className={`text-2xl font-bold ${highlight ? 'text-green-6' : ''}`}>{value}</p>
    </div>
  );
}
