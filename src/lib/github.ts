export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionData = {
  total: number;
  days: ContributionDay[];
};

export async function getContributions(): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/mibienpanjoe?y=last",
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    return { total: data.total.lastYear, days: data.contributions };
  } catch {
    return null;
  }
}
