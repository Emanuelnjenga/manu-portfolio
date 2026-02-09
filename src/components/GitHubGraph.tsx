"use client";

import { useEffect, useState } from "react";
import { Github, Activity, Code, GitPullRequest } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
    days: ContributionDay[];
}

interface GitHubStats {
    totalContributions: number;
    weeks: ContributionWeek[];
}

export function GitHubGraph() {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchGitHubContributions();
    }, []);

    const fetchGitHubContributions = async () => {
        try {
            const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'manu';
            const token = process.env.GITHUB_TOKEN;

            // If no token, use demo data
            if (!token) {
                setStats(generateDemoData());
                setIsLoading(false);
                return;
            }

            const query = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;

            const response = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch GitHub data');
            }

            const data = await response.json();
            const calendar = data.data.user.contributionsCollection.contributionCalendar;

            const formattedData: GitHubStats = {
                totalContributions: calendar.totalContributions,
                weeks: calendar.weeks.map((week: any) => ({
                    days: week.contributionDays.map((day: any) => ({
                        date: day.date,
                        count: day.contributionCount,
                        level: getLevelFromString(day.contributionLevel),
                    })),
                })),
            };

            setStats(formattedData);
        } catch (err) {
            console.error('GitHub API Error:', err);
            setError('Failed to load GitHub data. Using demo data.');
            setStats(generateDemoData());
        } finally {
            setIsLoading(false);
        }
    };

    const getLevelFromString = (level: string): 0 | 1 | 2 | 3 | 4 => {
        const levels: { [key: string]: 0 | 1 | 2 | 3 | 4 } = {
            'NONE': 0,
            'FIRST_QUARTILE': 1,
            'SECOND_QUARTILE': 2,
            'THIRD_QUARTILE': 3,
            'FOURTH_QUARTILE': 4,
        };
        return levels[level] || 0;
    };

    const generateDemoData = (): GitHubStats => {
        const weeks: ContributionWeek[] = [];
        const today = new Date();

        for (let week = 0; week < 52; week++) {
            const days: ContributionDay[] = [];
            for (let day = 0; day < 7; day++) {
                const date = new Date(today);
                date.setDate(date.getDate() - ((51 - week) * 7 + (6 - day)));
                const count = Math.floor(Math.random() * 10);
                const level = count === 0 ? 0 : count < 3 ? 1 : count < 5 ? 2 : count < 7 ? 3 : 4;
                days.push({
                    date: date.toISOString().split('T')[0],
                    count,
                    level: level as 0 | 1 | 2 | 3 | 4,
                });
            }
            weeks.push({ days });
        }

        return {
            totalContributions: Math.floor(Math.random() * 2000) + 1000,
            weeks,
        };
    };

    const getLevelColor = (level: 0 | 1 | 2 | 3 | 4) => {
        const colors = {
            0: 'bg-muted/30',
            1: 'bg-accent/30',
            2: 'bg-accent/50',
            3: 'bg-accent/70',
            4: 'bg-accent',
        };
        return colors[level];
    };

    if (isLoading) {
        return (
            <div className="w-full p-6 border border-border rounded-xl bg-background/50 backdrop-blur">
                <div className="animate-pulse">
                    <div className="h-6 bg-muted rounded w-48 mb-4" />
                    <div className="h-32 bg-muted rounded" />
                </div>
            </div>
        );
    }

    if (!stats) return null;

    // Show only last 26 weeks for better mobile display
    const displayWeeks = stats.weeks.slice(-26);

    return (
        <div className="w-full p-6 border border-border rounded-xl bg-background/50 backdrop-blur hover:border-accent/30 transition-colors">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                        <Github className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">GitHub Activity</h3>
                        <p className="text-sm text-muted-foreground">
                            {stats.totalContributions.toLocaleString()} contributions in the last year
                        </p>
                    </div>
                </div>
                {error && (
                    <span className="text-xs text-amber-500">Demo Mode</span>
                )}
            </div>

            {/* Contribution Graph */}
            <div className="overflow-x-auto pb-2">
                <div className="inline-flex gap-1 min-w-full">
                    {displayWeeks.map((week, weekIdx) => (
                        <div key={weekIdx} className="flex flex-col gap-1">
                            {week.days.map((day, dayIdx) => (
                                <div
                                    key={dayIdx}
                                    className={cn(
                                        "w-3 h-3 rounded-sm transition-all hover:ring-2 hover:ring-accent/50",
                                        getLevelColor(day.level)
                                    )}
                                    title={`${day.count} contributions on ${day.date}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                        <div
                            key={level}
                            className={cn(
                                "w-3 h-3 rounded-sm",
                                getLevelColor(level as 0 | 1 | 2 | 3 | 4)
                            )}
                        />
                    ))}
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
