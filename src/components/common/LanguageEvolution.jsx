import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LanguageEvolution({ username }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await res.json();

        const yearlyLangs = {};

        repos.forEach((repo) => {
          if (repo.language && repo.created_at) {
            const year = new Date(repo.created_at).getFullYear();
            if (!yearlyLangs[year]) yearlyLangs[year] = {};
            yearlyLangs[year][repo.language] = (yearlyLangs[year][repo.language] || 0) + 1;
          }
        });

        const chartData = Object.entries(yearlyLangs).map(([year, langs]) => ({
          year,
          ...langs,
        }));

        setData(chartData);
      } catch (err) {
        console.error('Error fetching repos:', err);
      }
    }

    fetchRepos();
  }, [username]);

  // Palet hijau gelap (mirip calendar kamu)
  const COLORS = ['#34d399', '#6ee7b7', '#10b981', '#047857', '#065f46'];

  return (
    <div className="">
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="year" stroke="#9ca3af" />
            <YAxis allowDecimals={false} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                border: '1px solid #374151',
                borderRadius: '0.5rem',
                color: '#d1d5db',
              }}
            />
            <Legend wrapperStyle={{ color: '#d1d5db' }} />

            {Object.keys(data.reduce((acc, cur) => ({ ...acc, ...cur }), {}))
              .filter((key) => key !== 'year')
              .map((lang, index) => (
                <Line key={lang} type="monotone" dataKey={lang} stroke={COLORS[index % COLORS.length]} strokeWidth={2} dot={{ r: 3, fill: COLORS[index % COLORS.length] }} />
              ))}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-4">Loading language evolution...</p>
      )}
    </div>
  );
}
