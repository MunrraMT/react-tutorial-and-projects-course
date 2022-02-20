const mostForkedRepository = (list) => {
  const repositories = list
    .map((item) => ({
      repository: item.name,
      forks: item.forks_count,
      language: item.language,
    }))
    .sort((a, b) => b.forks - a.forks)
    .slice(0, 5);

  const totalForks = list.filter((item) => item.forks_count > 0).length;

  return { repositories, totalForks };
};

export default mostForkedRepository;
