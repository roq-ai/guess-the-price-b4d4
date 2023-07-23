const mapping: Record<string, string> = {
  guesses: 'guess',
  leaderboards: 'leaderboard',
  organizations: 'organization',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
