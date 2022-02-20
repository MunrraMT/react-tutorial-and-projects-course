const starsPerLanguages = (list) => {
  const languageAndStarsList = list
    .map((item) => ({ language: item.language, stars: item.stargazers_count }))
    .filter((item) => item.language !== null);

  const languageList = languageAndStarsList.map((item) => item.language);

  const languageUniqueList = [...new Set(languageList)];

  const languageCount = languageUniqueList.map((itemLanguage) => ({
    language: itemLanguage,
    stars: languageAndStarsList.reduce((acc, itemReduce) => {
      const total =
        itemLanguage === itemReduce.language ? acc + itemReduce.stars : acc + 0;

      return total;
    }, 0),
  }));

  const totalStars = languageAndStarsList.reduce((acc, item) => {
    const total = Number(acc) + Number(item.stars);

    return total;
  }, 0);

  return { languageCount, totalStars };
};

export default starsPerLanguages;
