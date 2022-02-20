const languagesMostUsed = (list) => {
  const LanguageList = list
    .map((item) => item.language)
    .filter((item) => item !== null);

  const LanguageUniqueList = [...new Set(LanguageList)];

  const LanguageCount = LanguageUniqueList.map((item) => ({
    language: item,
    count: LanguageList.filter((itemFiltered) => itemFiltered === item).length,
  }));

  return LanguageCount;
};

export default languagesMostUsed;
