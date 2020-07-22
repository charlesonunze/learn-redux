const logger = params => store => next => action => {
  console.log('params:', params);
  console.log('store:', store);
  console.log('next:', next);
  console.log('action:', action);
  console.log('');
  next(action)
};

export default logger;