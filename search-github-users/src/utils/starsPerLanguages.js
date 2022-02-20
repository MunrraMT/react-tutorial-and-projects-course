const starsPerLanguages = (list) => {
  const languageAndStarsList = list
    .map((item) => ({ language: item.language, stars: item.stargazers_count }))
    .filter((item) => item.language !== null);

  const languageList = languageAndStarsList.map((item) => item.language);

  const languageUniqueList = [...new Set(languageList)];

  const languages = languageUniqueList.map((itemLanguage) => ({
    language: itemLanguage,
    stars: languageAndStarsList.reduce(
      (acc, itemReduce) =>
        itemLanguage === itemReduce.language ? acc + itemReduce.stars : acc + 0,
      0,
    ),
  }));

  const totalStars = languageAndStarsList.reduce(
    (acc, item) => Number(acc) + Number(item.stars),
    0,
  );

  return { languages, totalStars };
};

export default starsPerLanguages;
