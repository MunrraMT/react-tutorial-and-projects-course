const mostPopularRepository = (list) => {
  const repositories = list
    .map((item) => ({
      repository: item.name,
      size: item.size,
      language: item.language,
    }))
    .sort((a, b) => b.size - a.size)
    .slice(0, 5);

  const totalRepositories = list.length;

  return { repositories, totalRepositories };
};

export default mostPopularRepository;
