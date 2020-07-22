const logger = store => next => action => {
  console.log('store:', store);
  console.log('next:', next);
  console.log('action:', action);
  console.log('');
  next(action)
};

export default logger;