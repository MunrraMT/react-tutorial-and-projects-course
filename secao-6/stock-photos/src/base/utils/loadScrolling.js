const loadScrolling = (setPage) => {
  const innerHeight = Number(window.innerHeight);
  const scrollTop = Number(document.documentElement.scrollTop);
  const bodyScrollHeight = Number(document.documentElement.offsetHeight);

  if (innerHeight + scrollTop === bodyScrollHeight) {
    setPage((prev) => Number(prev) + 1);
  }
};

export default loadScrolling;
