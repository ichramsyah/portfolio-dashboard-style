import { useState, useEffect, useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../../../contexts/ThemeContext';
import SpotlightCard from '../../common/SpotlightCard';
import LanguageEvolution from '../../common/LanguageEvolution';
import { LanguageContext } from '../../../contexts/LanguageContext';

export default function GithubContributionStats({ username }) {
  const { t } = useContext(LanguageContext);
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

        const days = data.contributions.flat();

        const total = data.totalContributions;
        const thisWeek = days.slice(-7).reduce((sum, d) => sum + d.contributionCount, 0);
        const best = Math.max(...days.map((d) => d.contributionCount));
        const average = (total / days.length).toFixed(1);

        setStats({ total, thisWeek, best, average });
      })
      .catch((err) => console.error('Error fetching GitHub data:', err));
  }, [username]);

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 5;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth;
    });
  };

  return (
    <div className="w-full mx-auto mt-8 border-b border-gray-3 dark:border-gray-5/30 pb-8">
      {/* Header */}
      <div className="pb-7">
        <h3 className="flex items-center text-xl text-gray-9 dark:text-gray-2 pb-3">
          <FaGithub className="text-[20px]" />
          <span className="ml-2">{t('home.githubcontribution')}</span>
        </h3>
        <p className="text-gray-5 dark:text-gray-4/90">{t('home.githubcontribution_paragraph')}</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label={t('home.githubcontribution_total')} value={stats.total} highlight />
        <StatCard label={t('home.githubcontribution_week')} value={stats.thisWeek} highlight />
        <StatCard label={t('home.githubcontribution_best')} value={stats.best} highlight />
        <StatCard label={t('home.githubcontribution_average')} value={`${stats.average} / ${t('home.githubcontribution_day')}`} highlight />
      </div>

      {/* Calendar */}
      <div className="flex grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
        <div className="text-gray-8 dark:text-gray-3">
          <GitHubCalendar
            transformData={selectLastHalfYear}
            username={username}
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#161718ff', '#125d37ff', '#028b42ff', '#2db54dff', '#43ef60ff'],
            }}
            blockSize={14}
            blockMargin={4}
            fontSize={14}
          />
        </div>
        <div className="mt-2">
          <LanguageEvolution username="ichramsyah" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, highlight }) {
  return (
    <SpotlightCard className="bg-gray-1/40 dark:bg-gray-6/10">
      <div className="rounded-lg p-4 text-center transition">
        <p className="text-gray-8 dark:text-gray-2 text-sm transition-color duration-500">{label}</p>
        <p className={`text-2xl font-bold ${highlight ? 'text-green-6' : ''}`}>{value}</p>
      </div>
    </SpotlightCard>
  );
}
